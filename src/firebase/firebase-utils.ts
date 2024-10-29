import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  UserCredential,
} from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { SignUpWithEmailData, UserProfile } from '@/types/user';

import { auth, db, storage } from './config';

export const registerWithEmail = async ({
  email,
  password,
  profile,
}: SignUpWithEmailData): Promise<UserCredential> => {
  const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
  const { user } = userCredentials;

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

export const fetchUserProfile = async (uid: string): Promise<UserProfile | null> => {
  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserProfile;
  }
  return null;
};

export const loginWithGoogle = async (): Promise<UserCredential> => {
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({ prompt: 'select_account' });
  const userCredentials = await signInWithPopup(auth, googleProvider);

  const { user } = userCredentials;

  const userDocRef = doc(db, 'users', user.uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    const userProfile: UserProfile = {
      email: user.email!,
      phone: user.phoneNumber || '',
      name: user.displayName || '',
      profileImage: user.photoURL || '',
    };

    await setDoc(userDocRef, userProfile);
  }

  return userCredentials;
};

export const uploadImage = async (file: File, uid: string): Promise<string> => {
  const imageRef = ref(storage, `profile-images/${uid}`);
  await uploadBytes(imageRef, file);
  return getDownloadURL(imageRef);
};

export const updateUserProfile = async (
  uid: string,
  profileData: Partial<UserProfile>,
  newPassword?: string | null,
  newAvatarFile?: File,
): Promise<void> => {
  if (newAvatarFile) {
    const avatarUrl = await uploadImage(newAvatarFile, uid);
    profileData = { ...profileData, profileImage: avatarUrl };
  }

  const userDocRef = doc(db, 'users', uid);

  await updateDoc(userDocRef, profileData);

  if (newPassword) {
    const { currentUser } = auth;

    if (currentUser) {
      await updatePassword(currentUser, newPassword);
    } else {
      throw new Error('User not authenticated');
    }
  }
};
