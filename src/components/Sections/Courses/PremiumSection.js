import CourseCard from "@/components/Atoms/CourseCard";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function PremiumSection() {
  return (
    <Flex
      w={"full"}
      overflowX={"auto"}
      mb={"60px"}
      flexWrap={{ base: "nowrap", md: "wrap" }}
    >
      <CourseCard minW={"365px"} mr={"40px"}>
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
      <CourseCard minW={"365px"} mr={"40px"}>
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
  );
}
