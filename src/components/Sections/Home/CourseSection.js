import { Box, Flex, Text } from "@chakra-ui/react";
import CourseCard from "@/components/Atoms/CourseCard";
import Image from "next/image";

export default function CourseSection() {
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
            Featured Courses 💡
          </Text>
          <Text
            textAlign={"center"}
            fontSize={{ base: "18px", md: "22px" }}
            color={"textGray"}
            mb={{ base: "60px", md: "120px" }}
          >
            Here are our featured courses that suit your tech needs.
          </Text>
          <Flex w={"full"} justifyContent={"space-between"} flexWrap="wrap">
            <CourseCard>
              <Image
                src="/assets/course-thumbnail.png"
                height="205"
                width="365"
                alt="thumbnail"
                style={{ borderRadius: "12px" }}
              />
              <Text fontWeight={"bold"} fontSize={"22px"} mt={"24px"} mb={4}>
                Starter Course: Basic Javascript
              </Text>
              <Box
                py={1}
                px={3}
                borderRadius={"4px"}
                fontSize={"14px"}
                bg={"backgroudDark"}
                w={"fit-content"}
                color={"textWhite"}
                fontWeight={"semiBold"}
                mb={4}
              >
                Free Course
              </Box>
              <Text mb={4}>9 course modules</Text>
              <Text mb={4} fontWeight={"semiBold"} fontSize={"18px"}>
                Featured technologies used
              </Text>
              <Flex>
                <Image
                  src="/assets/js-logo.svg"
                  width="50"
                  height="50"
                  alt="js-logo"
                />
              </Flex>
            </CourseCard>
            <CourseCard>
              <Image
                src="/assets/course-thumbnail.png"
                height="205"
                width="365"
                alt="thumbnail"
                style={{ borderRadius: "12px" }}
              />
              <Text fontWeight={"bold"} fontSize={"22px"} mt={"24px"} mb={4}>
                Advanced Javascript
              </Text>
              <Box
                py={1}
                px={3}
                borderRadius={"4px"}
                fontSize={"14px"}
                bg={"backgroudDark"}
                w={"fit-content"}
                color={"textWhite"}
                fontWeight={"semiBold"}
                mb={4}
              >
                Premium Course
              </Box>
              <Text mb={4}>9 course modules</Text>
              <Text mb={4} fontWeight={"semiBold"} fontSize={"18px"}>
                Featured technologies used
              </Text>
              <Flex>
                <Image
                  src="/assets/js-logo.svg"
                  width="50"
                  height="50"
                  alt="js-logo"
                />
              </Flex>
            </CourseCard>
            <CourseCard>
              <Image
                src="/assets/course-thumbnail.png"
                height="205"
                width="365"
                alt="thumbnail"
                style={{ borderRadius: "12px" }}
              />
              <Text fontWeight={"bold"} fontSize={"22px"} mt={"24px"} mb={4}>
                Getting Started With NodeJS
              </Text>
              <Box
                py={1}
                px={3}
                borderRadius={"4px"}
                fontSize={"14px"}
                bg={"backgroudDark"}
                w={"fit-content"}
                color={"textWhite"}
                fontWeight={"semiBold"}
                mb={4}
              >
                Premium Course
              </Box>
              <Text mb={4}>9 course modules</Text>
              <Text mb={4} fontWeight={"semiBold"} fontSize={"18px"}>
                Featured technologies used
              </Text>
              <Flex>
                <Image
                  src="/assets/js-logo.svg"
                  width="50"
                  height="50"
                  alt="js-logo"
                  style={{ marginRight: "16px" }}
                />
                <Image
                  src="/assets/node-logo.svg"
                  width="50"
                  height="50"
                  alt="node-logo"
                />
              </Flex>
            </CourseCard>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
