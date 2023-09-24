import React, { useRef, useEffect } from 'react';

const Marquee = ({ text, speed = 2 }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrameId;

    const animate = () => {
      if (!marquee) return;

      // Move the text to the left by the specified speed
      marquee.scrollLeft += speed;

      // If we've scrolled to the end of the text, reset the scroll position to 0
      if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
        marquee.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div
      ref={marqueeRef}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        display: 'flex',
        fontWeight: 'bold', // Making the text bold
      }}
    >
      <span style={{ paddingRight: '100%' }}>{text}</span>
      <span>{text}</span>
    </div>
  );
};

export default Marquee;