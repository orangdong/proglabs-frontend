import DashboardLayout from "@/components/DashboardLayout";
import useMembership from "@/lib/useMembership";
import { getSession } from "next-auth/react";
import { fetchData } from "@/lib/fetchData";
import {
  Box,
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import useToastHook from "@/components/Atoms/ToastHook";
import { storeData } from "@/lib/storeData";

export default function MyCoursesDetail({ memberships, course, session }) {
  const isMembership = useMembership({
    memberships,
    redirect: true,
    isPremium: course.isPremium,
  });
  const [toast, setToast] = useToastHook();
  const [allLessons, setAllLessons] = useState(
    [].concat(
      ...course.courseModules.map((cm) => cm.courseLessons.map((cl) => cl))
    )
  );

  const handleUpdate = async ({ lessonId, e }) => {
    e.preventDefault();

    const model = {
      lessonId,
    };

    const finishedLesson = allLessons.filter((al) => al.isFinished).length;
    const totalLesson = allLessons.length;

    if (totalLesson === finishedLesson + 1) {
      const currDate = new Date();
      const options = { month: "short", day: "numeric", year: "numeric" };
      const date = currDate.toLocaleDateString("en-US", options);
      const isCourseFinished = {
        isComplete: true,
        id: course.id,
        date,
      };

      model.isCourseFinished = isCourseFinished;
    }

    const submit = await storeData({
      body: model,
      endpoint: `/v1/courses/lesson`,
      headers: {
        "x-auth-token": session.accessToken,
      },
      method: "PUT",
    });

    // set state disable
    const newItem = [...allLessons];
    const findIndex = newItem.findIndex((ni) => ni.id === lessonId);
    newItem[findIndex].isFinished = true;
    setAllLessons(newItem);

    return setToast({
      type: "success",
      message: "Course lesson finished",
    });
  };

  return (
    <DashboardLayout title={"My Course Detail"}>
      <Tabs
        variant="unstyled"
        display={"flex"}
        flexDir={{ base: "column-reverse", md: "row-reverse" }}
        position="relative"
        justifyContent={{ base: "normal", md: "space-between" }}
      >
        <TabList
          display={"flex"}
          flexDir={"column"}
          w={"full"}
          maxW={{ base: "100%", md: "30%" }}
          maxH={"550px"}
          overflowY={"auto"}
        >
          <Text fontWeight={"semiBold"} fontSize={"22px"} mb={5}>
            Course modules
          </Text>
          {course.courseModules.map((cm, i) => (
            <>
              <Text fontSize={"18px"} fontWeight={"semiBold"} mb={2}>
                {cm.title}
              </Text>
              {cm.courseLessons.map((cl, i) => (
                <Tab
                  _selected={{
                    background: "#293F48",
                    color: "white",
                  }}
                  fontSize={"18px"}
                  background={"gray.100"}
                  borderRadius={"12px"}
                  fontWeight={"medium"}
                  py={4}
                  mb={3}
                  key={i}
                >
                  {cl.title}
                </Tab>
              ))}
            </>
          ))}
        </TabList>
        <TabPanels
          w={"full"}
          maxW={{ base: "100%", md: "65%" }}
          maxH={"550px"}
          overflowY={"auto"}
        >
          {allLessons.map((al, i) => (
            <TabPanel key={i}>
              <Flex w={"full"} flexDir={"column"}>
                <Flex
                  w={"full"}
                  mb={5}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                >
                  <Text fontWeight={"semiBold"} fontSize={"22px"}>
                    Course content
                  </Text>
                  <Button
                    bg={"backgroundTeal"}
                    color={"white"}
                    borderRadius={"12px"}
                    _hover={{
                      bg: "backgroundTealHover",
                    }}
                    isDisabled={al.isFinished}
                    leftIcon={al.isFinished ? <FiCheckCircle /> : null}
                    onClick={(e) => handleUpdate({ lessonId: al.id, e })}
                    w={{ base: "full", md: "fit-content" }}
                    mt={{ base: 2, md: 0 }}
                  >
                    {al.isFinished ? "Finished" : "Mark as finished"}
                  </Button>
                </Flex>
                <Box>
                  <Text fontWeight={"medium"} fontSize={"18px"} mb={3}>
                    {al.title}
                  </Text>
                  <p>{al.content}</p>
                </Box>
              </Flex>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </DashboardLayout>
  );
}

export const getServerSideProps = async ({ req, params }) => {
  const session = await getSession({ req });
  const { id } = params;
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  // check if user enrolled the course
  const isEnrolled = await fetchData(`/v1/courses/${id}/enroll`, {
    "x-auth-token": session?.accessToken,
  });

  if (!isEnrolled) {
    return {
      redirect: {
        destination: "/dashboard/my-courses",
        permanent: false,
      },
    };
  }

  const memberships = await fetchData("/v1/membership", {
    "x-auth-token": session.accessToken,
  });
  const course = await fetchData(`/v1/me/my-course/${id}?includeLessons=true`, {
    "x-auth-token": session.accessToken,
  });

  return {
    props: {
      memberships,
      course,
      session,
    },
  };
};
