import Image from 'next/image';
import retorPcs from '@/public/assets/images/image-retro-pcs.jpg';
import laptops from '@/public/assets/images/image-top-laptops.jpg';
import gaming from '@/public/assets/images/image-gaming-growth.jpg';

function HeroBottom() {
  return (
    <section className="mt-[64px] grid grid-cols-1 gap-8 lg:mt-[70px] lg:grid-cols-3">
      <div className="flex gap-6">
        <Image
          className="h-full w-[100px] object-cover"
          src={retorPcs}
          priority
          placeholder="blur"
          alt="retor pcs"
        />
        <div>
          <h4 className="text-[32px] font-bold leading-8 text-newsColor-softRed">
            01
          </h4>
          <h5 className="mt-3 cursor-pointer text-lg font-extrabold leading-6 text-newsColor-darkBlue transition-colors hover:text-newsColor-softRed">
            Reviving Retro PCs
          </h5>
          <p className="mt-[9px] text-[15px]  leading-[26px] text-newsColor-darkGrayishBlue">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Image
          priority
          placeholder="blur"
          className="h-full w-[100px] object-cover"
          src={laptops}
          alt="laptops"
        />
        <div>
          <h4 className="text-[32px] font-bold leading-8 text-newsColor-softRed">
            02
          </h4>
          <h5 className="mt-3 cursor-pointer text-lg font-extrabold leading-6 text-newsColor-darkBlue transition-colors hover:text-newsColor-softRed">
            Top 10 Laptops of 2022
          </h5>
          <p className="mt-[9px] text-[15px]  leading-[26px] text-newsColor-darkGrayishBlue">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <Image
          priority
          placeholder="blur"
          className="h-full w-[100px] object-cover"
          src={gaming}
          alt="gaming"
        />
        <div>
          <h4 className="text-[32px] font-bold leading-8 text-newsColor-softRed">
            03
          </h4>
          <h5 className="mt-3 cursor-pointer text-lg font-extrabold leading-6 text-newsColor-darkBlue transition-colors hover:text-newsColor-softRed">
            The Growth of Gaming
          </h5>
          <p className="mt-[9px] text-[15px]  leading-[26px] text-newsColor-darkGrayishBlue">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroBottom;
