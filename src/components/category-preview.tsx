import Categories from "../types/category-preview";

const CategoryPreview = () => {
  return (
    <div className=" bg-gray-100 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {Categories.map((Category) => (
              <div key={Category.name} className="group relative">
                <div className="w-full bg-white rounded-lg object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square">
                  <img alt={Category.imageAlt} src={Category.imageSrc} />
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