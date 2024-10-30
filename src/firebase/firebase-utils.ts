import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  UserCredential,
} from 'firebase/auth';
import { addDoc, collection, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { Tweet } from '@/types/tweet';
import { StorageDirectory } from '@/types/types';
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

export const uploadImage = async (file: File, uid: string, catalog?: StorageDirectory): Promise<string> => {
  const path = catalog ? `${catalog}/${uid}` : uid;

  const imageRef = ref(storage, path);
  await uploadBytes(imageRef, file);
  return getDownloadURL(imageRef);
};

export const updateUserProfile = async (
  uid: string,
  profileData: Partial<UserProfile>,
  newPassword?: string | null,
  newAvatarFile?: File,
  newCoverFile?: File,
  isCoverRemoved?: boolean,
): Promise<void> => {
  if (newAvatarFile) {
    const avatarUrl = await uploadImage(newAvatarFile, uid, 'profile-images');
    profileData = { ...profileData, profileImage: avatarUrl };
  }

  if (newCoverFile) {
    const coverUrl = await uploadImage(newCoverFile, uid, 'cover-images');
    profileData = { ...profileData, coverImage: coverUrl };
  } else if (isCoverRemoved) {
    profileData = { ...profileData, coverImage: '' };
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

export const addTweet = async (content: string): Promise<string> => {
  const { currentUser } = auth;

  if (!currentUser) {
    throw new Error('User is not authenticated');
  }

  const userId = currentUser.uid;

  const newTweet: Tweet = {
    userId,
    content,
    timestamp: Date.now(),
  };

  const tweetRef = await addDoc(collection(db, 'tweets'), newTweet);
  return tweetRef.id;
};
