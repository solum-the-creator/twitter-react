import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  UserCredential,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { SignUpWithEmailData, UserProfile } from '@/types/user';

import { auth, db } from './config';

export const registerWithEmail = async ({
  email,
  password,
  profile,
}: SignUpWithEmailData): Promise<UserCredential> => {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  const { user } = userCredentials;

  await updateProfile(user, {
    displayName: profile.name,
  });

  const userProfile: UserProfile = {
    email: user.email!,
    ...profile,
  };

  await setDoc(doc(db, 'users', user.uid), userProfile);

  return userCredentials;
};

export const loginWithEmail = async (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async (): Promise<void> => {
  return signOut(auth);
};
