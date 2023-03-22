import GeneralLayout from "@/components/GeneralLayout";
import { fetchData } from "@/lib/fetchData";

export default function CourseDetail({ courseData }) {
  return (
    <GeneralLayout title={"Course Detail"}>{courseData.title}</GeneralLayout>
  );
}

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;

  const data = await fetchData(`/v1/courses/${id}`);
  return {
    props: {
      courseData: data,
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
