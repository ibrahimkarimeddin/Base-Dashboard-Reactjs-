import { useState, useEffect } from 'react';

function useLoadingState(initialValue: boolean, duration: number): [boolean, () => void] {
  const [loading, setLoading] = useState<boolean>(initialValue);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, duration);

    return () => clearTimeout(timeoutId);
  }, [duration]);

  const resetLoading = () => {
    setLoading(true);
  };

  return [loading, resetLoading];
}

export default useLoadingState;
