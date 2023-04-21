import DashboardLayout from "@/components/DashboardLayout";
import { Flex, Text, Box } from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { fetchData } from "@/lib/fetchData";

export default function Dashboard({ userCourses, session, memberships }) {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Flex flexWrap={"wrap"}>
        <Box w={{ base: "100%", md: "50%" }}>
          <Text fontWeight={"semiBold"} fontSize={"22px"}>
            Ongoing Courses
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "50%" }}>
          <Text fontWeight={"semiBold"} fontSize={"22px"}>
            Finished Courses
          </Text>
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

  const data = await fetchData("/v1/me/courses", {
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
