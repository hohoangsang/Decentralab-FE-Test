import { useState } from 'react';
import { Tier } from '~/@types/tier.type';
import RightArrow from '~/components/Arrow/RightArrow';
import Glow from '~/components/Hero/Glow';

type Props = {};

const tierList: Tier[] = [
  {
    title: 'Tier 1',
    tierUrlImage: '/images/icon-tier1.png'
  },
  {
    title: 'Tier 2',
    tierUrlImage: '/images/icon-tier2.png'
  },
  {
    title: 'Tier 3',
    tierUrlImage: '/images/icon-tier3.png'
  },
  {
    title: 'Tier 4',
    tierUrlImage: '/images/icon-tier4.png'
  },
  {
    title: 'Tier 5',
    tierUrlImage: '/images/icon-tier5.png'
  },
  {
    title: 'Tier 6',
    tierUrlImage: '/images/icon-tier6.png'
  }
];

function Hero({}: Props) {
  const [indexHovered, setIsHovered] = useState<number>();

  const handleMouseEnter = (index: number) => setIsHovered(index);
  const handleMouseLeave = () => setIsHovered(undefined);

  return (
    <section className='w-full bg-heroBgGradient'>
      <div className='mx-auto max-w-maxWidthSection'>
        <div className='mx-[2rem] grid grid-cols-1 desktop:mx-0 desktop:grid-cols-2 extraLarge:gap-[300px]'>
          <div className='mx-auto my-[2rem] max-w-[600px] desktop:my-auto desktop:ml-[2rem] extraLarge:max-w-[840px]'>
            <h2 className='mb-2 max-w-[800px] text-center font-primaryBold text-[1.5rem] leading-6 text-ghostWhite tablet:mb-4 tablet:text-[2rem] tablet:leading-primaryLineHeight laptop:text-[3rem] desktop:text-left'>
              Unlock Rewards with the Copin Referral Program
            </h2>
            <p className='desktop:mb-6 mb-3 max-w-[760px] text-center text-[14px] leading-6 text-silverSand tablet:text-[18px] tablet:leading-primaryLineHeight laptop:text-[26px] desktop:text-left'>
              Earn rebates and commissions by inviting friends.
              <br />
              Grow your network and benefit from our 6-tier reward system.
            </p>
            <div className='flex cursor-pointer items-center justify-center gap-2 text-center text-[14px] leading-8 text-skyBlue hover:underline tablet:text-[18px] tablet:leading-primaryLineHeight laptop:text-[26px] desktop:justify-start desktop:text-left'>
              <span>View referral Ranking</span>
              <div className='mt-2'>
                <RightArrow />
              </div>
            </div>
          </div>

          <div className='w-full tablet:block hidden'>
            <div className='desktop:ml-auto desktop:mr-[2rem] mx-auto relative my-[32px] tablet:h-[500px] h-[400px] max-w-[756px]'>
              <div className='absolute right-0 top-0 w-full'>
                <img
                  srcSet='/images/dashed-line.png 2x'
                  alt='dashed-line'
                  className='absolute right-0 top-0 w-full'
                />

                <img
                  srcSet='/images/curved-gradient.png 2x'
                  alt='curved-gradient'
                  className='absolute right-0 top-0 w-full'
                />

                <img
                  srcSet='/images/line-curve.png 2x'
                  alt='line-curve'
                  className='absolute right-0 top-0 w-full'
                />
              </div>

              <div className='absolute bottom-0 right-0 w-full'>
                <div className='grid grid-cols-6 gap-[27px]'>
                  {tierList.map((item, index) => {
                    return (
                      <div key={index} className='relative cursor-pointer'>
                        <div
                          className='tier absolute bottom-0 left-0 right-0 z-10'
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave()}
                        >
                          <img
                            srcSet={`${item.tierUrlImage} 2x`}
                            alt={item.title}
                            className='mx-auto mb-4 h-[62px] w-[62px]'
                          />
                          <p className='text-center text-[1.5rem] leading-[26px] tracking-wide text-ghostWhite'>
                            {item.title}
                          </p>
                        </div>

                        <Glow index={index} isHovered={Boolean(indexHovered === index)} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
