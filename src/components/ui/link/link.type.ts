export type LinkProps = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};
