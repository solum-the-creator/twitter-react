import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/components/sidebar';

import { Content, Layout, MainContent, RightSidebarWrapper, SidebarWrapper } from './main-layout.styled';

export const MainLayout: React.FC = () => {
  return (
    <Layout>
      <Content>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <MainContent>
          <Outlet />
        </MainContent>
        <RightSidebarWrapper>
          <div>Right sidebar</div>
        </RightSidebarWrapper>
      </Content>
    </Layout>
  );
};
