import GeneralLayout from "@/components/GeneralLayout";
import { Flex, Box, Text } from "@chakra-ui/react";
import PremiumSection from "@/components/Sections/Courses/PremiumSection";
import FreeSection from "@/components/Sections/Courses/FreeSection";
import { fetchData } from "@/lib/fetchData";

export default function Courses({ courses }) {
  return (
    <GeneralLayout title={"Courses"} courses={courses}>
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
          <Flex
            my={{ base: "60px", md: "92px" }}
            flexDir={"column"}
            alignItems={"center"}
            w={"full"}
          >
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={{ base: 36, md: 48 }}
              mb={4}
            >
              Courses
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ base: "18px", md: "22px" }}
              color={"textGray"}
              mb={"60px"}
            >
              Explore & Expand your knowledge with our great courses
            </Text>
            <Flex w={"full"} flexDir={"column"}>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "28px", md: "32px" }}
                mb={"40px"}
              >
                Premium Course
              </Text>
              <PremiumSection courses={courses.filter((c) => c.isPremium)} />
            </Flex>
            <Flex w={"full"} flexDir={"column"}>
              <Text
                fontWeight={"bold"}
                fontSize={{ base: "28px", md: "32px" }}
                mb={"40px"}
              >
                Free Course
              </Text>
              <FreeSection courses={courses.filter((c) => !c.isPremium)} />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </GeneralLayout>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchData("/v1/courses");

  return {
    props: { courses: data },
  };
};
