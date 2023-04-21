import DashboardLayout from "@/components/DashboardLayout";
import { Flex, Text, Box } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { fetchData } from "@/lib/fetchData";
import DashboardCourse from "@/components/Atoms/DashboardCourse";
import useMembership from "@/lib/useMembership";

export default function Dashboard({ userCourses, session, memberships }) {
  const isMembership = useMembership({ memberships });
  return (
    <DashboardLayout title={"Dashboard"}>
      <Flex flexWrap={"wrap"}>
        <Box pr={{ base: 0, md: 5 }} w={{ base: "100%", md: "50%" }} mb={5}>
          <Text fontWeight={"semiBold"} fontSize={"22px"} mb={5}>
            Ongoing Courses
          </Text>
          {userCourses.filter((uc) => !uc.isComplete).length > 0 ? (
            userCourses
              .filter((uc) => !uc.isComplete)
              .map((uc, i) => (
                <DashboardCourse
                  key={i}
                  finished={uc.course.courseModules.reduce(
                    (a, b) => a + b.lessonFinished,
                    0
                  )}
                  total={uc.course.courseModules.reduce(
                    (a, b) => a + b.courseLessons.length,
                    0
                  )}
                  image={uc.course.thumbnail}
                  title={uc.course.title}
                  isMembership={uc.course.isPremium ? isMembership : true}
                  courseId={uc.course.id}
                />
              ))
          ) : (
            <Text>No ongoing course</Text>
          )}
        </Box>
        <Box pr={{ base: 0, md: 5 }} w={{ base: "100%", md: "50%" }} mb={5}>
          <Text fontWeight={"semiBold"} fontSize={"22px"} mb={5}>
            Completed Courses
          </Text>
          {userCourses.filter((uc) => uc.isComplete).length > 0 ? (
            userCourses
              .filter((uc) => uc.isComplete)
              .map((uc, i) => (
                <DashboardCourse
                  key={i}
                  finished={uc.course.courseModules.reduce(
                    (a, b) => a + b.lessonFinished,
                    0
                  )}
                  total={uc.course.courseModules.reduce(
                    (a, b) => a + b.courseLessons.length,
                    0
                  )}
                  image={uc.course.thumbnail}
                  title={uc.course.title}
                  isMembership={uc.course.isPremium ? isMembership : true}
                  courseId={uc.course.id}
                />
              ))
          ) : (
            <Text>No completed course</Text>
          )}
        </Box>
      </Flex>
    </DashboardLayout>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data = await fetchData("/v1/me/courses?includeModules=true", {
    "x-auth-token": session.accessToken,
  });

  const memberships = await fetchData("/v1/membership", {
    "x-auth-token": session.accessToken,
  });

  return {
    props: {
      userCourses: data,
      memberships,
      session,
    },
  };
};
