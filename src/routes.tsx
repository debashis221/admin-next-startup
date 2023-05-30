import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";

// Admin Imports
import MainDashboard from "@/pages/admin/default";
import { IRoute } from "@/types/navigation";

const routes: IRoute[] = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
];

export default routes;
