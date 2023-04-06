/* eslint-disable jsx-a11y/alt-text */
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  Text,
  Image,
  Spinner,
  useDisclosure,
  FormLabel,
  FormControl,
  Input,
  Link,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState, useMemo, useCallback } from "react";
import useToastHook from "./ToastHook";
import { storeData } from "@/lib/storeData";
import { fetchData } from "@/lib/fetchData";
import { sign } from "tweetnacl";
import bs58 from "bs58";
import { signIn, useSession } from "next-auth/react";

export default function WalletModal({
  isOpen,
  onClose,
  selected,
  setSelected,
  ...rest
}) {
  const {
    isOpen: isUserOpen,
    onOpen: onUserOpen,
    onClose: onUserClose,
  } = useDisclosure();
  const { wallets, select, connect, publicKey, signMessage } = useWallet();
  const { data: session } = useSession();
  const [registerState, setRegisterState] = useState();
  const [registerData, setRegisterData] = useState();
  const [userData, setUserData] = useState({});
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [toast, setToast] = useToastHook();
  const handleWallet = async (wallet) => {
    if (wallet.readyState === "Installed") {
      setIsButtonLoading(true);
      try {
        select(wallet.adapter.name);
        setSelected(wallet.adapter.name);
        return true;
      } catch (e) {
        console.log(e);
        return setToast({ message: "Something went wrong", type: "error" });
      }
    }

    return setToast({ message: "Wallet not installed", type: "warning" });
  };

  useEffect(() => {
    if (selected) {
      // setSelected(walletName);
      connect()
        .then(() => {
          setIsButtonLoading(false);
          onClose();
          return setToast({ message: "Wallet connected", type: "success" });
        })
        .catch((e) => {
          setIsButtonLoading(false);
          return setToast({ message: `${e}`, type: "error" });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, connect]);

  useEffect(() => {
    if (publicKey && session === null) {
      handleSign()
        .then((data) => {
          signIn("credentials", {
            publicKey: publicKey,
            signature: data,
            callbackUrl: `${window.location.origin}/dashboard`,
            redirect: false,
          });
          registerUser(publicKey);
        })
        .then((res) => {
          setRegisterState(res.status);
          if (res.status === "success") {
            setRegisterData(res.data);
          }
        })
        .catch(console.error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey]);

  const handleUpdateUser = async () => {
    if (publicKey) {
      const user = await storeData({
        endpoint: `/v1/users/${publicKey}`,
        method: "PUT",
        body: userData,
      });
      onUserClose();
      return setToast({ message: "User updated", type: "success" });
    }
    return setToast({ message: "No wallet connected", type: "error" });
  };

  useEffect(() => {
    if (registerState) {
      if (registerState === "success") {
        // open new modal for edit name
        onUserOpen();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerState]);

  const handleSign = useCallback(async () => {
    try {
      // `publicKey` will be null if the wallet isn't connected
      if (!publicKey) {
        return setToast({ message: "No wallet connected", type: "error" });
      }
      // `signMessage` will be undefined if the wallet doesn't support it
      if (!signMessage) {
        return setToast({
          message: "Wallet does not support message signing!",
          type: "error",
        });
      }

      // Encode anything as bytes
      const message = new TextEncoder().encode(
        "Sign this message to authenticate!"
      );
      // Sign the bytes using the wallet
      const signature = await signMessage(message);
      // Verify that the bytes were signed using the private key that matches the known public key
      if (!sign.detached.verify(message, signature, publicKey.toBytes())) {
        return setToast({ message: `Invalid signature`, type: "error" });
      }

      return bs58.encode(signature);
    } catch (error) {
      return setToast({
        message: `Signing failed: ${error?.message}`,
        type: "error",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publicKey, signMessage]);
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        {...rest}
      >
        <ModalOverlay bg={"rgba(0, 0, 0, 0.8)"} backdropFilter="blur(10px)" />
        <ModalContent borderRadius={"24px"}>
          <ModalHeader
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "22px", md: "24px" }}
          >
            Connect Wallet
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {wallets.map((wallet) => (
              <Flex
                key={wallet.adapter.name}
                as={Button}
                py={"28px"}
                px={4}
                _hover={{ bg: "#E3E8F4" }}
                borderRadius={"12px"}
                border={"1px solid #E3E8F4"}
                bg={"transparent"}
                w={"full"}
                justifyContent={"space-between"}
                mb={4}
                alignItems={"center"}
                onClick={() => handleWallet(wallet)}
                isDisabled={isButtonLoading}
              >
                {isButtonLoading ? (
                  <Flex w={"full"} justifyContent={"center"}>
                    <Spinner color={"#293F48"} />
                  </Flex>
                ) : (
                  <>
                    <Flex alignItems={"center"}>
                      <Image
                        src={wallet.adapter.icon}
                        alt={wallet.adapter.name}
                        h={6}
                        w={6}
                        mr={3}
                      />
                      <Text fontWeight={"semiBold"} fontSize={"18px"}>
                        {wallet.adapter.name}
                      </Text>
                    </Flex>
                    {wallet.readyState === "Installed" ? (
                      <Box
                        fontWeight={"medium"}
                        p={2}
                        bg={"green.100"}
                        color={"green.500"}
                        borderRadius={"6px"}
                        fontSize={"14px"}
                      >
                        Detected
                      </Box>
                    ) : (
                      ""
                    )}
                  </>
                )}
              </Flex>
            ))}
          </ModalBody>

          {/* <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter> */}
        </ModalContent>
      </Modal>

      {/* Complete User Data Modal */}
      <Modal
        closeOnOverlayClick={false}
        isOpen={isUserOpen}
        onClose={onUserClose}
        isCentered
      >
        <ModalOverlay bg={"rgba(0, 0, 0, 0.8)"} backdropFilter="blur(10px)" />
        <ModalContent borderRadius={"24px"}>
          <ModalHeader
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: "22px", md: "24px" }}
          >
            Complete Profile
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                borderRadius={"12px"}
                type="text"
                value={userData.name ? userData.name : ""}
                fontSize={"18px"}
                size="lg"
                onChange={(e) =>
                  setUserData((curr) => ({
                    name: e.target.value,
                  }))
                }
              />
              <Link
                onClick={() =>
                  setUserData((curr) => ({
                    name: registerData?.name,
                  }))
                }
                color={"textGray"}
                fontSize={"16px"}
                textDecoration={"underline"}
                ml={1}
                mt={1}
              >
                Use wallet address as username
              </Link>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              bg={"backgroundTeal"}
              _hover={{ bg: "backgroundTealHover" }}
              color={"textWhite"}
              borderRadius={"12px"}
              onClick={handleUpdateUser}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const registerUser = async (publicKey) => {
  const getUser = await fetchData(`/v1/users/${publicKey}`);
  if (getUser && getUser.status) {
    return {
      data: "something went wrong",
      status: "error",
    };
  }

  if (getUser === null) {
    const user = await storeData({
      endpoint: "/v1/users",
      method: "POST",
      body: { address: publicKey },
    });

    return {
      data: user,
      status: "success",
    };
  }

  return {
    data: "something went wrong",
    status: "error",
  };
};
