import { FirebaseError } from 'firebase/app';

import { getFirebaseErrorMessage, isFirebaseError } from '../errors-utils';

describe('isFirebaseError', () => {
  it('returns true for FirebaseError instances', () => {
    const firebaseError = new FirebaseError('auth/invalid-email', 'Invalid email format');
    expect(isFirebaseError(firebaseError)).toBe(true);
  });

  it('returns false for non-FirebaseError instances', () => {
    const error = new Error('Some other error');
    expect(isFirebaseError(error)).toBe(false);
    expect(isFirebaseError(null)).toBe(false);
    expect(isFirebaseError({})).toBe(false);
  });
});

describe('getFirebaseErrorMessage', () => {
  it('returns the correct message for a known error code', () => {
    const error = new FirebaseError('auth/invalid-email', '');
    expect(getFirebaseErrorMessage(error)).toBe('Invalid email format. Please check the entered address.');
  });

  it('returns "An unknown error occurred" for an unknown error code', () => {
    const error = new FirebaseError('auth/unknown-error', '');
    expect(getFirebaseErrorMessage(error)).toBe('An unknown error occurred');
  });
});
