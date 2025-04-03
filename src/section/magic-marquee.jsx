/* eslint-disable @next/next/no-img-element */
import { Marquee } from "@/components/ui/marquee-com";
import { cn } from "@/lib/utils";

const reviews = [
  { img: "/Images/hero-marquee/1.png" },
  { img: "/Images/hero-marquee/2.png" },
  { img: "/Images/hero-marquee/3.png" },
  { img: "/Images/hero-marquee/4.png" },
  { img: "/Images/hero-marquee/5.png" },
  { img: "/Images/hero-marquee/6.png" },
  { img: "/Images/hero-marquee/7.png" },
  { img: "/Images/hero-marquee/8.png" },
  { img: "/Images/hero-marquee/9.png" },
  { img: "/Images/hero-marquee/10.png" },
  { img: "/Images/hero-marquee/11.png" },
  { img: "/Images/hero-marquee/12.png" },
  { img: "/Images/hero-marquee/13.png" },
  { img: "/Images/hero-marquee/3.png" },
  { img: "/Images/hero-marquee/11.png" },
];

const firstRow = reviews.slice(0, 5);
const secondRow = reviews.slice(5, 10);
const thirdRow = reviews.slice(10, 15);

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-0",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-md w-[180px] h-60 object-center" alt="img" src={img} />
      </div>
    </figure>
  );
};

export function MarqueeDemoVertical() {
  return (
    <div className="relative flex h-screen w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover vertical className="[--duration:40s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index + 5} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover vertical className="[--duration:40s]">
        {thirdRow.map((review, index) => (
          <ReviewCard key={index + 10} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0C001B]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0C001B]"></div>
    </div>
  );
}
