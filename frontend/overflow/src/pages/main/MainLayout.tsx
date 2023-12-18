import { Layout, Row, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import HeaderNav from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";

type Props = {
  children: any;
};

const MainLayout = (props: Props) => {
  return (
    <div>
      {/* Header */}
      <HeaderNav />
      {/* Content */}
      <div>
        <>{props.children}</>
      </div>
    </div>
  );
};

export default MainLayout;
