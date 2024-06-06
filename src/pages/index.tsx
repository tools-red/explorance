import FaqSection from "~/components/pages/landing/Sections/FaqSection";
import HeroSection from "~/components/pages/landing/Sections/HeroSection";
import ProductsSection from "~/components/pages/landing/Sections/ProductsSection";
import SolutionsSection from "~/components/pages/landing/Sections/SolutionsSection";
import PageLayout from "~/layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ProductsSection />
      <SolutionsSection />
      <FaqSection />
    </PageLayout>
  );
}
