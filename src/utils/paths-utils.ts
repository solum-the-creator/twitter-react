import { paths } from '@/constants/paths';

export const getProfilePath = (userId: string) => paths.profile.replace(':userId', userId);
