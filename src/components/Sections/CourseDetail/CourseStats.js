import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FiX, FiCheck } from "react-icons/fi";

export default function CourseStats({ member, type, certificate }) {
  return (
    <Flex minW={"2xl"} justifyContent={"space-between"} mb={"120px"}>
      <Box>
        <Text
          color={"textDark"}
          fontWeight={"semiBold"}
          fontSize={"22px"}
          mb={4}
          textAlign={"center"}
        >
          Member
        </Text>
        <Text fontSize={"22px"} color={"textGray"} textAlign={"center"}>
          {member} Students
        </Text>
      </Box>
      <Box>
        <Text
          color={"textDark"}
          fontWeight={"semiBold"}
          fontSize={"22px"}
          mb={4}
          textAlign={"center"}
        >
          Class Type
        </Text>
        <Text fontSize={"22px"} color={"textGray"} textAlign={"center"}>
          {type}
        </Text>
      </Box>
      <Flex flexDir={"column"} alignItems={"center"}>
        <Text
          color={"textDark"}
          fontWeight={"semiBold"}
          fontSize={"22px"}
          mb={4}
          textAlign={"center"}
        >
          Certificate
        </Text>
        {certificate ? (
          <Icon
            color={"#293F48"}
            as={FiCheck}
            boxSize={{ base: "30px", md: "40px" }}
          />
        ) : (
          <Icon
            as={FiX}
            color={"textGray"}
            boxSize={{ base: "30px", md: "40px" }}
          />
        )}
      </Flex>
    </Flex>
  );
}
