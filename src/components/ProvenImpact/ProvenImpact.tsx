import React from 'react';
import type { ProvenImpactProps } from './ProvenImpact.types';
import { impactData } from './constants';
import {
  SectionContainer,
  SectionTitle,
  ImpactGrid,
  ImpactCard,
  ImpactValue,
  ImpactTitle,
  ImpactDescription,
} from './ProvenImpact.styles';

const ProvenImpact: React.FC<ProvenImpactProps> = () => {
  return (
    <SectionContainer>
      <SectionTitle>Proven Impactt</SectionTitle>
      <ImpactGrid>
        {impactData.map(item => (
          <ImpactCard
            key={item.id}
            $backgroundImage={item.backgroundImage}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <ImpactValue>{item.value}</ImpactValue>
            <ImpactTitle>{item.title}</ImpactTitle>
            <ImpactDescription>{item.description}</ImpactDescription>
          </ImpactCard>
        ))}
      </ImpactGrid>
    </SectionContainer>
  );
};

export default ProvenImpact;
