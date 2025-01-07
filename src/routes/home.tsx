import Hero from "../components/hero";
import homeData from "../types/home";
import MotionEffect from "../utils/effect/motion";
import CategoryPreview from "@/pages/category/CategoryPreview";
import Incentive from "@/pages/Incentive";
import Footer from "../components/footer.component";

import PromoHeader from "@/pages/promo/PromoHeader";


const Home = () => {
  return (
    <>
      <div
        className="bg-white w-full h-screen bg-cover bg-center bg-no-repeat relative perspective-[100rem] -z-20"
        style={{
          backgroundImage: `
          ${homeData.backgroundImage.gradient},
          url(${homeData.backgroundImage.url})
        `,
        }}
      >
        <Hero />
        <MotionEffect/>
        <CategoryPreview/>
        <PromoHeader />
        <Incentive />
        <Footer />
      </div>
    </>
  );
};

export default Home;
