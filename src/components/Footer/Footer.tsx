import RightArrow from '../Arrow/RightArrow';

type Props = {};

function Footer({}: Props) {
  return (
    <footer className='mx-auto max-w-maxWidthSection'>
      <div className='m-[32px] flex h-[180px] items-center justify-center bg-footerBg px-4 tablet:h-[250px] laptop:h-[300px] desktop:h-[354px]'>
        <div className='flex w-[280px] flex-col items-center justify-center gap-2 tablet:w-[606px]'>
          <p className='text-center font-primaryBold text-[1rem] leading-8 text-ghostWhite tablet:text-[1.5rem] tablet:leading-primaryLineHeight laptop:text-[2rem]'>
            Apply{' '}
            <span className='cursor-pointer bg-primaryGradient bg-clip-text text-transparent hover:underline'>
              Copin Affilate Program
            </span>{' '}
            to get more benefits!
          </p>
          <div className='flex cursor-pointer items-center gap-2 text-center text-[14px] leading-8 text-skyBlue hover:underline tablet:text-[18px] tablet:leading-primaryLineHeight laptop:text-[26px]'>
            <span>Contact us </span>
            <div className='mt-2'>
              <RightArrow />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
