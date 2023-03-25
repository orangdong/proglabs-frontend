import { Text, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function WhyWeBuild() {
  return (
    <Flex w={"full"} flexDir={"column"} mb={"60px"}>
      <Text
        fontWeight={"bold"}
        fontSize={{ base: "28px", md: "32px" }}
        mb={"40px"}
      >
        Why we build this?
      </Text>

      <Flex flexWrap={"wrap"} justifyContent={"space-between"}>
        <Text
          textAlign={"justify"}
          maxW={"500px"}
          fontWeight={"light"}
          fontSize={"18px"}
        >
          Our NFT-based e-learning platform addresses the issues of inflexible
          traditional membership systems, centralized user data, account
          sharing, and content piracy. Our secure and flexible membership system
          enables users to access content while preventing unauthorized access
          and protecting their data. Our platform also enables content creators
          to protect their work from piracy, ensuring that they receive fair
          compensation.{" "}
        </Text>
        <Image
          width="400"
          height="400"
          src={"/assets/why-we-build.svg"}
          alt="illus"
        />
      </Flex>
    </Flex>
  );
}
