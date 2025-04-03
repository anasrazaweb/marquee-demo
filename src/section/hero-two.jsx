// import Marquee from 'react-fast-marquee';
// import { MarqueeDemoVertical } from './new-marquee';
import { Point } from '@/components/ui/TextElements';
import { MarqueeDemoVertical } from './magic-marquee';
import { Marquee } from '@/components/ui/marquee-com';
import { Typography } from '@/components/ui/typography';
import { FastMarquee } from './fast-marquee';


 const List = [
  'Enhance shopper confidence with virtual fitting',
  'Reduce costs with AI-driven photography',
  'Scale easily with bulk processing',
  'Convert flat-lay images to on-model photos',
];


const imageSets = [
  [
    '/Images/hero-marquee/1.png',
    '/Images/hero-marquee/2.png',
    '/Images/hero-marquee/3.png',
    '/Images/hero-marquee/4.png',
  ],
  [
    '/Images/hero-marquee/5.png',
    '/Images/hero-marquee/6.png',
    '/Images/hero-marquee/7.png',
    '/Images/hero-marquee/8.png',
  ],
  [
    '/Images/hero-marquee/9.png',
    '/Images/hero-marquee/10.png',
    '/Images/hero-marquee/11.png',
    '/Images/hero-marquee/12.png',
  ],
];

const imageStyle = 'w-[100] h-[250px] object-cover rounded-xl shadow-md'; // Adjusted height

const VerticalMarquee = ({ images, speed = 40 }) => {
  return (
    <div className="h-screen bg-primary w-1/3 overflow-hidden flex flex-col items-center relative">
      <Marquee
        direction="up"
        speed={speed}
        gradient={false}
        className="flex flex-col space-y-8 py-4" // Added spacing
      >
        {images.map((src, i) => (
          <img key={i} src={src} alt={`marquee-${i}`} className={imageStyle} />
        ))}
      </Marquee>
    </div>
  );
};

const HeroTwo = () => {
  return (
    <div className="!h-screen w-screen overflow-hidden bg-primary text-white relative">
      <div className="w-full flex h-screen">
        {/* Left - Text Section */}
        <div className="w-1/2 flex justify-center items-center px-5 sm:px-10 lg:px-16">
          <div>
            <h1 className="bg-text-gradients leading-tight text-white dark:bg-text-bg-gradient-dark text-transparent bg-clip-text font-semibold  text-2xl sm:text-3xl md:text-[45px]  ">
            Sell more with AI-Powered Fashion Imaging
            </h1>
            <div className="mt-6 space-y-2 sm:space-y-2">
              {List?.map((list, index) => (
                <Point
                  key={index}
                  className="!ml-0 !p-0 text-gray dark:text-black font-urbanist font-normal text-sm sm:text-lg"
                >
                  {list}
                </Point>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Full-Height Marquee */}
        <div className="w-1/2 flex  justify-center items-center space-x-4 relative h-screen overflow-hidden">


          <FastMarquee />
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
