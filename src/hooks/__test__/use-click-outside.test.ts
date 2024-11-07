import { renderHook } from '@testing-library/react';

import { useClickOutside } from '../use-click-outside';

describe('useClickOutside', () => {
  let onClickOutside: () => void;

  beforeEach(() => {
    onClickOutside = vi.fn();
  });

  it('does not call onClickOutside when clicking inside the element', () => {
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, onClickOutside));

    ref.current.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(onClickOutside).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });

  it('calls onClickOutside when clicking outside the element', () => {
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, onClickOutside));

    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(onClickOutside).toHaveBeenCalledTimes(1);

    document.body.removeChild(ref.current);
  });

  it('removes event listener on unmount', () => {
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    const { unmount } = renderHook(() => useClickOutside(ref, onClickOutside));

    unmount();

    document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    expect(onClickOutside).not.toHaveBeenCalled();

    document.body.removeChild(ref.current);
  });
});
