import GeneralLayout from "@/components/GeneralLayout";
import HeroSection from "@/components/Sections/Home/HeroSection";
import LogoSection from "@/components/Sections/Home/LogoSection";
import CourseSection from "@/components/Sections/Home/CourseSection";
import FeaturesSection from "@/components/Sections/Home/FeaturesSection";

export default function Home() {
  return (
    <GeneralLayout isHome={true} title={"Home"}>
      <HeroSection />
      <LogoSection />
      <CourseSection />
      <FeaturesSection />
    </GeneralLayout>
  );
}
