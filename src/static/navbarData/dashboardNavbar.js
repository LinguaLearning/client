import {
  faBook,
  faGlobe,
  faScrewdriverWrench,
  faCircleUser,
  faGear,
  faInfoCircle,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const dashboardDataNavbar = [
  {
    tabName: "learning",
    path: "/dashboard/learning",
    icon: <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faBook} />,
  },
  {
    tabName: "tools",
    path: "/dashboard/tools",
    icon: (
      <FontAwesomeIcon
        style={{ marginRight: "10px" }}
        icon={faScrewdriverWrench}
      />
    ),
  },
  {
    tabName: "resources",
    path: "/dashboard/resources",
    icon: <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGlobe} />,
  },
];

export const DropdownMenuData = [
  {
    tabName: "My Profile",
    path: "/dashboard/my_profile",
    icon: (
      <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faCircleUser} />
    ),
  },
  {
    tabName: "Settings",
    path: "/dashboard/settings",
    icon: <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faGear} />,
  },
  {
    tabName: "Info",
    path: "/dashboard/my_profile",
    icon: (
      <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faInfoCircle} />
    ),
  },
  {
    tabName: "Logout",
    icon: <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPowerOff} />,
  },
];

export const leftsideMenu = [
  {
    tabName: "",
  },
];
