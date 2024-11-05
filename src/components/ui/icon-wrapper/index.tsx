import { useTheme } from 'styled-components';

import { StyledIcon } from './styled-icon.styled';

type IconWrapperProps = {
  icon?: React.ElementType<React.SVGProps<SVGSVGElement>>;
  color?: string;
  size?: number;
};

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, color, size = 24 }) => {
  const theme = useTheme();
  const fillColor = color || theme.colors.primaryText;

  return (
    <StyledIcon style={{ width: size, height: size }}>
      {Icon && <Icon fill={fillColor} width={size} height={size} />}
    </StyledIcon>
  );
};
