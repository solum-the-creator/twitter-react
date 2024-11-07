import {
  validateFiles,
  validateImageCount,
  validateImageFormat,
  validateImageSize,
} from '../file-validations-utils';

describe('validateImageFormat', () => {
  it('returns isValid true if file format is allowed', () => {
    const file = new File([''], 'image.jpg', { type: 'image/jpeg' });
    const allowedFormats = ['image/jpeg', 'image/png'];

    const result = validateImageFormat(file, allowedFormats);
    expect(result).toEqual({ isValid: true });
  });

  it('returns isValid false and an error message if file format is not allowed', () => {
    const file = new File([''], 'image.bmp', { type: 'image/bmp' });
    const allowedFormats = ['image/jpeg', 'image/png'];

    const result = validateImageFormat(file, allowedFormats);
    expect(result).toEqual({
      isValid: false,
      errorMessage: 'Only image/jpeg, image/png images are allowed.',
    });
  });

  it('returns isValid false and correct error message for multiple disallowed formats', () => {
    const file = new File([''], 'image.gif', { type: 'image/gif' });
    const allowedFormats = ['image/jpeg', 'image/png', 'image/svg+xml'];

    const result = validateImageFormat(file, allowedFormats);
    expect(result).toEqual({
      isValid: false,
      errorMessage: 'Only image/jpeg, image/png, image/svg+xml images are allowed.',
    });
  });

  it('returns isValid false and an error message for an empty allowedFormats array', () => {
    const file = new File([''], 'image.jpg', { type: 'image/jpeg' });
    const allowedFormats: string[] = [];

    const result = validateImageFormat(file, allowedFormats);
    expect(result).toEqual({
      isValid: false,
      errorMessage: 'Only  images are allowed.',
    });
  });
});

describe('validateImageSize', () => {
  it('returns isValid true if file size is within the allowed limit', () => {
    const file = new File(['a'.repeat(1024 * 1024 * 2)], 'image.jpg', { type: 'image/jpeg' });
    const maxSizeMB = 3;

    const result = validateImageSize(file, maxSizeMB);
    expect(result).toEqual({ isValid: true });
  });

  it('returns isValid false and an error message if file size exceeds the allowed limit', () => {
    const file = new File(['a'.repeat(1024 * 1024 * 5)], 'image.jpg', { type: 'image/jpeg' });
    const maxSizeMB = 3;

    const result = validateImageSize(file, maxSizeMB);
    expect(result).toEqual({
      isValid: false,
      errorMessage: 'Each image must be smaller than 3 MB.',
    });
  });

  it('returns isValid true if file size is exactly at the allowed limit', () => {
    const file = new File(['a'.repeat(1024 * 1024 * 3)], 'image.jpg', { type: 'image/jpeg' });
    const maxSizeMB = 3;

    const result = validateImageSize(file, maxSizeMB);
    expect(result).toEqual({ isValid: true });
  });

  it('returns isValid false if maxSizeMB is set to zero and file has a non-zero size', () => {
    const file = new File(['a'.repeat(1024 * 1024)], 'image.jpg', { type: 'image/jpeg' });
    const maxSizeMB = 0;

    const result = validateImageSize(file, maxSizeMB);
    expect(result).toEqual({
      isValid: false,
      errorMessage: 'Each image must be smaller than 0 MB.',
    });
  });
});

describe('validateImageCount', () => {
  it('returns isValid true if currentCount + newFilesCount is within the allowed limit', () => {
    const currentCount = 0;
    const newFilesCount = 3;
    const maxCount = 4;

    expect(validateImageCount(currentCount, newFilesCount, maxCount)).toEqual({ isValid: true });
  });

  it('returns isValid false and an error message if currentCount + newFilesCount exceeds the allowed limit', () => {
    const currentCount = 2;
    const newFilesCount = 3;
    const maxCount = 4;

    expect(validateImageCount(currentCount, newFilesCount, maxCount)).toEqual({
      isValid: false,
      errorMessage: 'You can upload up to 4 images.',
    });
  });

  it('returns isValid true if currentCount + newFilesCount is exactly at the allowed limit', () => {
    const currentCount = 3;
    const newFilesCount = 1;
    const maxCount = 4;

    expect(validateImageCount(currentCount, newFilesCount, maxCount)).toEqual({ isValid: true });
  });
});

describe('validateFiles', () => {
  const allowedFormats = ['image/jpeg', 'image/png'];
  const maxSizeMB = 2;
  const maxCount = 3;

  const createMockFile = (name: string, type: string, sizeMB: number): File => {
    const file = new File(['content'], name, { type });
    Object.defineProperty(file, 'size', { value: sizeMB * 1024 * 1024 });
    return file;
  };

  it('returns valid files and no errors for files within all limits', () => {
    const files = [
      createMockFile('image1.jpg', 'image/jpeg', 1),
      createMockFile('image2.png', 'image/png', 1.5),
    ];

    const result = validateFiles(files, 0, allowedFormats, maxSizeMB, maxCount);

    expect(result.validFiles).toEqual(files);
    expect(result.errorMessages).toEqual([]);
  });

  it('returns an error if file count exceeds the maximum allowed', () => {
    const files = [
      createMockFile('image1.jpg', 'image/jpeg', 1),
      createMockFile('image2.png', 'image/png', 1.5),
      createMockFile('image3.jpg', 'image/jpeg', 1),
      createMockFile('image4.png', 'image/png', 1),
    ];

    const result = validateFiles(files, 0, allowedFormats, maxSizeMB, maxCount);

    expect(result.validFiles).toEqual([]);
    expect(result.errorMessages).toEqual(['You can upload up to 3 images.']);
  });

  it('returns an error for files with unsupported formats', () => {
    const files = [
      createMockFile('image1.jpg', 'image/jpeg', 1),
      createMockFile('image2.gif', 'image/gif', 1),
    ];

    const result = validateFiles(files, 0, allowedFormats, maxSizeMB, maxCount);

    expect(result.validFiles).toEqual([files[0]]);
    expect(result.errorMessages).toEqual(['Only image/jpeg, image/png images are allowed.']);
  });

  it('returns an error for files exceeding the maximum size', () => {
    const files = [
      createMockFile('image1.jpg', 'image/jpeg', 3),
      createMockFile('image2.png', 'image/png', 1),
    ];

    const result = validateFiles(files, 0, allowedFormats, maxSizeMB, maxCount);

    expect(result.validFiles).toEqual([files[1]]);
    expect(result.errorMessages).toEqual(['Each image must be smaller than 2 MB.']);
  });

  it('returns errors for files that fail multiple validations', () => {
    const files = [
      createMockFile('image1.gif', 'image/gif', 3),
      createMockFile('image2.png', 'image/png', 1),
      createMockFile('image3.jpg', 'image/jpeg', 3),
    ];

    const result = validateFiles(files, 0, allowedFormats, maxSizeMB, maxCount);

    expect(result.validFiles).toEqual([files[1]]);
    expect(result.errorMessages).toEqual([
      'Only image/jpeg, image/png images are allowed.',
      'Each image must be smaller than 2 MB.',
    ]);
  });
});
