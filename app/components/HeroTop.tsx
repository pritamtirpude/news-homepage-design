'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import desktopWeb from '@/public/assets/images/image-web-3-desktop.jpg';
import mobileWeb from '@/public/assets/images/image-web-3-mobile.jpg';

function HeroTop() {
  const matches = useMediaQuery('(max-width: 767px)');
  return (
    <section className="mt-8 grid grid-cols-1 gap-[30px] lg:mt-[55px] lg:grid-cols-3">
      <div className="lg:col-span-2 lg:row-span-1">
        <div>
          <Image
            priority
            placeholder="blur"
            className="size-full object-cover"
            src={matches ? mobileWeb : desktopWeb}
            alt="desktop web image"
          />
        </div>
      </div>

      <div>
        <h1 className="text-[40px] font-extrabold leading-[40px] text-newsColor-darkBlue lg:text-[56px] lg:leading-[56px]">
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <div>
        <p className="text-[15px]  leading-[26px] text-newsColor-darkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="mt-[29px] bg-newsColor-softRed px-[30px] py-[13px] text-[14px] font-bold uppercase leading-6 tracking-[4.38px] text-newsColor-darkBlue transition-all hover:bg-newsColor-darkBlue hover:text-newsColor-off-white ">
          Read More
        </button>
      </div>

      <div className="bg-newsColor-darkBlue px-6 py-8 lg:col-start-3 lg:row-span-2 lg:row-start-1">
        <h2 className="text-[32px] font-bold text-newsColor-softOrange lg:text-[40px]">
          New
        </h2>
        <div className="mt-[34px]">
          <div>
            <h3 className="cursor-pointer text-xl font-extrabold leading-6 text-newsColor-off-white transition-colors hover:text-newsColor-softOrange">
              Hydrogen VS Electric Cars
            </h3>
            <p className="mt-2 text-[15px] leading-[26px] text-[#C5C6CE]">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
          </div>
          <div className="mt-[29px] h-px w-full bg-newsColor-darkGrayishBlue" />
          <div className="mt-[31px]">
            <h3 className="cursor-pointer text-xl font-extrabold leading-6 text-newsColor-off-white transition-colors hover:text-newsColor-softOrange">
              The Downsides of AI Artistry
            </h3>
            <p className="mt-2 text-[15px] leading-[26px] text-[#C5C6CE]">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="mt-[29px] h-px w-full bg-newsColor-darkGrayishBlue" />
          <div className="mt-[31px]">
            <h3 className="cursor-pointer text-xl font-extrabold leading-6 text-newsColor-off-white transition-colors hover:text-newsColor-softOrange">
              Is VC Funding Drying Up?
            </h3>
            <p className="mt-2 text-[15px] leading-[26px] text-[#C5C6CE]">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroTop;
