import { Point } from '@/components/ui/TextElements';
import { MarqueeDemoVertical } from './magic-marquee';


 const List = [
  'Enhance shopper confidence with virtual fitting',
  'Reduce costs with AI-driven photography',
  'Scale easily with bulk processing',
  'Convert flat-lay images to on-model photos',
];







const NewHeroSection = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-primary text-white relative">
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


          <MarqueeDemoVertical />
        </div>
      </div>
    </div>
  );
};

export default NewHeroSection;
