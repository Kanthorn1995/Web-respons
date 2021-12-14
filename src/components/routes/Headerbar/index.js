import React from "react";
import { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
const { Header } = Layout;
const Headerbar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[activeMenu]}>
        <Menu.Item key="1" onClick={() => setActiveMenu("1")}>
          <Link to="/">home</Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => setActiveMenu("2")}>
          <Link to="/category"> category</Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => setActiveMenu("3")}>
          <Link to="/blog">blog</Link>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => setActiveMenu("4")}>
          <Link to="/contactus">contactus</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Headerbar;
