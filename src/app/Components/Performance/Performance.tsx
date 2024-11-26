import React from "react";

const Performance = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 pt-10 md:flex-row-reverse md:gap-10">
      <div className="flex flex-col md:basis-1/2 items-center justify-center">
        <h4 className="underline underline-offset-2 text-3xl tracking-wider text-center pb-8">
          Performance Matters
        </h4>
        <p className="max-w-[400px] text-base leading-relaxed pb-8 md:text-lg lg:text-xl lg:max-w-[550px] xl:text-2xl">
          Speed matters. Every extra second your website takes to load costs you
          potential customers. I specialize in performance optimization and
          accessibility, ensuring your site is fast, user-friendly, and
          accessible to everyone. With a proven track record of optimized
          Lighthouse scores, I can help your business thrive in the digital
          world.
        </p>
      </div>
      <div className="flex flex-col w-[80vw] gap-8 pb-10 md:basis-1/2 md:max-w-[600px] items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <img
            className="aspect-[462/146]"
            src="/performance/GTMetrix.webp"
            alt="Perfect GTMetrix performance scores"
            width={462}
            height={146}
          />
        </div>
        <div className="w-full">
          <img
            className="aspect-[900/480]"
            src="/performance/Lighthouse.webp"
            alt="Perfect Lighthouse performance scores"
            width={900}
            height={480}
          />
        </div>
      </div>
    </div>
  );
};

export default Performance;
