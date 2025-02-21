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
        url: "waffle/dashboard",
        icon: icons.AreaChartOutlined,
      },
      {
        id: "profile",
        title: "Perfil",
        url: "waffle/profile",
        icon: icons.UserOutlined,
      },
    ],
  },
];

export default Pages;
