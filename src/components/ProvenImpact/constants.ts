import Wellness1 from '../../assets/images/Wellness/Wellness-1.jpg';
import Wellness2 from '../../assets/images/Wellness/Wellness-2.jpeg';
import Wellness3 from '../../assets/images/Wellness/Wellness-3.avif';
import Wellness4 from '../../assets/images/Wellness/Wellness-4.avif';
import Wellness5 from '../../assets/images/Wellness/Wellness-5.avif';
import Wellness6 from '../../assets/images/Wellness/Wellness-6.jpeg';

export interface ImpactItem {
  id: number;
  title: string;
  value: string;
  description: string;
  backgroundImage: string;
}

export const impactData: readonly ImpactItem[] = [
  {
    id: 1,
    title: 'Employee Engagement',
    value: '78%',
    description:
      'Increase in employee engagement scores after implementing CULT wellness programs',
    backgroundImage: Wellness1,
  },
  {
    id: 2,
    title: 'Productivity',
    value: '32%',
    description:
      'Boost in productivity metrics across participating organizations',
    backgroundImage: Wellness2,
  },
  {
    id: 3,
    title: 'Retention',
    value: '45%',
    description:
      'Improvement in employee retention rates for companies with CULT wellness solutions',
    backgroundImage: Wellness3,
  },
  {
    id: 4,
    title: 'Healthcare Costs',
    value: '28%',
    description:
      'Reduction in healthcare costs for employers implementing comprehensive wellness programs',
    backgroundImage: Wellness4,
  },
  {
    id: 5,
    title: 'Work Satisfaction',
    value: '92%',
    description:
      'Of employees report higher job satisfaction after participating in CULT programs',
    backgroundImage: Wellness5,
  },
  {
    id: 6,
    title: 'ROI',
    value: '3.27x',
    description:
      'Average return on investment for companies implementing CULT wellness solutions',
    backgroundImage: Wellness6,
  },
] as const;
