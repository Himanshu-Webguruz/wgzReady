"use client";
import React, { useEffect, useRef } from "react";

const Webguruzwe = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.4;
  const targetMaskSize = 50;
  const easing = 0.1;
  let easedScrollProgress = 0;

  useEffect(() => {
    if (container.current && stickyMask.current) {
      requestAnimationFrame(animate);
    }
  }, []);

  const animate = () => {
    if (stickyMask.current && container.current) {
      const maskSizeProgress = targetMaskSize * getScrollProgress();
      stickyMask.current.style.webkitMaskSize =
        (initialMaskSize + maskSizeProgress) * 100 + "%";
      requestAnimationFrame(animate);
    }
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main>
      <div ref={container} className="mask-container">
        <div ref={stickyMask} className="stickyMask">
          <video
            autoPlay
            muted
            loop
            aria-label="Background video"
            playsInline
            loading="lazy"  // Lazy-load video
            poster="/video/videoImg.webp"
          >
            <source src="/video/video.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </main>
  );
};

export default Webguruzwe;