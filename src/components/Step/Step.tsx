import React from 'react';
import StepList from './StepList';

type Props = {};

function Step({}: Props) {
  return (
    <section className='mx-auto max-w-maxWidthSection bg-transparent'>
      <div className='m-[32px]'>
        <div className='flex flex-col justify-center tablet:justify-start'>
          <div className='text-ghostWhite flex items-center tablet:gap-4 gap-2 mb-6 mx-auto tablet:mx-0'>
            <img
              srcSet='/images/LightbulbFilament.png 2x'
              alt='LightbulbFilament'
              className='shrink-0 desktop:w-[48px] desktop:h-[48px] tablet:w-[36px] tablet:h-[36px] w-[30px] h-[30px] '
            />
            <h2 className='leading-primaryLineHeight font-primaryMedium tablet:text-[1.8rem] text-[1.5rem] desktop:text-[2rem]'>
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
