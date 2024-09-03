import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

const navItems = [
  {
    name: "Buy",
    path: "/buy",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Sell",
    path: "/sell",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

const services = [
  {
    title: "Property Listing Management",
    description:
      "Manage your property listings effortlessly. Upload details, track views, and control inquiries with ease, all through our user-friendly platform.",
  },
  {
    title: "Customizable Bidding Platform",
    description:
      "Boost your property’s exposure with our secure bidding platform. Set price ranges, monitor bids in real-time, and secure the best offers seamlessly.",
  },
  {
    title: "Comprehensive Property Analytics",
    description:
      "Access detailed insights into your property’s performance. Track buyer interest, view bid history, and analyze market trends to optimize your sales strategy.",
  },
];

export { navItems, services };
