import { Hero, CategoryPreview, Incentive, PromoHeader } from "@/pages";
import {homeData} from "@/types";
import MotionEffect from "../utils/effect/motion";

import {Footer} from "@components/index";

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
        <MotionEffect />
        <CategoryPreview />
        <PromoHeader />
        <Incentive />
        <Footer />
      </div>
    </>
  );
};

export default Home;
