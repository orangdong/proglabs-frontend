import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function LogoSection() {
  return (
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
        <Flex mt={"92px"} flexDir={"column"} alignItems={"center"} w={"full"}>
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={{ base: 36, md: 48 }}
            mb={4}
          >
            Kick-start Your Career at Tech 🚀
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "18px", md: "22px" }}
            color={"textGray"}
            mb={"60px"}
          >
            Our Alumni work at these top startups and tech giants
          </Text>
          <Image
            src="/assets/logo-partner.png"
            width={1155.19}
            height="175"
            alt="partner-logo"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
