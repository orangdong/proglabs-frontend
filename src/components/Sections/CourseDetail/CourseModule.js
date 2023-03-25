import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function CourseModule({ image, module }) {
  return (
    <Flex w={"full"} mb={"40px"} flexWrap={"wrap"} justifyContent={"center"}>
      <Image
        maxW={{ base: "none", md: "2xl" }}
        h={"auto"}
        w={"full"}
        borderRadius={"24px"}
        src={image}
        alt="thumbnail"
        mr={{ base: 0, md: 10 }}
        mb={{ base: 5, md: 0 }}
      />
      <Flex
        flexDir={"column"}
        bg={"white"}
        px={{ base: "16px", md: "24px" }}
        py={4}
        borderRadius={"24px"}
        maxW={{ base: "none", md: "lg" }}
        w={"full"}
        justifyContent={"space-between"}
      >
        <Text
          fontWeight={"semiBold"}
          fontSize={{ base: "18px", md: "22px" }}
          mb={4}
        >
          {module.length} Course Modules
        </Text>
        <Box maxH={"200px"} w={"full"} overflowY={"auto"}>
          {module.map((m, i) => (
            <Flex
              bg={"#F6FBFF"}
              borderRadius={"12px"}
              p={4}
              mb={2}
              justifyContent={"space-between"}
              key={i}
            >
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight={"semiBold"}
                noOfLines={1}
                maxW={"70%"}
              >
                {m.title}
              </Text>
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                maxW={"30%"}
                overflow={"hidden"}
                fontWeight={"semiBold"}
                whiteSpace={"nowrap"}
              >
                {m._count.courseLessons} Lessons
              </Text>
            </Flex>
          ))}
        </Box>
        <Button
          mt={3}
          w={"full"}
          color={"textWhite"}
          bg={"backgroundTeal"}
          _hover={{ bg: "backgroundTealHover" }}
          borderRadius={"12px"}
          fontWeight={"bold"}
          fontSize={{ base: "18px", md: "22px" }}
          py={"24px"}
        >
          Enroll Course
        </Button>
      </Flex>
    </Flex>
  );
}
