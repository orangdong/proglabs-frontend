import DashboardLayout from "@/components/DashboardLayout";
import {
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { getSession } from "next-auth/react";
import { fetchData } from "@/lib/fetchData";
import MyCourseCard from "@/components/Atoms/MyCourseCard";
import useMembership from "@/lib/useMembership";
import NextImage from "next/image";
import NextLink from "next/link";

export default function MyCourses({ userCourses, session, memberships }) {
  const isMembership = useMembership(memberships);
  return (
    <DashboardLayout title={"My Courses"}>
      <Tabs position="relative" variant="unstyled" mt={5}>
        <TabList overflowX={"auto"}>
          <Tab
            _selected={{
              background: "#293F48",
              color: "white",
            }}
            fontSize={"18px"}
            background={"gray.100"}
            borderRadius={"full"}
            mr={4}
            fontWeight={"medium"}
            px={"48px"}
          >
            All
          </Tab>
          <Tab
            _selected={{
              background: "#293F48",
              color: "white",
            }}
            fontSize={"18px"}
            background={"gray.100"}
            borderRadius={"full"}
            mr={4}
            fontWeight={"medium"}
            px={"48px"}
          >
            Premium
          </Tab>
          <Tab
            _selected={{
              background: "#293F48",
              color: "white",
            }}
            fontSize={"18px"}
            background={"gray.100"}
            borderRadius={"full"}
            mr={4}
            fontWeight={"medium"}
            px={"48px"}
          >
            Free
          </Tab>
        </TabList>
        <TabPanels my={5}>
          <TabPanel display={"flex"} flexWrap={"wrap"}>
            {userCourses.length > 0 ? (
              userCourses.map((uc, i) => (
                <MyCourseCard
                  key={i}
                  title={uc.course.title}
                  image={uc.course.thumbnail}
                  description={uc.course.description}
                  isFinished={uc.isComplete}
                  courseId={uc.courseId}
                  isMembership={uc.course.isPremium ? isMembership : true}
                />
              ))
            ) : (
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                w={"full"}
              >
                <NextImage
                  width="400"
                  height="400"
                  src={"/assets/no-course.svg"}
                  alt="empty-course"
                />
                <Text
                  mt={5}
                  fontWeight="light"
                  textAlign={"center"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  Uh oh.. it seems you haven&apos;t enrolled any courses.
                </Text>
                <Button
                  mt={5}
                  color={"textWhite"}
                  bg={"backgroundTeal"}
                  _hover={{ bg: "backgroundTealHover" }}
                  borderRadius={"12px"}
                  fontWeight={"bold"}
                  fontSize={{ base: "16px", md: "18px" }}
                  py={"22px"}
                  href="/courses"
                  as={NextLink}
                  w={"fit-content"}
                >
                  See Available Courses
                </Button>
              </Flex>
            )}
          </TabPanel>
          <TabPanel display={"flex"} flexWrap={"wrap"}>
            {userCourses.filter((uc) => uc.course.isPremium).length > 0 ? (
              userCourses
                .filter((uc) => uc.course.isPremium)
                .map((uc, i) => (
                  <MyCourseCard
                    key={i}
                    title={uc.course.title}
                    image={uc.course.thumbnail}
                    description={uc.course.description}
                    isFinished={uc.isComplete}
                    courseId={uc.courseId}
                    isMembership={uc.course.isPremium ? isMembership : true}
                  />
                ))
            ) : (
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                w={"full"}
              >
                <NextImage
                  width="400"
                  height="400"
                  src={"/assets/no-course.svg"}
                  alt="empty-course"
                />
                <Text
                  mt={5}
                  fontWeight="light"
                  textAlign={"center"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  Uh oh.. it seems you haven&apos;t enrolled any courses.
                </Text>
                <Button
                  mt={5}
                  color={"textWhite"}
                  bg={"backgroundTeal"}
                  _hover={{ bg: "backgroundTealHover" }}
                  borderRadius={"12px"}
                  fontWeight={"bold"}
                  fontSize={{ base: "16px", md: "18px" }}
                  py={"22px"}
                  href="/courses"
                  as={NextLink}
                  w={"fit-content"}
                >
                  See Available Courses
                </Button>
              </Flex>
            )}
          </TabPanel>
          <TabPanel display={"flex"} flexWrap={"wrap"}>
            {userCourses.filter((uc) => !uc.course.isPremium).length > 0 ? (
              userCourses
                .filter((uc) => !uc.course.isPremium)
                .map((uc, i) => (
                  <MyCourseCard
                    key={i}
                    title={uc.course.title}
                    image={uc.course.thumbnail}
                    description={uc.course.description}
                    isFinished={uc.isComplete}
                    courseId={uc.courseId}
                    isMembership={uc.course.isPremium ? isMembership : true}
                  />
                ))
            ) : (
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                flexDir={"column"}
                w={"full"}
              >
                <NextImage
                  width="400"
                  height="400"
                  src={"/assets/no-course.svg"}
                  alt="empty-course"
                />
                <Text
                  mt={5}
                  fontWeight="light"
                  textAlign={"center"}
                  fontSize={{ base: "16px", md: "18px" }}
                >
                  Uh oh.. it seems you haven&apos;t enrolled any courses.
                </Text>
                <Button
                  mt={5}
                  color={"textWhite"}
                  bg={"backgroundTeal"}
                  _hover={{ bg: "backgroundTealHover" }}
                  borderRadius={"12px"}
                  fontWeight={"bold"}
                  fontSize={{ base: "16px", md: "18px" }}
                  py={"22px"}
                  href="/courses"
                  as={NextLink}
                  w={"fit-content"}
                >
                  See Available Courses
                </Button>
              </Flex>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
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
