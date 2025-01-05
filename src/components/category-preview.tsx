import { useState, useEffect, FC } from "react";
import Categories from "../types/category-preview";



const CategoryPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const internal = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Categories[0].images.length);
    }, 3000);
    return () => clearInterval(internal);
  }, [Image]);
  return (
    <div className="bg-white p-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
            {Categories.map((Category) => (
              <div key={Category.name} className="group relative">
                <div className="group h-[25rem] border-2  border-gray-900 rounded-lg object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square">
                  {Category.images.map((image, index) => (
                    <img
                      key={index}
                      alt={image.imageAlt}
                      src={image.imageSrc}
                      className="h-[40rem] absolute top-0 left-0 w-full object-cover "
                      style={{
                        visibility:
                          index === currentIndex ? "visible" : "hidden",
                        opacity: index === currentIndex ? 1 : 0,
                      }}
                    />
                  ))}
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={Category.href}>
                    <span className="absolute inset-0" />
                    {Category.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {Category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
