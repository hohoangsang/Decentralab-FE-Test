import { Tier } from '../../@types/tier.type';
import RightArrow from '../Arrow/RightArrow';

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
  return (
    <section className='bg-heroBgGradient w-full'>
      <div className='mx-auto max-w-maxWidthSection'>
        <div className='mx-[32px] grid grid-cols-2 gap-[300px]'>
          <div className='my-auto max-w-[840px]'>
            <h2 className='mb-2 max-w-[800px] text-center font-primaryBold text-[1.5rem] leading-6 text-ghostWhite tablet:mb-4 tablet:text-left tablet:text-[2rem] tablet:leading-primaryLineHeight laptop:text-[3rem]'>
              Unlock Rewards with the Copin Referral Program
            </h2>
            <p className='mb-6 max-w-[760px] text-center text-[14px] leading-6 text-silverSand tablet:text-left tablet:text-[18px] tablet:leading-primaryLineHeight laptop:text-[26px]'>
              Earn rebates and commissions by inviting friends.
              <br />
              Grow your network and benefit from our 6-tier reward system.
            </p>
            <div className='flex cursor-pointer items-center gap-2 text-center text-[14px] leading-8 text-skyBlue hover:underline tablet:text-[18px] tablet:leading-primaryLineHeight laptop:text-[26px]'>
              <span>View referral Ranking</span>
              <div className='mt-2'>
                <RightArrow />
              </div>
            </div>
          </div>

          <div className='relative my-[32px] h-[500px] max-w-[756px]'>
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
                      <div className='absolute bottom-0 left-0 right-0 z-10'>
                        <img
                          srcSet={`${item.tierUrlImage} 2x`}
                          alt={item.title}
                          className='mx-auto mb-4 h-[62px] w-[62px]'
                        />
                        <p className='text-center text-[24px] leading-[26px] tracking-wide text-ghostWhite'>
                          {item.title}
                        </p>
                      </div>

                      {index === 0 && (
                        <div className='absolute -left-5 -right-5 bottom-3'>
                          <img
                            srcSet='/images/glow.png 2x'
                            alt={`glow-${index}`}
                            className={'scale-x-scale2 m-auto h-[200px] transform'}
                          />
                        </div>
                      )}

                      {index === 1 && (
                        <div className='absolute -left-5 -right-5 bottom-3'>
                          <img
                            srcSet='/images/glow.png 2x'
                            alt={`glow-${index}`}
                            className={'scale-x-scale2 m-auto h-[255px] transform'}
                          />
                        </div>
                      )}

                      {index === 2 && (
                        <div className='absolute -left-5 -right-5 bottom-3'>
                          <img
                            srcSet='/images/glow.png 2x'
                            alt={`glow-${index}`}
                            className={'scale-x-scale2 m-auto h-[340px] transform'}
                          />
                        </div>
                      )}

                      {index === 3 && (
                        <div className='absolute -left-5 -right-5 bottom-3'>
                          <img
                            srcSet='/images/glow.png 2x'
                            alt={`glow-${index}`}
                            className={'scale-x-scale2 m-auto h-[425px] transform'}
                          />
                        </div>
                      )}

                      {index === 4 && (
                        <div className='absolute -left-5 -right-5 bottom-3'>
                          <img
                            srcSet='/images/glow.png 2x'
                            alt={`glow-${index}`}
                            className={'scale-x-scale2 m-auto h-[510px] transform'}
                          />
                        </div>
                      )}

                      {index === 5 && (
                        <div className='absolute -left-5 -right-5 bottom-3'>
                          <img
                            srcSet='/images/glow.png 2x'
                            alt={`glow-${index}`}
                            className={'scale-x-scale2 m-auto h-[595px] transform'}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
