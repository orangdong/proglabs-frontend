import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

export default function CourseDesc({ desc, tech }) {
  return (
    <Flex w={"full"} flexWrap={"wrap"} justifyContent={"center"}>
      <Box
        maxW={{ base: "none", md: "2xl" }}
        mr={{ base: 0, md: 10 }}
        mb={{ base: 5, md: 0 }}
        w={"full"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "28px", md: "32px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          About The Course
        </Text>
        <Text
          color={"textGray"}
          textAlign={"justify"}
          fontWeight={"light"}
          fontSize={{ base: "16px", md: "18px" }}
        >
          {desc}
        </Text>
      </Box>
      <Box maxW={{ base: "none", md: "lg" }} w={"full"}>
        <Text
          fontWeight={"bold"}
          fontSize={{ base: "28px", md: "32px" }}
          mb={{ base: "20px", md: "40px" }}
        >
          Featured Technologies
        </Text>
        <Flex flexWrap={"wrap"}>
          {tech.map((ct, i) => (
            <Image
              src={ct.img}
              width="50"
              height="50"
              alt={ct.tech}
              style={{ marginRight: "20px" }}
              key={i}
            />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
