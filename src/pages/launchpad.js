import GeneralLayout from "@/components/GeneralLayout";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { fetchData } from "@/lib/fetchData";
import Image from "next/image";

export default function Launchpad({ courses }) {
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
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Image
                src="/assets/launchpad.png"
                width="500"
                height="500"
                alt="launchpad"
                style={{ borderRadius: "24px" }}
              />
              <Box
                borderRadius={"24px"}
                p={6}
                bg={"backgroundDark"}
                maxW={"500px"}
                maxH={"500px"}
              >
                <Text
                  fontWeight={"bold"}
                  fontSize={"36px"}
                  color={"textWhite"}
                  mb={3}
                >
                  Progpass
                </Text>
                <Text fontSize={"16px"} color={"#C4C4C4"} mb={2}>
                  Progpass is a limited edition NFT collection that gives you
                  access to all the courses and benefits available at Proglabs.
                </Text>
                <Text fontSize={"16px"} color={"#C4C4C4"}>
                  The NFT are available on the Devnet. Get your SOL at{" "}
                  <Link
                    textDecoration={"underline"}
                    src="https://solfaucet.com"
                    _hover={{ color: "textWhite" }}
                  >
                    solfaucet.com
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </GeneralLayout>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchData("/v1/courses");

  return {
    props: { courses: data },
  };
};
