import { LoadingSpinner } from '../ui/loading-spinner';

import { LoaderWrapper } from './centered-loader.styled';

export const CenteredLoader: React.FC = () => {
  return (
    <LoaderWrapper>
      <LoadingSpinner size={40} />
    </LoaderWrapper>
  );
};
