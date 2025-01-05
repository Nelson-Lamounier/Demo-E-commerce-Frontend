type Image =  {
  imageSrc: string;
  imageAlt: string;
}

export type Categories = {
    name: string;
    description: string;
    images: Image[];
    href: string;
}

const Categories: Categories[] = [
    {
      name: 'Women',
      description: 'Stylish activewear.',
      images: [
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man01.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man02.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man03.png",
          imageAlt: "Man wearing gym clothes",
        },
      ],
      href: '#',
    },
    {
      name: 'Men',
      description: 'Performance-ready wear',
      images: [
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman01.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman02.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman04.png",
          imageAlt: "Man wearing gym clothes",
        },
      ],
      href: '#',
    },
    {
      name: 'Sales',
      description: 'Exclusive deals, shop now',
      images: [
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man06.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man07.png",
          imageAlt: "Man wearing gym clothes",
        },
        {
          imageSrc: "https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman08.png",
          imageAlt: "Man wearing gym clothes",
        },
      ],href: '#',
    },
  ]

  export default Categories;