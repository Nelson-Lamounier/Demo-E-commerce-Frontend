// Define a type for a single navigation link
type NavigationLink = {
    name: string;
    href: string;
  };
  
  // Define a type for the footer navigation structure
  type FooterNavigation = {
    shop: NavigationLink[];
    company: NavigationLink[];
    account: NavigationLink[];
    connect: NavigationLink[];
  };
  
  // Define the footerNavigation object with the defined type
  const footerNavigation: FooterNavigation = {
    shop: [
      { name: 'Bags', href: '#' },
      { name: 'Tees', href: '#' },
      { name: 'Objects', href: '#' },
      { name: 'Home Goods', href: '#' },
      { name: 'Accessories', href: '#' },
    ],
    company: [
      { name: 'Who we are', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Terms & Conditions', href: '#' },
      { name: 'Privacy', href: '#' },
    ],
    account: [
      { name: 'Manage Account', href: '#' },
      { name: 'Returns & Exchanges', href: '#' },
      { name: 'Redeem a Gift Card', href: '#' },
    ],
    connect: [
      { name: 'Contact Us', href: '#' },
      { name: 'Facebook', href: '#' },
      { name: 'Instagram', href: '#' },
      { name: 'Pinterest', href: '#' },
    ],
  };
  
  export default footerNavigation;