const TierChart = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#0a0f1f] p-6'>
      {/* Chart Line */}
      <div className='max-w-2xl relative h-64 w-full'>
        {/* Curve (Use background gradient and divs to mimic the curve) */}
        <div className='absolute inset-0'>
          {/* Background gradient for the curve */}
          <div className='mt-24 h-2 w-full bg-gradient-to-r from-transparent via-blue-700 to-transparent opacity-75'></div>
        </div>

        {/* Tooltip */}
        <div className='absolute left-[70%] top-20 rounded-lg bg-[#1a2a48] p-4 text-sm text-white shadow-lg'>
          <p>F0 (Rebate): 5%</p>
          <p>F1 (Commission): 35%</p>
          <p>F2 (Commission): 10%</p>
        </div>

        {/* Glowing Vertical Line (for active point) */}
        <div className='absolute left-[70%] top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-transparent opacity-50'></div>
      </div>

      {/* Tier Icons */}
      <div className='max-w-2xl mt-10 flex w-full justify-between'>
        {tiers.map((tier) => (
          <TierIcon key={tier.level} {...tier} />
        ))}
      </div>
    </div>
  );
};

const TierIcon = ({ level, color }: { level: any; color: any }) => (
  <div className='flex flex-col items-center'>
    <div
      className={`h-14 w-14 ${color} flex items-center justify-center rounded-full text-xl font-bold text-white`}
    >
      {level}
    </div>
    <p className='mt-2 text-gray-300'>Tier {level}</p>
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
