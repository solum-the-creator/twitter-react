import { fireEvent, screen } from '@testing-library/react';

import { render } from '@/tests/setup';

import { ImagesPreview } from '.';

describe('ImagesPreview', () => {
  const images = ['url1.jpg', 'url2.jpg', 'url3.jpg'];
  const mockOnRemove = vi.fn();

  beforeEach(() => {
    mockOnRemove.mockClear();
  });

  it('renders all images', () => {
    render(<ImagesPreview images={images} />);
    images.forEach((url) => {
      expect(screen.getByAltText(`Tweet image ${url}`)).toBeInTheDocument();
    });
  });

  it('does not show remove button when onRemove is not provided', () => {
    render(<ImagesPreview images={images} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('shows remove button and calls onRemove with correct URL when clicked', () => {
    render(<ImagesPreview images={images} onRemove={mockOnRemove} />);

    const removeButtons = screen.getAllByRole('button');
    expect(removeButtons).toHaveLength(images.length);

    fireEvent.click(removeButtons[0]);
    expect(mockOnRemove).toHaveBeenCalledWith('url1.jpg');
  });
});
