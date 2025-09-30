// src/hooks/useErrorBoundary.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useErrorBoundary = () => {
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasError) {
        navigate('/error');
    }
  }, [hasError, navigate]);

  const triggerError = () => {
    setHasError(true);
  };

  return [triggerError];
};

export default useErrorBoundary;
