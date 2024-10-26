import { Step } from '../../@types/step.type';

type Props = {
  step: Step;
};

function StepItem({ step }: Props) {
  return (
    <div className='rounded border border-solid border-charcoalBlue p-4 tablet:p-6 laptop:p-8'>
      <div className='mb-6 tablet:mb-9 desktop:mb-12'>
        <div className='relative mx-auto flex h-[65px] w-[65px] items-center justify-center rounded-[2px] bg-primaryConicGradient tablet:mx-0 tablet:h-[80px] tablet:w-[80px] laptop:h-[92px] laptop:w-[92px]'>
          <div className='border-["rgba(255, 255, 255, 0.2)"] absolute right-0 top-0 h-full w-full rounded-[2px] border-solid bg-layer2Gradient bg-blend-overlay backdrop-blur-[10px]' />
          <img srcSet={`${step.iconUrl} 2x`} className='z-10 h-[60%] w-[60%]' alt={step.title} />
        </div>
      </div>
      <div>
        <p className='mb-2 text-center font-primaryMedium text-[1rem] leading-6 text-ghostWhite tablet:mb-4 tablet:text-left tablet:text-[1.5rem] tablet:leading-primaryLineHeight laptop:text-[2rem]'>
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
