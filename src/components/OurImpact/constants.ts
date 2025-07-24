import type { VideoData } from './OurImpact.types';
import Wellness1 from '../../assets/images/Wellness/Wellness-1.png';
import Wellness2 from '../../assets/images/Wellness/Wellness-2.png';
import Wellness3 from '../../assets/images/Wellness/Wellness-3.png';
import Wellness4 from '../../assets/images/Wellness/Wellness-4.png';
import Wellness5 from '../../assets/images/Wellness/Wellness-5.png';
import Wellness6 from '../../assets/images/Wellness/Wellness-1.png';

export const DEFAULT_VIDEOS: VideoData[] = [
  {
    id: 1,
    title: 'THE TITLE',
    subtitle: '01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    thumbnail: Wellness1,
    videoUrl: 'https://www.youtube.com/embed/0HX4fNVqLC0',
  },
  {
    id: 2,
    title: 'THE TITLE',
    subtitle: '02',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    thumbnail: Wellness2,
    videoUrl: 'https://example.com/video2.mp4',
  },
  {
    id: 3,
    title: 'THE TITLE',
    subtitle: '03',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    thumbnail: Wellness3,
    videoUrl: 'https://example.com/video3.mp4',
  },
  {
    id: 4,
    title: 'THE TITLE',
    subtitle: '04',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    thumbnail: Wellness4,
    videoUrl: 'https://example.com/video4.mp4',
  },
  {
    id: 5,
    title: 'THE TITLE',
    subtitle: '05',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    thumbnail: Wellness5,
    videoUrl: 'https://example.com/video5.mp4',
  },
  {
    id: 6,
    title: 'THE TITLE',
    subtitle: '06',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
    thumbnail: Wellness6,
    videoUrl: 'https://example.com/video6.mp4',
  },
];

export const VIDEOS_PER_PAGE = 3;
