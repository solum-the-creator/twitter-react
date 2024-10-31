import { RemoveButton } from '../ui/remove-button';

import { Image, ImagePreviewStyled, PreviewContainer, RemoveButtonWrapper } from './images-preview.styled';

type ImagesPreviewProps = {
  images: string[];
  onRemove?: (url: string) => void;
};

export const ImagesPreview: React.FC<ImagesPreviewProps> = ({ images, onRemove }) => {
  const handleRemove = (url: string) => onRemove?.(url);

  return (
    <PreviewContainer $imagesCount={images.length}>
      {images.map((url) => (
        <ImagePreviewStyled key={url} $imagesCount={images.length}>
          <Image src={url} alt={`Tweet image ${url}`} />

          {onRemove && (
            <RemoveButtonWrapper>
              <RemoveButton onClick={() => handleRemove(url)} />
            </RemoveButtonWrapper>
          )}
        </ImagePreviewStyled>
      ))}
    </PreviewContainer>
  );
};
