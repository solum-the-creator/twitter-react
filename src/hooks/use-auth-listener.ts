import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '@/firebase/config';
import { useAppDispatch } from '@/store';
import { clearUser, setLoading, setUser } from '@/store/auth/authSlice';

export const useAuthListener = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;

        dispatch(setUser({ uid, email: email || '' }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
};
