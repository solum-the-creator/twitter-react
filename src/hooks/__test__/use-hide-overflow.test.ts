import { renderHook } from '@testing-library/react';

import { useHideOverflow } from '../use-hide-overflow';

describe('useHideOverflow', () => {
  beforeEach(() => {
    document.body.style.overflow = 'unset';
  });

  afterEach(() => {
    document.body.style.overflow = 'unset';
  });

  it('sets overflow to hidden when isOpen is true', () => {
    renderHook(({ isOpen }) => useHideOverflow(isOpen), {
      initialProps: { isOpen: true },
    });
    expect(document.body.style.overflow).toBe('hidden');
  });

  it('sets overflow to unset when isOpen is false', () => {
    renderHook(({ isOpen }) => useHideOverflow(isOpen), {
      initialProps: { isOpen: false },
    });
    expect(document.body.style.overflow).toBe('unset');
  });

  it('resets overflow to unset on unmount', () => {
    const { unmount, rerender } = renderHook(({ isOpen }) => useHideOverflow(isOpen), {
      initialProps: { isOpen: true },
    });

    expect(document.body.style.overflow).toBe('hidden');

    rerender({ isOpen: false });
    expect(document.body.style.overflow).toBe('unset');

    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });
});
