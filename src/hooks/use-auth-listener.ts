import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase/config';
import { useAppDispatch } from '@/store';
import { clearUser, setUser } from '@/store/auth/authSlice';

export const useAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;

        dispatch(setUser({ uid, email, name: displayName, photoURL }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
