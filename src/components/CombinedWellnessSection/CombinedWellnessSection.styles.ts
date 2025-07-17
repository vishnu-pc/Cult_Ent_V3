import styled from 'styled-components';

/**
 * Main container for the combined wellness sections.
 * Applies the animated gradient background from WellnessSolutions across all three components.
 * Stacks components vertically with seamless transitions.
 */
export const CombinedSectionContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background: var(--gradient-animated-very-subtle);
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
  position: relative;
  display: flex;
  flex-direction: column;

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Ensure child components don't have their own backgrounds */
  > * {
    // background: transparent !important;
  }

  /* Remove any potential spacing between components */
  > * + * {
    // margin-top: 0;
    // padding-top: 0;
  }
`;
