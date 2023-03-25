import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function HowWeWorks() {
  return (
    <Flex w={"full"} flexDir={"column"}>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "28px", md: "32px" }}
        mb={"40px"}
        textAlign={{ base: "initial", md: "end" }}
      >
        How we works?
      </Text>

      <Flex
        flexWrap={"wrap"}
        flexDir={"row-reverse"}
        justifyContent={"space-between"}
      >
        <Text
          textAlign={"justify"}
          maxW={"500px"}
          fontWeight={"light"}
          fontSize={"18px"}
        >
          The token-gated e-learning platform using NFT-based membership would
          provide users with a secure and decentralized way to access
          high-quality educational content. Users can simply purchase NFT-based
          memberships using cryptocurrency, which would grant them access to the
          e-learning materials. Users could transfer their NFT memberships to
          others or sell them in NFT marketplace easily.
        </Text>
        <Image
          width="400"
          height="400"
          src={"/assets/how-we-works.svg"}
          alt="illus"
        />
      </Flex>
    </Flex>
  );
}
