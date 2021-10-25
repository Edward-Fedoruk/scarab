import { useState } from 'react';

export const useFocus = () => {
  const [isFocused, set] = useState(false);
  return {
    isFocused,
    bind: {
      onFocus: () => set(true),
      onBlur: () => set(false),
    },
  };
};
