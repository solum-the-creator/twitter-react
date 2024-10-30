import { Spinner } from './loading-spinner.styled';

type LoadingSpinnerProps = {
  size?: number;
};

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size }) => {
  return <Spinner size={size} />;
};
