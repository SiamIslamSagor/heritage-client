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

export { navItems };
