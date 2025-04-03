'use client';

import { Typography } from "./typography";

export const Divider = () => {
  return <div className=" h-[0.6px] my-10 w-full bg-white/30 dark:bg-black" />;
};

export const Bold = ({ children }) => {
  return <span className=" font-bold">{children}</span>;
};

export const Paragraph = ({ children }) => {
  return (
    <Typography variant="p" className=" text-sm md:text-base ">
      {children}
    </Typography>
  );
};

export const SecHeading = ({ children }) => {
  return (
    <Typography
      variant="h4"
      className="pb-2 lg:text-2xl font-semibold text-xl mt-10"
    >
      {children}
    </Typography>
  );
};

export const SubHeading = ({ children }) => {
  return (
    <Typography
      variant="h4"
      className="pb-2 lg:text-[19px] font-semibold text-lg "
    >
      {children}
    </Typography>
  );
};
export const Title = ({ children }) => {
  return (
    <Typography
      variant="h4"
      className=" ml-2  sm:ml-4 md:ml-6 lg:text-lg font-semibold text-lg "
    >
      {children}
    </Typography>
  );
};
export const Point = ({ children, className }) => {
  return (
    <div
      className={`flex gap-2 ml-4 sm:ml-6 lg:ml-10    flex-nowrap ${className}`}
    >
      {/* <Icon
        icon={'octicon:dot-24'}
        className="  shrink-0  !h-4 !w-4   "
      /> */}

      <div className=" border border-white/90 dark:!border-black rounded-full size-2 shrink-0 mt-[8px] " />

      <Typography variant="p" className={`text-sm md:text-base ${className}`}>
        {children}
      </Typography>
    </div>
  );
};

