import { useState, useEffect, useRef } from 'react';

/**
 *
 * @param {string} state line clamp에 영향을 주는 기준 변수(또는 상태)
 * @param {number} short 짧은 경우의 줄
 * @param {number} long 긴 경우의 줄
 * @param {number} [targetLine=1] line clamp에 영향을 주는 문자열의 기준 
 * @returns
 */
const useDynamicClamp = (state, short, long, targetLine = 1) => {
  const [lineClamp, setLineClamp] = useState(0);
  const targetRef = useRef(null);

  useEffect(() => {
    const applyDynamicClamp = () => {
      const targetElement = targetRef.current;
      if (!targetElement) return;

      setTimeout(() => {
        const titleLineHeight = parseFloat(
          getComputedStyle(targetElement).lineHeight
        );
        if (titleLineHeight === 0) return;
        const titleHeight = targetElement.clientHeight;
        const linesInTitle = Math.round(titleHeight / titleLineHeight);

        if (linesInTitle > targetLine) {
          setLineClamp(short);
        } else {
          setLineClamp(long);
        }
      }, 0);
    };

    applyDynamicClamp();
    window.addEventListener('resize', applyDynamicClamp);

    return () => {
      window.removeEventListener('resize', applyDynamicClamp);
    };
  }, [state]);

  return { lineClamp, targetRef };
};

export default useDynamicClamp;
