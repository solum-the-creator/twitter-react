import { Search } from '../search';

import { LinksSection } from './links-section';
import { SidebarContainer } from './right-sidebar.styled';

export const RightSidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <Search />
      <LinksSection />
    </SidebarContainer>
  );
};
