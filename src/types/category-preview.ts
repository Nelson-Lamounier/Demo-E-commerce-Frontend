type Image =  {
  imageSrc: string;
  imageAlt: string;
}

export type Categories = {
    name: string;
    description: string;
    images: Image[];
    categoryPath: string;
}

const Categories: Categories[] = [
    {
      name: 'Womens',
      description: 'Stylish activewear.',
      images: [
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/women/cloths/nelson_18055_A_women_doing_outdoor_yoga_using_the_resistance__c5c321c9-2edc-44bc-9cf0-23ce5e565b97_0.png",
          imageAlt: "Women wearing gym clothes",
        },
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/women/cloths/nelson_18055_A_women_doing_outdoor_yoga_using_the_resistance__c5c321c9-2edc-44bc-9cf0-23ce5e565b97_2.png",
          imageAlt: "Women wearing gym clothes",
        },
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/women/cloths/nelson_18055_A_womens_using_a_fitness_tank_gym_front-facing_i_064c3f23-96b5-4314-890b-35f5bc4c60bc_2.png",
          imageAlt: "Women wearing gym clothes",
        },
      ],
      categoryPath: "category/womens"
    },
    {
      name: 'Mens',
      description: 'Performance-ready wear',
      images: [
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/men/cloths/nelson_18055_A_detailed_photorealistic_image_19201080_px_in_J_1f85928e-f5f0-4c06-9c63-52892a1b4447_1.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/men/cloths/nelson_18055_A_detailed_photorealistic_image_19201080_px_in_J_39f2ec18-5b6a-4d00-93f0-fde4fa645d74_2.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/men/cloths/nelson_18055_A_detailed_photorealistic_image_19201080_px_in_J_b3064162-ad2c-4f19-9c16-00aa047cd9ef_3.png",
          imageAlt: "Man wearing gym clothes",
        },
      ],
      categoryPath:"category/mens"
    },
    {
      name: 'Sales',
      description: 'Exclusive deals, shop now',
      images: [
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/men/cloths/nelson_18055_A_mens_using_a_gym_runners_front-facing_image_of_f0b06b97-9f29-4786-8fd7-6bbab3c1d7b9_0.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/men/cloths/nelson_18055_A_mens_using_a_gym_runners_front-facing_image_of_f0b06b97-9f29-4786-8fd7-6bbab3c1d7b9_3.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://freelancer-websites.s3.eu-west-1.amazonaws.com/gymbs-ecommerce/preview/women/cloths/nelson_18055_A_womens_using_a_gym_runners_front-facing_image__7608e2b8-7925-4dba-8d47-0d750daa0619_2.png",
          imageAlt: "Women wearing gym clothes",
        },
      ],categoryPath:"category/sales"
    },
  ]

  export default Categories;