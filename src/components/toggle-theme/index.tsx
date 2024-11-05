import { useAppDispatch, useAppSelector } from '@/store/index';
import { selectTheme } from '@/store/theme/themeSelectors';
import { toggleTheme } from '@/store/theme/themeSlice';

import { Toggle } from '../ui/toggle';

export const ToggleTheme: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const isDark = theme === 'dark';

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return <Toggle checked={isDark} onChange={handleToggleTheme} />;
};
