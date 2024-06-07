import { useState, useEffect, useRef } from 'react';

const useDynamicClamp = (title, content) => {
  const [lineClamp, setLineClamp] = useState(5);
  const titleRef = useRef(null);


  useEffect(() => {
    const applyDynamicClamp = () => {
      const titleElement = titleRef.current;
      if (!titleElement) return;

      // Ensure styles are applied correctly and fully loaded
      setTimeout(() => {
        const titleLineHeight = parseFloat(getComputedStyle(titleElement).lineHeight);
        const titleHeight = titleElement.scrollHeight;
        const linesInTitle = Math.round(titleHeight / titleLineHeight);

        if (linesInTitle > 1) {
          setLineClamp(4); // 타이틀이 2줄이면 본문 4줄로 제한
        } else {
          setLineClamp(5); // 타이틀이 1줄이면 본문 5줄로 제한
        }
      }, 0);
    };

    applyDynamicClamp();
    window.addEventListener('resize', applyDynamicClamp);

    return () => {
      window.removeEventListener('resize', applyDynamicClamp);
    };
  }, [title, content]);

  return { lineClamp, titleRef };
};

export default useDynamicClamp;
