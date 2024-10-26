import StepList from './StepList';

type Props = {};

function Step({}: Props) {
  return (
    <section className='mx-auto max-w-maxWidthSection bg-transparent'>
      <div className='m-[32px]'>
        <div className='flex flex-col justify-center tablet:justify-start'>
          <div className='mx-auto mb-6 flex items-center gap-2 text-ghostWhite tablet:mx-0 tablet:gap-4'>
            <img
              srcSet='/images/LightbulbFilament.png 2x'
              alt='LightbulbFilament'
              className='h-[30px] w-[30px] shrink-0 tablet:h-[36px] tablet:w-[36px] desktop:h-[48px] desktop:w-[48px]'
            />
            <h2 className='font-primaryMedium text-[1.5rem] leading-primaryLineHeight tablet:text-[1.8rem] desktop:text-[2rem]'>
              How It Works?
            </h2>
          </div>
        </div>
        <StepList />
      </div>
    </section>
  );
}

export default Step;
