import CourseCard from "@/components/Atoms/CourseCard";
import { Flex, Text, Box } from "@chakra-ui/react";
import Image from "next/image";

export default function PremiumSection({ courses = [] }) {
  return (
    <Flex
      w={"full"}
      overflowX={"auto"}
      mb={"60px"}
      flexWrap={{ base: "nowrap", md: "wrap" }}
    >
      {courses.map((c, i) => (
        <CourseCard
          href={`/courses/${c.id}`}
          minW={"365px"}
          mr={"40px"}
          key={i}
        >
          <Image
            src={c.thumbnail}
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
            bg={"backgroundDark"}
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
  );
}
