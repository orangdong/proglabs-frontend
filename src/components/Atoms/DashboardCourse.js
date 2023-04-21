import { Box, Flex, Image, Text } from "@chakra-ui/react";
import NextLink from "next/link";

export default function DashboardCourse({
  title,
  finished,
  total,
  image,
  isMembership,
  courseId,
}) {
  return isMembership ? (
    <Flex mb={3}>
      <Image
        src={image}
        w={"full"}
        h={"auto"}
        borderRadius={"6px"}
        maxW={"150px"}
        alt="thumbnail"
      />
      <Flex
        ml={3}
        w={"full"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Text
          _hover={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          as={NextLink}
          href={`/dashboard/my-courses/${courseId}`}
          fontSize={"18px"}
          fontWeight={"medium"}
          noOfLines={2}
        >
          {title}
        </Text>
        <Flex w={"full"} itemsAlign={"center"}>
          <Box
            w={"full"}
            borderRadius={"full"}
            h={"18px"}
            bg={"gray.100"}
            mr={3}
          >
            <Box
              h={"18px"}
              borderRadius={"full"}
              bg={"#293F48"}
              w={total > 0 ? `${(finished / total) * 100}%` : 0}
            />
          </Box>
          <Text>
            {finished}/{total}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  ) : (
    <Flex
      mb={3}
      _hover={{
        cursor: "not-allowed",
      }}
      opacity={"0.7"}
    >
      <Image
        src={image}
        w={"full"}
        h={"auto"}
        borderRadius={"6px"}
        maxW={"150px"}
        alt="thumbnail"
      />
      <Flex
        ml={3}
        w={"full"}
        flexDir={"column"}
        justifyContent={"space-between"}
      >
        <Text fontSize={"18px"} fontWeight={"medium"} noOfLines={2}>
          {title}
        </Text>
        <Flex w={"full"} itemsAlign={"center"}>
          <Box
            w={"full"}
            borderRadius={"full"}
            h={"18px"}
            bg={"gray.100"}
            mr={3}
          >
            <Box
              h={"18px"}
              borderRadius={"full"}
              bg={"#293F48"}
              w={total > 0 ? `${(finished / total) * 100}%` : 0}
            />
          </Box>
          <Text>
            {finished}/{total}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
