import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function FeaturesSection() {
  return (
    <Box bg={"backgroudDark"} mt={"72px"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        h={"full"}
        maxW={"1280px"}
        w={"full"}
        mx={"auto"}
        px={4}
        color={"textWhite"}
        py={"120px"}
      >
        <Flex
          w={"full"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          h={"full"}
        >
          <Flex
            flexDir={"column"}
            justifyContent={"flex-start"}
            maxW={"416px"}
            h={"full"}
          >
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "36px", md: "48px" }}
              mb={"40px"}
            >
              Enhance Your Learning Experience 🎯
            </Text>
            <Text fontSize={{ base: "18px", md: "22px" }}>
              Maximize your learning potential & experience the future of
              learning with our NFT-Based membership features.
            </Text>
          </Flex>
          <Flex
            flexDir={"column"}
            flexWrap={"wrap"}
            mt={{ base: "80px", md: "120px" }}
          >
            <Flex flexWrap={"wrap"}>
              <Box maxW={"379px"} mr={{ base: 0, md: "40px" }}>
                <Image
                  src={"assets/exclusive-icon.svg"}
                  height="50"
                  width="50"
                  alt="icon"
                />
                <Text
                  mt={3}
                  fontSize={{ base: "18px", md: "22px" }}
                  fontWeight={"semiBold"}
                >
                  Exclusive Courses & Community
                </Text>
                <Text mt={5} fontSize={{ base: "16px", md: "18px" }}>
                  Gain access to expert resources, collaborative opportunities,
                  and a supportive environment to take your skills to the next
                  level.
                </Text>
              </Box>
              <Box maxW={"379px"} mt={{ base: 5, md: 0 }}>
                <Image
                  src={"assets/flexible-icon.svg"}
                  height="50"
                  width="50"
                  alt="icon"
                />
                <Text
                  mt={3}
                  fontSize={{ base: "18px", md: "22px" }}
                  fontWeight={"semiBold"}
                >
                  Flexible Membership
                </Text>
                <Text mt={5} fontSize={{ base: "16px", md: "18px" }}>
                  Experience the flexibility with our NFT-based system, allowing
                  you to easily transfer, trade, or resell your membership at
                  any time.
                </Text>
              </Box>
            </Flex>
            <Flex flexWrap={"wrap"} mt={{ base: 5, md: "80px" }}>
              <Box maxW={"379px"} mr={{ base: 0, md: "40px" }}>
                <Image
                  src={"assets/ownership-icon.svg"}
                  height="50"
                  width="50"
                  alt="icon"
                />
                <Text
                  mt={3}
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={"semiBold"}
                >
                  Full Ownership
                </Text>
                <Text mt={5} fontSize={{ base: "16px", md: "18px" }}>
                  Take ownership of your membership with our NFT-based system,
                  which gives you complete control over your access and
                  benefits.
                </Text>
              </Box>
              <Box maxW={"379px"} mt={{ base: 5, md: 0 }}>
                <Image
                  src={"assets/safety-icon.svg"}
                  height="50"
                  width="50"
                  alt="icon"
                />
                <Text
                  mt={3}
                  fontSize={{ base: "18px", md: "22px" }}
                  fontWeight={"semiBold"}
                >
                  User Safety
                </Text>
                <Text mt={5} fontSize={{ base: "16px", md: "18px" }}>
                  Enjoy a secure and fraud-proof membership experience with our
                  NFT-based system that ensures user safety and authenticity.
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
