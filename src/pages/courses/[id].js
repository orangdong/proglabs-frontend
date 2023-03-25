import GeneralLayout from "@/components/GeneralLayout";
import CourseDesc from "@/components/Sections/CourseDetail/CourseDesc";
import CourseModule from "@/components/Sections/CourseDetail/CourseModule";
import CourseStats from "@/components/Sections/CourseDetail/CourseStats";
import { fetchData } from "@/lib/fetchData";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function CourseDetail({ courseData, courses }) {
  return (
    <GeneralLayout title={"Course Detail"} courses={courses}>
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
              mb={"40px"}
              maxW={"lg"}
            >
              {courseData.title}
            </Text>
            <CourseStats
              member={courseData._count.userCourses}
              type={courseData.isPremium ? "Premium" : "Free"}
              certificate={courseData.isPremium ? true : false}
            />
            <CourseModule
              image={courseData.thumbnail}
              module={courseData.courseModules}
            />
            <CourseDesc
              desc={courseData.description}
              tech={courseData.courseTechnologies}
            />
          </Flex>
        </Flex>
      </Box>
    </GeneralLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;

  const data = await fetchData(`/v1/courses`);
  const courseData = await fetchData(`/v1/courses/${id}`);
  return {
    props: {
      courseData,
      courses: data,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const data = await fetchData("/v1/courses");
  return {
    paths: data.map((course) => ({
      params: {
        id: course.id.toString(),
      },
    })),
    fallback: false,
  };
};
