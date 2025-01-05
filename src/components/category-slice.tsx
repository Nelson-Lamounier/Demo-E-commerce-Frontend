import CategoryPreview from "./category-preview";

import {menSlides, womenSlides, salesSlides} from "../types/category.slides.ts"

const CategorySlides = () => {
    return (
        <div>
        <div>
          < CategoryPreview slides={menSlides} title="mens" categoryPath="category/mens" />
          < CategoryPreview
            slides={womenSlides}
            title="womens"
            categoryPath="category/womens"
          />
          < CategoryPreview
            slides={salesSlides}
            title="sales"
            categoryPath="category/sales"
          />
        </div>
      </div>
    )
}

export default CategorySlides;