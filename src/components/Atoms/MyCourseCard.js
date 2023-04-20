import { Box, Text, Image, Icon, Flex, Badge } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import NextLink from "next/link";

export default function MyCourseCard({
  title,
  image,
  courseId,
  description,
  isFinished,
  isMembership,
}) {
  return isMembership ? (
    <Box
      _hover={{
        cursor: "pointer",
      }}
      as={NextLink}
      href={`/dashboard/my-courses/${courseId}`}
      boxShadow={"md"}
      mr={{ base: 0, md: 5 }}
      borderRadius={"12px"}
      mb={5}
    >
      <Image
        src={image}
        borderTopRadius={"12px"}
        width={"285px"}
        height={"auto"}
        alt={"thumbnail"}
      />
      <Box px={3} py={3}>
        <Text
          fontSize={"18px"}
          maxW={"260px"}
          whiteSpace={"normal"}
          fontWeight={"semiBold"}
          mb={3}
        >
          {title}
        </Text>
        <Text
          fontSize={"14px"}
          noOfLines={3}
          maxW={"260px"}
          whiteSpace={"normal"}
          fontWeight={"light"}
          textAlign={"justify"}
          mb={3}
        >
          {description}
        </Text>
        {isFinished ? (
          <Flex alignItems={"center"}>
            <Icon color={"green.400"} mr={3} as={FiCheckCircle} />
            <Text color={"green.400"}>Course finished</Text>
          </Flex>
        ) : (
          ""
        )}
      </Box>
    </Box>
  ) : (
    <Box
      _hover={{
        cursor: "not-allowed",
      }}
      boxShadow={"md"}
      mr={{ base: 0, md: 5 }}
      borderRadius={"12px"}
      opacity={"0.7"}
      mb={5}
    >
      <Image
        src={image}
        borderTopRadius={"12px"}
        width={"285px"}
        height={"auto"}
        alt={"thumbnail"}
      />
      <Box px={3} py={3}>
        <Text
          fontSize={"18px"}
          maxW={"260px"}
          whiteSpace={"normal"}
          fontWeight={"semiBold"}
          mb={3}
        >
          {title}
        </Text>
        <Text
          fontSize={"14px"}
          noOfLines={3}
          maxW={"260px"}
          whiteSpace={"normal"}
          fontWeight={"light"}
          textAlign={"justify"}
          mb={3}
        >
          {description}
        </Text>
        {isFinished ? (
          <Flex alignItems={"center"}>
            <Icon color={"green.400"} mr={3} as={FiCheckCircle} />
            <Text color={"green.400"}>Course finished</Text>
          </Flex>
        ) : (
          ""
        )}
        <Badge borderRadius={"6px"} p={1} colorScheme="red">
          No membership detected
        </Badge>
      </Box>
    </Box>
  );
}
