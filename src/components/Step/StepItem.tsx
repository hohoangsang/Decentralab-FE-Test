import React from 'react';
import { Step } from '../../@types/step.type';

type Props = {
  step: Step;
};

function StepItem({ step }: Props) {
  return (
    <div className='rounded border border-solid border-charcoalBlue laptop:p-8 tablet:p-6 p-4'>
      <div className='desktop:mb-12 tablet:mb-9 mb-6'>
        <div className='relative flex laptop:h-[92px] laptop:w-[92px] tablet:w-[80px] tablet:h-[80px] w-[65px] h-[65px] items-center justify-center rounded-[2px] bg-primaryConicGradient mx-auto tablet:mx-0'>
          <div className='border-["rgba(255, 255, 255, 0.2)"] absolute right-0 top-0 h-full w-full rounded-[2px] border-solid bg-layer2Gradient bg-blend-overlay backdrop-blur-[10px]' />
          <img srcSet={`${step.iconUrl} 2x`} className='z-10 h-[60%] w-[60%]' alt={step.title} />
        </div>
      </div>
      <div>
        <p className='tablet:mb-4 mb-2 text-center font-primaryMedium text-[1rem] leading-6 text-ghostWhite tablet:text-left tablet:text-[1.5rem] tablet:leading-primaryLineHeight laptop:text-[2rem]'>
          {step.title}
        </p>
        <p className='text-center text-[14px] leading-6 text-silverSand tablet:text-left tablet:text-[18px] tablet:leading-primaryLineHeight laptop:text-[26px]'>
          {step.content}
        </p>
      </div>
    </div>
  );
}

export default StepItem;
