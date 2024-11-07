import { paths } from '@/constants/paths';

import { getProfilePath } from '../paths-utils';

describe('getProfilePath', () => {
  it('returns the correct path when given a valid userId', () => {
    const userId = '12345';
    const expectedPath = paths.profile.replace(':userId', userId);

    expect(getProfilePath(userId)).toBe(expectedPath);
  });

  it('returns a path with the userId even if it contains special characters', () => {
    const userId = 'user_!@#';
    const expectedPath = paths.profile.replace(':userId', userId);

    expect(getProfilePath(userId)).toBe(expectedPath);
  });

  it('returns the correct path when given an empty string as userId', () => {
    const userId = '';
    const expectedPath = paths.profile.replace(':userId', userId);

    expect(getProfilePath(userId)).toBe(expectedPath);
  });
});
