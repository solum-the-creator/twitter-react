import { Link } from '@/components/ui/link';
import { rightFooterLinks } from '@/constants/links';

import { LinksContainer } from './link-section.styled';

export const LinksSection: React.FC = () => {
  return (
    <LinksContainer>
      {rightFooterLinks.map((link) => (
        <Link key={link.label} to={link.href} variant="secondary">
          {link.label}
        </Link>
      ))}
    </LinksContainer>
  );
};
