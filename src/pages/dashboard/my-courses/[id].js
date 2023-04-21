import DashboardLayout from "@/components/DashboardLayout";
import useMembership from "@/lib/useMembership";
import { getSession } from "next-auth/react";
import { fetchData } from "@/lib/fetchData";
import { useEffect } from "react";

export default function MyCoursesDetail({ memberships, course, session }) {
  const isMembership = useMembership({
    memberships,
    redirect: true,
    isPremium: course.isPremium,
  });

  return (
    <DashboardLayout title={"My Course Detail"}>
      MyCoursesDetail
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
  const course = await fetchData(`/v1/courses/${id}`);

  return {
    props: {
      memberships,
      course,
      session,
    },
  };
};
