import Hero from "../components/hero";
import NavBar from "../components/navigation-bar";
import homeData from "../types/home";
import MotionEffect from "../utils/effect/motion";
import CategoryPreview from "../components/category-preview";
import Incentive from "../components/incentive";
import Footer from "../components/footer.component";

import Promo from "../components/promo";

const Home = () => {
  return (
    <>
      <div
        className="bg-white w-full h-screen bg-cover bg-center bg-no-repeat relative perspective-[100rem] z-20"
        style={{
          backgroundImage: `
          ${homeData.backgroundImage.gradient},
          url(${homeData.backgroundImage.url})
        `,
        }}
      >
        <NavBar />
        <Hero />
        <MotionEffect/>
        <CategoryPreview/>
        <Promo />
        <Incentive />
        <Footer />
      </div>
    </>
  );
};

export default Home;
