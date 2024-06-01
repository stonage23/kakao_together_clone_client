import { useEffect } from 'react';

const useBootstrap = () => {
  useEffect(() => {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = "bootstrap/dist/css/bootstrap.min.css"; // 로컬 경로 사용
    document.head.appendChild(bootstrapLink);

    return () => {
      document.head.removeChild(bootstrapLink);
    };
  }, []);
};

export default useBootstrap;
