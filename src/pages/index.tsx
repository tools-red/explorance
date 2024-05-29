import HeroSection from "~/components/pages/landing/Sections/HeroSection";
import ProductsSection from "~/components/pages/landing/Sections/ProductsSection";
import PageLayout from "~/layouts/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ProductsSection />
    </PageLayout>
  );
}
