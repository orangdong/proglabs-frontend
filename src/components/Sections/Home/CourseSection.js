import { Box, Flex, Text } from "@chakra-ui/react";
import CourseCard from "@/components/Atoms/CourseCard";
import Image from "next/image";

export default function CourseSection({ courses }) {
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
            {courses.slice(0, 3).map((c, i) => (
              <CourseCard key={i}>
                <Image
                  src="/assets/course-thumbnail.png"
                  height="205"
                  width="365"
                  alt="thumbnail"
                  style={{ borderRadius: "12px" }}
                />
                <Text fontWeight={"bold"} fontSize={"22px"} mt={"24px"} mb={4}>
                  {c.title}
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
                  {c.isPremium ? "Premium Course" : "Free Course"}
                </Box>
                <Text mb={4}>{c._count.courseModules} course modules</Text>
                <Text mb={4} fontWeight={"semiBold"} fontSize={"18px"}>
                  Featured technologies used
                </Text>
                <Flex>
                  {c.courseTechnologies.map((ct, i) => (
                    <Image
                      src={ct.img}
                      width="50"
                      height="50"
                      alt={ct.tech}
                      style={{ marginRight: "16px" }}
                      key={i}
                    />
                  ))}
                </Flex>
              </CourseCard>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
