import { FirebaseError } from 'firebase/app';

import { firebaseErrorMessages } from '@/constants/errors';

export const isFirebaseError = (error: unknown): error is FirebaseError => {
  return error instanceof FirebaseError;
};

export const getFirebaseErrorMessage = (error: FirebaseError): string => {
  return firebaseErrorMessages[error.code] || 'An unknown error occurred';
};
