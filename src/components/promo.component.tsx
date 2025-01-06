import promoImages from "../types/promo";

const Promo = () => {
  return (
    <div className="bg-white">
      <div className="overflow-hidden pt-32 sm:pt-14">
        <div className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                <div className="mt-6 text-base">
                  <a href="#" className="font-semibold text-white">
                    Shop the sale
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>

              <div className="absolute -top-32 left-1/2 min-w-max -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                <div className="ml-24 flex space-x-6 sm:ml-3 lg:space-x-8">
                  {promoImages.map((group, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="flex space-x-6 sm:flex-col sm:space-y-6 sm:space-x-0 lg:space-y-8"
                    >
                      {group.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`shrink-0 ${
                            imageIndex > 0 ? "mt-6 sm:mt-0" : ""
                          }`}
                        >
                          <img
                            alt={image.alt}
                            src={image.src}
                            className="size-64 rounded-lg object-cover md:size-72"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
