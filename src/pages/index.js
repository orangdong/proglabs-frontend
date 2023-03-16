import GeneralLayout from "@/components/GeneralLayout";
import HeroSection from "@/components/Sections/Home/HeroSection";
import LogoSection from "@/components/Sections/Home/LogoSection";
import CourseSection from "@/components/Sections/Home/CourseSection";
import FeaturesSection from "@/components/Sections/Home/FeaturesSection";
import PricingSection from "@/components/Sections/Home/PricingSection";
import { fetchData } from "@/lib/fetchData";

export default function Home({ courses }) {
  return (
    <GeneralLayout isHome={true} title={"Home"} courses={courses}>
      <HeroSection />
      <LogoSection />
      <CourseSection />
      <FeaturesSection />
      <PricingSection />
    </GeneralLayout>
  );
}

export const getServerSideProps = async () => {
  const data = await fetchData("/v1/courses");

  return {
    props: { courses: data },
  };
};
