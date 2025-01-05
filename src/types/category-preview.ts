export type Categories = {
    name: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    href: string;

}

const Categories: Categories[] = [
    {
      name: 'Women',
      description: 'Stylish activewear.',
      imageSrc: 'https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/woman/woman01.png',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Men',
      description: 'Performance-ready wear',
      imageSrc: 'https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man01.png',
      imageAlt: 'Man wearing gym clothes',
      href: '#',
    },
    {
      name: 'Sales',
      description: 'Exclusive deals, shop now',
      imageSrc: 'https://dbsecommerce.s3.eu-west-1.amazonaws.com/images/Man/man06.png',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]

  export default Categories;