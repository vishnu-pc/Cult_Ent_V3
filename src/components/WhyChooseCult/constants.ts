import type { TileData } from '../ExpandableTiles';
// Use vite-imagetools to generate responsive variants (avif/webp at widths 640, 1280, 1920)
// @ts-ignore - imagetools query imports
import WhyChooseCult1Picture from '../../assets/images/WhyChooseCult/WhyChooseCult-1.webp?w=640;1280;1920&format=avif;webp&as=picture';
// @ts-ignore
import WhyChooseCult2Picture from '../../assets/images/WhyChooseCult/WhyChooseCult-2.webp?w=640;1280;1920&format=avif;webp&as=picture';
// @ts-ignore
import WhyChooseCult3Picture from '../../assets/images/WhyChooseCult/WhyChooseCult-3.webp?w=640;1280;1920&format=avif;webp&as=picture';
// @ts-ignore
import WhyChooseCult4Picture from '../../assets/images/WhyChooseCult/WhyChooseCult-4.webp?w=640;1280;1920&format=avif;webp&as=picture';
// @ts-ignore
import WhyChooseCult5Picture from '../../assets/images/WhyChooseCult/WhyChooseCult-5.webp?w=640;1280;1920&format=avif;webp&as=picture';

// Build CSS image-set from a picture object
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toImageSet = (picture: any): string => {
  const avif =
    picture?.sources?.find((s: any) => s.type === 'image/avif')?.srcset || '';
  const webp =
    picture?.sources?.find((s: any) => s.type === 'image/webp')?.srcset || '';
  return `${avif} type('image/avif'), ${webp} type('image/webp')`;
};

export const whyChooseCultTiles: TileData[] = [
  {
    id: 1,
    image: WhyChooseCult1Picture.img,
    imageSet: toImageSet(WhyChooseCult1Picture),
    title: 'Results You Can See, ROI You Can Measure',
    description:
      'Analytics-powered wellness with metrics that directly impact your performance indicators.',
    backgroundPosition: 'center 30%',
  },
  {
    id: 2,
    image: WhyChooseCult2Picture.img,
    imageSet: toImageSet(WhyChooseCult2Picture),
    title: 'Mental Wellness',
    description:
      'our company culture is one-of-a-kind. Your wellness strategy should match its DNA.',
    backgroundPosition: 'center 55%',
  },
  {
    id: 3,
    image: WhyChooseCult3Picture.img,
    imageSet: toImageSet(WhyChooseCult3Picture),
    title: 'Nutrition Guidance',
    description:
      "Just like your ambitious expansion plans, we've got India covered.",
    backgroundPosition: 'center 30%',
  },
  {
    id: 4,
    image: WhyChooseCult4Picture.img,
    imageSet: toImageSet(WhyChooseCult4Picture),
    title: 'Team Building',
    description:
      'Multiple wellness vendors create multiple headaches. We’re your comprehensive answer to employee wellbeing.',
    backgroundPosition: 'center 18%',
  },
  {
    id: 5,
    image: WhyChooseCult5Picture.img,
    imageSet: toImageSet(WhyChooseCult5Picture),
    title: 'Recovery & Rest',
    description:
      'Why experiment when you can implement what’s already proven successful for companies like yours?',
    backgroundPosition: 'center 39%',
  },
];
