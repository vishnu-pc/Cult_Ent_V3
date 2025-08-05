import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 100%;
  /* Desktop styling */
  padding: var(--spacing-2xl) var(--spacing-lg);
  box-sizing: border-box;

  @media (max-width: 768px) {
    /* Mobile: Create tall scroll area for sticky behavior */
    height: 300vh; /* 4x viewport height to create sufficient scroll space */
    padding: var(--spacing-5xl) var(--spacing-xxs);
    position: relative;
  }
`;

export const StickyWrapper = styled.div`
  /* Desktop: normal behavior */

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    // padding: var(--spacing-lg);
    box-sizing: border-box;
    z-index: 1;
    /* Add subtle background to visualize sticky behavior in debug */
    /* background: rgba(0, 0, 0, 0.02); */
  }
`;

export const TilesContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  gap: 10px;
  box-sizing: border-box;
  // padding-top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 12px;
    justify-content: center;
  }
`;

export const Tile = styled(motion.div)<{
  $backgroundImage: string;
  $isExpanded: boolean;
  $isGrayscale: boolean;
  $backgroundPosition?: string;
}>`
  position: relative;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: ${props =>
    props.$isExpanded ? 'center' : props.$backgroundPosition || 'center'};
  background-repeat: no-repeat;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Flex properties for expansion */
  flex: ${props => (props.$isExpanded ? '2.5' : '1')};

  /* Grayscale filter for non-expanded tiles */
  filter: ${props =>
    props.$isGrayscale ? 'grayscale(100%)' : 'grayscale(0%)'};

  /* Border for expanded tile */
  border: ${props =>
    props.$isExpanded ? '3px solid #ff6b35' : '3px solid transparent'};

  /* Shadow for expanded tile */
  box-shadow: ${props =>
    props.$isExpanded
      ? '0 10px 20px rgba(255, 107, 53, 0.3)'
      : '0 2px 4px rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    flex: none;
    height: ${props => (props.$isExpanded ? '400px' : '120px')};
    width: 100%;
  }

  /* Overlay for better text readability */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props =>
      props.$isExpanded
        ? 'linear-gradient(transparent 50%, rgba(0, 0, 0, 0.7))'
        : 'rgba(0, 0, 0, 0.2)'};
    transition: background 0.4s ease;
  }
`;

export const TileContent = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 22px;
  color: white;
  line-height: 160%;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TileTitle = styled(motion.h3)`
  margin: 0 0 12px 0;
  font-size: 22px;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const TileDescription = styled(motion.p)`
  margin: 0;
  font-weight: 300;
  font-size: 18px;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;
