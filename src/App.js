// import logo from "./logo.svg";
import React from "react";
import "./App.less";
import { Layout } from "antd";
import ConntentApp from "./components/routes";
import Headerbar from "./components/routes/Headerbar";
import Footerbar from "./components/routes/Footerbar";

const { Content } = Layout;

function App() {
  // const [activeMenu, setActiveMenu] = useState("1");
  return (
    <Layout className="layout">
      <Headerbar />
      <Content style={{ padding: "0 50px", backgroundColor: "yellow" }}>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <ConntentApp />
        </div>
      </Content>
      <Footerbar></Footerbar>
    </Layout>
  );
}

export default App;
