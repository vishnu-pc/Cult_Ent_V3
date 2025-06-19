import React, { useState, useEffect, useRef } from 'react';
import type { DynamicLogoProps } from './DynamicLogo.types';
import { SVGContainer, LogoSVG } from './DynamicLogo.styles';

const DynamicLogo: React.FC<DynamicLogoProps> = ({ className, forceHighlight }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Generate unique IDs for this component instance
  const ringGradientId = useRef(`ring-gradient-${Math.random().toString(36).substring(2, 9)}`);
  const dotGradientId = useRef(`dot-gradient-${Math.random().toString(36).substring(2, 9)}`);
  const fillGradientId = useRef(`fill-gradient-${Math.random().toString(36).substring(2, 9)}`);

  // Effect to handle forceHighlight prop
  useEffect(() => {
    if (forceHighlight !== undefined) {
      setIsHighlighted(forceHighlight);
    }
  }, [forceHighlight]);

  // Intersection Observer for scroll detection (only used when forceHighlight is not provided)
  useEffect(() => {
    // Skip observer if forceHighlight is provided
    if (forceHighlight !== undefined) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsHighlighted(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, [forceHighlight]);

  // Progress animation effect
  useEffect(() => {
    if (isHighlighted) {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 2; // Increment by 2% each interval for smooth animation
        if (progress >= 100) {
          clearInterval(interval);
          progress = 100;
        }
        setProgressValue(progress);
      }, 20); // 20ms interval = 50 frames per second
      
      return () => clearInterval(interval);
    } else {
      setProgressValue(0);
    }
  }, [isHighlighted]);

  // Full Circle Animation Parameters
  const circleRadius = 210; // Radius in pixels for the circular path
  const circumference = 2 * Math.PI * circleRadius; // Full circle circumference = 2π * radius
  
  // dashOffset controls the "filling" animation of the circle
  // When progressValue = 0: dashOffset = circumference (empty circle)
  // When progressValue = 100: dashOffset = 0 (filled circle)
  const dashOffset = circumference * (1 - progressValue / 100); 
  
  // Dot Position Calculations
  // dotAngle maps progress (0-100) to angle (π/2 to π/2 + 2π) for full clockwise rotation
  // Starting at bottom (π/2) and completing full circle back to bottom
  // At progress = 0: angle = π/2 (bottom position - 90 degrees)
  // At progress = 100: angle = π/2 + 2π (back to bottom after full rotation)
  const dotAngle = (Math.PI / 2) + (2 * Math.PI * progressValue / 100);
  
  // Parametric equations for dot position on the full circle
  // Using standard parametric circle equations: x = r * cos(θ), y = r * sin(θ)
  // Center point is at (190, 215)
  const dotX = 190 + circleRadius * Math.cos(dotAngle); // x = center_x + r * cos(θ)
  const dotY = 215 + circleRadius * Math.sin(dotAngle); // y = center_y + r * sin(θ)

  // Scale factor for inner logo elements to create spacing
  const innerScale = 0.7; // 70% of original size
  
  return (
    <SVGContainer 
      className={className}
      ref={logoRef}
      onMouseEnter={() => forceHighlight === undefined && setIsHighlighted(true)}
      onMouseLeave={() => forceHighlight === undefined && setIsHighlighted(false)}
    >
      <LogoSVG 
        viewBox="0 0 381 431" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definitions for gradients */}
        <defs>
          <linearGradient id={ringGradientId.current} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDD914" />
            <stop offset="50%" stopColor="#40B9EB" />
            <stop offset="100%" stopColor="#FF3278" />
          </linearGradient>
          <linearGradient id={dotGradientId.current} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDD914" />
            <stop offset="100%" stopColor="#40B9EB" />
          </linearGradient>
          <linearGradient id={fillGradientId.current} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#E7FF7A" stopOpacity="0.3"/>
            <stop offset="1" stopColor="white" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        
        {/* Full circular ring - animated - positioned behind everything */}
        <path
          d="M 190,215 m -210,0 a 210,210 0 1,1 420,0 a 210,210 0 1,1 -420,0"
          fill="none"
          stroke={isHighlighted ? `url(#${ringGradientId.current})` : "white"}
          strokeWidth="1.5"
          strokeDasharray={circumference}
          strokeDashoffset={isHighlighted ? dashOffset : 0}
          transform="rotate(-90 190 215)"
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Moving dot along the circular path - always visible but only moves when highlighted */}
        <circle
          cx={isHighlighted ? dotX : 190}
          cy={isHighlighted ? dotY : 215 + circleRadius}
          r="5"
          fill={isHighlighted ? `url(#${dotGradientId.current})` : "white"}
        />
        
        {/* Group for all inner elements - scaled down to create more space */}
        <g transform={`translate(190, 215) scale(${innerScale}) translate(-190, -215)`}>
          {/* Center horizontal bar */}
          <path 
            d="M367.481 197.053C374.417 197.053 380.079 202.697 380.079 209.634V226.799C380.079 233.719 374.417 239.381 367.481 239.381H13.0811C6.16154 239.381 0.5 233.735 0.5 226.799V209.634C0.50022 202.714 6.14472 197.053 13.0811 197.053H367.481Z" 
            fill={isHighlighted ? "white" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Arrow shape */}
          <path 
            d="M205.275 261.803C208.931 261.803 212.378 263.357 214.757 266.096L214.76 266.095L308.062 374.679C310.293 377.212 311.348 380.5 311.08 383.833C310.812 387.213 309.288 390.229 306.745 392.454L306.741 392.458L306.74 392.457L293.694 403.638C291.428 405.65 288.511 406.702 285.502 406.702C281.803 406.702 278.316 405.112 275.936 402.312V402.311L196.615 310.026L196.289 309.675C194.614 307.963 192.304 306.946 189.88 306.946C187.289 306.946 184.838 308.058 183.148 310.021V310.022L103.919 401.896L103.918 401.897C101.492 404.691 98.0569 406.284 94.3545 406.284C91.3417 406.284 88.4425 405.229 86.1621 403.268L73.1162 392.088L73.1123 392.084C70.5683 389.858 69.0441 386.793 68.7764 383.463L68.7754 383.455C68.558 380.125 69.6294 376.86 71.7891 374.315L71.792 374.312L165.033 266.191L165.034 266.189C167.46 263.396 170.895 261.803 174.598 261.803H205.275Z" 
            fill={isHighlighted ? "white" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Bottom vertical bar */}
          <path 
            d="M196.335 359.484C201.581 359.485 205.876 363.762 205.876 369.025V420.521C205.876 425.784 201.581 430.061 196.335 430.062H183.529C178.282 430.062 173.988 425.768 173.988 420.521V369.025C173.988 363.762 178.283 359.484 183.529 359.484H196.335Z" 
            fill={isHighlighted ? "white" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Top vertical bar */}
          <path 
            d="M196.386 0.5C201.633 0.500025 205.927 4.79396 205.927 10.041V38.9814C205.927 44.2285 201.633 48.5224 196.386 48.5225H183.936V48.5391H183.436C178.189 48.5391 173.895 44.245 173.895 38.998V10.041C173.895 4.79394 178.188 0.500004 183.436 0.5H196.386Z" 
            fill={isHighlighted ? "#FF3278" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Bottom left diagonal */}
          <path 
            d="M89.1387 263.25C93.4841 260.653 99.1029 261.887 101.963 266.144L109.072 276.712C112.012 281.062 110.837 287.003 106.443 289.955H106.442L49.1084 328.355L49.1045 328.358C44.8504 331.151 39.1885 330.19 36.1523 326.128L35.8672 325.726L28.7568 315.156C25.8179 310.806 26.9925 304.866 31.3857 301.914H31.3867L88.7217 263.514L89.1387 263.25Z" 
            fill={isHighlighted ? "#40B9EB" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Top right diagonal */}
          <path 
            d="M331.508 101.074C335.853 98.4776 341.472 99.7108 344.332 103.968H344.331L351.442 114.537L351.707 114.954C354.319 119.301 353.068 124.92 348.812 127.779H348.812L291.478 166.18L291.474 166.183C287.22 168.975 281.558 168.014 278.521 163.952L278.236 163.55L271.126 152.98V152.981C268.186 148.631 269.361 142.69 273.755 139.738H273.756L331.091 101.338L331.508 101.074Z" 
            fill={isHighlighted ? "white" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Bottom right diagonal */}
          <path 
            d="M278.604 266.609C281.51 262.213 287.451 261.028 291.846 263.979L349.178 302.378L349.581 302.659C353.647 305.653 354.655 311.364 351.812 315.621L351.811 315.622L344.7 326.191C341.749 330.585 335.856 331.776 331.458 328.821V328.82L274.124 290.422V290.421C269.731 287.469 268.539 281.578 271.494 277.18V277.179L278.604 266.609Z" 
            fill={isHighlighted ? "#FDD914" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Top left diagonal */}
          <path 
            d="M36.1221 104.176C39.0735 99.7831 44.9652 98.5918 49.3633 101.546L106.695 139.944L107.099 140.226C111.034 143.123 112.12 148.565 109.593 152.772L109.328 153.188L102.218 163.758C99.2663 168.151 93.3739 169.343 88.9756 166.388V166.387L31.6416 127.988V127.987C27.2449 125.082 26.0593 119.141 29.0117 114.746V114.745L36.1221 104.176Z" 
            fill={isHighlighted ? "white" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
          
          {/* Center circle */}
          <path 
            d="M189.922 67.6309C220.683 67.6309 245.633 92.5806 245.633 123.342C245.633 154.103 220.667 179.053 189.922 179.053C159.177 179.053 134.211 154.087 134.211 123.342C134.211 92.5968 159.161 67.631 189.922 67.6309ZM189.922 101.143C177.65 101.143 167.723 111.07 167.723 123.342C167.723 135.614 177.65 145.541 189.922 145.541C202.194 145.541 212.121 135.614 212.121 123.342C212.121 111.07 202.194 101.143 189.922 101.143Z" 
            fill={isHighlighted ? "white" : "none"} 
            stroke="white"
            strokeWidth="1"
          />
        </g>
      </LogoSVG>
    </SVGContainer>
  );
};

export default DynamicLogo; 