import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TilesContainer = styled.div`
  display: flex;
  height: 70vh;
  width: 100%;
  gap: 10px;
  /* padding: 20px; */
  box-sizing: border-box;
  padding-top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 12px;
  }
`;

export const Tile = styled(motion.div)<{
  $backgroundImage: string;
  $isExpanded: boolean;
  $isGrayscale: boolean;
}>`
  position: relative;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  /* Flex properties for expansion */
  flex: ${props => (props.$isExpanded ? '2' : '1')};

  /* Grayscale filter for non-expanded tiles */
  filter: ${props =>
    props.$isGrayscale ? 'grayscale(100%)' : 'grayscale(0%)'};

  /* Border for expanded tile */
  border: ${props =>
    props.$isExpanded ? '3px solid #ff6b35' : '3px solid transparent'};

  /* Shadow for expanded tile */
  box-shadow: ${props =>
    props.$isExpanded
      ? '0 20px 40px rgba(255, 107, 53, 0.3)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)'};

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
  padding: 24px;
  color: white;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const TileTitle = styled(motion.h3)`
  margin: 0 0 12px 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`;

export const TileDescription = styled(motion.p)`
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.4;
  }
`;

export const ComponentWrapper = styled.div`
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
`;
