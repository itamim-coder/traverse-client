import { Layout } from "antd";
import SideBar from "../components/ui/sidebar";
import Contents from "../components/ui/contents";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar></SideBar>
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
