import { AreaChartOutlined, UserOutlined } from "@ant-design/icons";

const icons = {
  AreaChartOutlined,
  UserOutlined,
};

const Pages = [
  {
    id: "menu",
    title: "Menu",
    children: [
      {
        id: "dashboard",
        title: "Dashboard",
        url: "waffle/user/dashboard",
        icon: icons.AreaChartOutlined,
      },
      {
        id: "profile",
        title: "Perfil",
        url: "/",
        icon: icons.UserOutlined,
      },
    ],
  },
];

export default Pages;
