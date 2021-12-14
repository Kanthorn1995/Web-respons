// import logo from "./logo.svg";
import React from "react";

import "./App.less";
import { Layout } from "antd";
import ConntentApp from "./components/routes";
import Headerbar from "./components/routes/Headerbar";
const { Content, Footer } = Layout;
function App() {
  // const [activeMenu, setActiveMenu] = useState("1");
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="layout">
        <Headerbar></Headerbar>
        <Content style={{ padding: "0 50px", backgroundColor: "yellow" }}>
          {/* <h1 className="site-layout-content">Content</h1> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <ConntentApp></ConntentApp>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
