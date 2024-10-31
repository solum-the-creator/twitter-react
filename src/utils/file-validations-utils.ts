export const validateImageFormat = (
  file: File,
  allowedFormats: string[],
): { isValid: boolean; errorMessage?: string } => {
  if (!allowedFormats.includes(file.type)) {
    return { isValid: false, errorMessage: `Only ${allowedFormats.join(', ')} images are allowed.` };
  }
  return { isValid: true };
};

export const validateImageSize = (
  file: File,
  maxSizeMB: number,
): { isValid: boolean; errorMessage?: string } => {
  if (file.size > maxSizeMB * 1024 * 1024) {
    return { isValid: false, errorMessage: `Each image must be smaller than ${maxSizeMB} MB.` };
  }
  return { isValid: true };
};

export const validateImageCount = (
  currentCount: number,
  newFilesCount: number,
  maxCount: number,
): { isValid: boolean; errorMessage?: string } => {
  if (currentCount + newFilesCount > maxCount) {
    return { isValid: false, errorMessage: `You can upload up to ${maxCount} images.` };
  }
  return { isValid: true };
};

export const validateFiles = (
  files: File[],
  currentCount: number,
  allowedFormats: string[],
  maxSizeMB: number,
  maxCount: number,
): { validFiles: File[]; errorMessages: string[] } => {
  const errorMessages: string[] = [];
  const validFiles: File[] = [];

  const countValidation = validateImageCount(currentCount, files.length, maxCount);
  if (!countValidation.isValid) {
    errorMessages.push(countValidation.errorMessage!);
    return { validFiles, errorMessages };
  }

  files.forEach((file) => {
    const formatValidation = validateImageFormat(file, allowedFormats);
    if (!formatValidation.isValid) {
      errorMessages.push(formatValidation.errorMessage!);
      return;
    }

    const sizeValidation = validateImageSize(file, maxSizeMB);
    if (!sizeValidation.isValid) {
      errorMessages.push(sizeValidation.errorMessage!);
      return;
    }

    validFiles.push(file);
  });

  return { validFiles, errorMessages };
};
