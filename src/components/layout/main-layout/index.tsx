import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/sidebar';

import { Content, Layout, RightSidebarWrapper, SidebarWrapper } from './main-layout.styled';

export const MainLayout: React.FC = () => {
  return (
    <Layout>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <Content>
        <Outlet />
      </Content>
      <RightSidebarWrapper>
        <div>Right sidebar</div>
      </RightSidebarWrapper>
    </Layout>
  );
};
