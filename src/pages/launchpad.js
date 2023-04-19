import GeneralLayout from "@/components/GeneralLayout";
import { Box, Flex, Text, Link, Button } from "@chakra-ui/react";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";
import useToastHook from "@/components/Atoms/ToastHook";
import { useWallet } from "@solana/wallet-adapter-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useMetaplex } from "@/lib/useMetaplex";
import { PublicKey } from "@solana/web3.js";
import { storeData } from "@/lib/storeData";

export default function Launchpad({ courses, mintData }) {
  const { connected } = useWallet();
  const { metaplex } = useMetaplex();
  const [toast, setToast] = useToastHook();
  const { data: session } = useSession();
  const [candyMachine, setCandyMachine] = useState(null);
  const [guard, setGuard] = useState(null);
  const [mintLoading, setMintLoading] = useState(false);

  const handleMint = async (e) => {
    try {
      e.preventDefault();

      if (!connected || session === null) {
        // check if wallet connected
        return setToast({
          message: "Please connect wallet first",
          type: "warning",
        });
      }

      if (candyMachine && guard) {
        setMintLoading(true);
        // check if enough items
        if (
          candyMachine.itemsMinted.toString(10) -
            candyMachine.itemsAvailable.toString(10) >
          0
        ) {
          setMintLoading(false);
          return setToast({
            message: "not enough items available",
            type: "warning",
          });
        }

        // check if enough sol balance
        if (guard.solPayment != null) {
          const ballance = await metaplex.connection.getBalance(
            metaplex.identity().publicKey
          );

          const costInLamports =
            guard.solPayment.amount.basisPoints.toString(10);

          if (costInLamports > ballance) {
            setMintLoading(false);
            return setToast({
              message: "Not enough SOL in wallet",
              type: "warning",
            });
          }
        }

        // check mint limit
        if (guard.mintLimit != null) {
          const mitLimitCounter = metaplex
            .candyMachines()
            .pdas()
            .mintLimitCounter({
              id: guard.mintLimit.id,
              user: metaplex.identity().publicKey,
              candyMachine: candyMachine.address,
              candyGuard: candyMachine.candyGuard.address,
            });

          //Read Data from chain
          const mintedAmountBuffer = await metaplex.connection.getAccountInfo(
            mitLimitCounter,
            "processed"
          );

          let mintedAmount;
          if (mintedAmountBuffer != null) {
            mintedAmount = mintedAmountBuffer.data.readUintLE(0, 1);
          }
          if (mintedAmount != null && mintedAmount >= guard.mintLimit.limit) {
            setMintLoading(false);
            return setToast({
              message: "Mint limit reached",
              type: "warning",
            });
          }
        }

        const { nft } = await metaplex.candyMachines().mint({
          candyMachine,
          collectionUpdateAuthority: candyMachine.authorityAddress,
        });

        const register = await registerNftAddress({
          mintAddress: nft.mint.address.toBase58(),
        });

        if (register.status !== "success") {
          setMintLoading(false);
          return setToast({
            message: "Something went wrong",
            type: "error",
          });
        }

        setMintLoading(false);
        return setToast({
          message: "Progpass mint success! please check your wallet",
          type: "success",
        });
      }
    } catch (e) {
      console.error(e);
      setMintLoading(false);
      return setToast({
        message: "Something went wrong, Mint Failed",
        type: "error",
      });
    }
  };

  const registerNftAddress = async ({ mintAddress }) => {
    try {
      if (!session) {
        return setToast({
          message: "Something went wrong",
          type: "error",
        });
      }

      const register = await storeData({
        endpoint: "/v1/membership",
        headers: {
          "x-auth-token": session?.accessToken,
        },
        method: "POST",
        body: {
          mintAddress,
        },
      });

      return {
        status: "success",
        data: register,
      };
    } catch (e) {
      return e;
    }
  };

  const checkEligibility = async () => {
    const candyMachineAddress = new PublicKey(
      process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
    );
    const cm = await metaplex
      .candyMachines()
      .findByAddress({ address: candyMachineAddress });

    setCandyMachine(cm);

    // guard checks have to be done for the relevant guard group! Example is for the default groups defined in Part 1 of the CM guide
    const guards = cm.candyGuard.guards;
    setGuard(guards);
  };

  useEffect(() => {
    if (connected) {
      checkEligibility().catch(console.error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connected]);
  return (
    <GeneralLayout title={"Launchpad"} courses={courses}>
      <Box>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          h={"full"}
          maxW={"1280px"}
          w={"full"}
          mx={"auto"}
          px={4}
        >
          <Flex
            my={{ base: "60px", md: "92px" }}
            flexDir={"column"}
            alignItems={"center"}
            w={"full"}
          >
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={{ base: 36, md: 48 }}
              mb={4}
            >
              Launchpad
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "18px", md: "22px" }}
              color={"textGray"}
              mb={"60px"}
            >
              Get your NFT membership and start learning
            </Text>
            <Flex
              justifyContent={"space-between"}
              alignItems={"center"}
              flexWrap={"wrap"}
            >
              <Image
                src="/assets/launchpad.png"
                width="500"
                height="500"
                alt="launchpad"
                style={{ borderRadius: "24px" }}
              />
              <Flex
                borderRadius={"24px"}
                p={6}
                bg={"backgroundDark"}
                maxW={"500px"}
                minH={"500px"}
                flexDir={"column"}
                justifyContent={"space-between"}
                ml={{ base: 0, md: "80px" }}
                mt={{ base: "32px", md: 0 }}
              >
                <Box>
                  <Text
                    fontWeight={"bold"}
                    fontSize={{ base: "28px", md: "36px" }}
                    color={"textWhite"}
                    mb={3}
                  >
                    Progpass
                  </Text>
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    color={"#C4C4C4"}
                    mb={2}
                  >
                    Progpass is a limited edition NFT collection that gives you
                    access to all the courses and benefits available at
                    Proglabs.
                  </Text>
                  <Text
                    fontSize={{ base: "16px", md: "18px" }}
                    color={"#C4C4C4"}
                  >
                    The NFT are available on the Devnet. Get your SOL at{" "}
                    <Link
                      textDecoration={"underline"}
                      href="https://solfaucet.com"
                      _hover={{ color: "textWhite" }}
                    >
                      solfaucet.com
                    </Link>{" "}
                    (max 2 SOL / day)
                  </Text>
                </Box>
                <Box>
                  <Flex w={"full"} justifyContent={"space-between"} mb={1}>
                    <Text
                      fontWeight={"bold"}
                      color={"textWhite"}
                      fontSize={{ base: "18px", md: "22px" }}
                    >
                      Public
                    </Text>
                    <Text
                      fontWeight={"bold"}
                      color={"textWhite"}
                      fontSize={{ base: "18px", md: "22px" }}
                    >
                      {mintData.mintPrice} SOL
                    </Text>
                  </Flex>
                  <Flex w={"full"} justifyContent={"space-between"} mb={4}>
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      color={"#C4C4C4"}
                    >
                      Live
                    </Text>
                    <Text
                      fontSize={{ base: "16px", md: "18px" }}
                      color={"#C4C4C4"}
                    >
                      {mintData.totalMinted}/{mintData.totalItems}
                    </Text>
                  </Flex>
                  <Box
                    h={"12px"}
                    w={"full"}
                    borderRadius={"100px"}
                    bg={"#C4C4C4"}
                    mb={2}
                  >
                    <Box
                      h={"12px"}
                      borderRadius={"100px"}
                      w={`${
                        (mintData.totalMinted / mintData.totalItems) * 100
                      }%`}
                      bg={"#ECFEFF"}
                    />
                  </Box>
                  <Button
                    borderRadius={"12px"}
                    fontWeight={"bold"}
                    fontSize={{ base: "18px", md: "22px" }}
                    color={"#091F2A"}
                    bg={"#ECFEFF"}
                    mb={3}
                    w={"full"}
                    py={"24px"}
                    onClick={handleMint}
                    isLoading={mintLoading}
                  >
                    Mint
                  </Button>
                  <Text
                    fontSize={"16px"}
                    color={"#C4C4C4"}
                    textAlign={"center"}
                  >
                    Limit {mintData.mintLimit} per wallet
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </GeneralLayout>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchData("/v1/courses");
  const mintData = await fetchData("/v1/membership/mint-data");

  return {
    props: { courses: data, mintData },
  };
};
