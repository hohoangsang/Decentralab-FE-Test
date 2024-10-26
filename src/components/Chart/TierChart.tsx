import React from 'react';

const TierChart = () => {
  return (
    <div className='bg-[#0a0f1f] min-h-screen flex flex-col items-center justify-center p-6'>
      {/* Chart Line */}
      <div className='relative w-full max-w-2xl h-64'>
        {/* Curve (Use background gradient and divs to mimic the curve) */}
        <div className='absolute inset-0'>
          {/* Background gradient for the curve */}
          <div className='bg-gradient-to-r from-transparent via-blue-700 to-transparent h-2 w-full mt-24 opacity-75'></div>
        </div>

        {/* Tooltip */}
        <div className='absolute left-[70%] top-20 p-4 bg-[#1a2a48] rounded-lg text-white shadow-lg text-sm'>
          <p>F0 (Rebate): 5%</p>
          <p>F1 (Commission): 35%</p>
          <p>F2 (Commission): 10%</p>
        </div>

        {/* Glowing Vertical Line (for active point) */}
        <div className='absolute left-[70%] top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-transparent opacity-50'></div>
      </div>

      {/* Tier Icons */}
      <div className='flex justify-between w-full max-w-2xl mt-10'>
        {tiers.map((tier) => (
          <TierIcon key={tier.level} {...tier} />
        ))}
      </div>
    </div>
  );
};

const TierIcon = ({ level, color }: {level: any, color: any}) => (
  <div className='flex flex-col items-center'>
    <div
      className={`w-14 h-14 ${color} rounded-full flex items-center justify-center text-white text-xl font-bold`}
    >
      {level}
    </div>
    <p className='text-gray-300 mt-2'>Tier {level}</p>
  </div>
);

const tiers = [
  { level: 1, color: 'bg-gray-400' },
  { level: 2, color: 'bg-green-400' },
  { level: 3, color: 'bg-blue-300' },
  { level: 4, color: 'bg-orange-400' },
  { level: 5, color: 'bg-purple-500' },
  { level: 6, color: 'bg-red-500' }
];

export default TierChart;
