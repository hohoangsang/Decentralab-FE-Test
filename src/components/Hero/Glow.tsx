import classNames from 'classnames';

type Props = {
  index: number;
  isHovered: boolean;
};

function Glow({ index, isHovered }: Props) {
  return (
    <>
      {isHovered && (
        <>
          {/* Tier glow */}
          <div className='absolute -left-5 -right-5 bottom-3'>
            <img
              srcSet='/images/glow.png 2x'
              alt={`glow-${index}`}
              className={classNames('m-auto transform', {
                'h-[200px]': index === 0,
                'h-[255px]': index === 1,
                'h-[340px]': index === 2,
                'h-[425px]': index === 3,
                'h-[510px]': index === 4,
                'h-[595px]': index === 5,
                'scale-x-scale2': index !== 5,
                'laptop:scale-x-100': index === 5,
                'scale-x-80': index === 5
              })}
            />
          </div>

          {/* Tier line glow */}
          <div className='absolute bottom-[103px] left-0 right-0 flex justify-center'>
            <img
              alt={`line-glow-${index}`}
              srcSet='/images/line-glow.png 2x'
              className={classNames({
                'h-[40px]': index === 0,
                'h-[80px]': index === 1,
                'h-[120px]': index === 2,
                'h-[160px]': index === 3,
                'h-[200px]': index === 4,
                'h-[240px]': index === 5
              })}
            />
          </div>

          {/* Tier point glow */}
          <div
            className={classNames('absolute left-0 right-0 flex justify-center', {
              'bottom-[147px]': index === 0,
              'bottom-[175px]': index === 1,
              'bottom-[215px]': index === 2,
              'bottom-[265px]': index === 3,
              'bottom-[335px]': index === 4,
              'bottom-[430px]': index === 5
            })}
          >
            <img
              alt={`point-glow-${index}`}
              srcSet='/images/point-glow.png 2x'
              className={classNames('h-[14px] w-[14px]')}
            />
          </div>

          {/* Tier Info */}
          <div
            className={classNames('absolute left-0 right-0 mx-auto w-[238px]', {
              'bottom-[180px]': index === 0,
              'bottom-[195px]': index === 1,
              'bottom-[235px]': index === 2,
              'bottom-[160px]': index === 3,
              'bottom-[230px]': index === 4,
              'bottom-[320px]': index === 5,
              'center-tier-info': index !== 5,
              'align-last-tier-info': index === 5,
            })}
          >
            <div className='border-gradient-tier-info backdrop-blur-tier-info rounded-[3px] bg-[#0E132812]'>
              <div className='px-[10px] py-[12px]'>
                {['F0 (Rebate): 5%', 'F1 (Commission): 35%', 'F2 (Commission): 10%'].map(
                  (item, index) => (
                    <p key={index} className='leading-[26px] tracking-wider text-ghostWhite'>
                      {item}
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Glow;
