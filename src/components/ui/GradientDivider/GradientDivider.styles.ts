import styled, { keyframes, css } from 'styled-components';
import type { StyledGradientDividerProps } from './GradientDivider.types';

// Animation keyframe for moving gradient
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const StyledGradientDivider = styled.div<StyledGradientDividerProps>`
  width: 100vw;
  height: ${props => props.$height};

  ${props =>
    props.$animated
      ? css`
          background: var(${props.$cssVariable || '--gradient-full'});
          background-size: 200% auto;
          animation: ${gradientAnimation} 17s ease infinite;
        `
      : css`
          background: linear-gradient(
            to right,
            ${props.$leftColor || '#0066ff'} 0%,
            ${props.$rightColor || '#ffff00'} 100%
          );
        `}
`;
