import { Header } from "antd/es/layout/layout";
import React from "react";
import { RadarChartOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

function AppHeader() {
  return (
    <Header className="!bg-white border-b border-[#f1f1f1] flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center gap-2">
         <img src="/logo.png"  width={200}/>

        <div>EHP HASNAOUI</div>
      </div>
      <div className="flex items-center gap-2">
        <Avatar size={36} src="/profile.png" />
        <div>Admin</div>
      </div>
    </Header>
  );
}

export default AppHeader;
