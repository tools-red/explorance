import PageLayout from "~/components/componentLayouts/PageLayout";
import HeroSection from "~/components/pages/landing/Sections/HeroSection";
import ProductsSection from "~/components/pages/landing/Sections/ProductsSection";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ProductsSection />
    </PageLayout>
  );
}
