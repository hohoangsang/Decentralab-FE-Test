import StepItem from './StepItem';
import { Step } from '../../@types/step.type';

type Props = {};

const steps: Step[] = [
  {
    iconUrl: '/images/BoundingBox@2x.png',
    title: '1. Two-Level Referral System',
    content:
      'Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals).'
  },
  {
    iconUrl: '/images/UsersFour.png',
    title: '2. Earn Rebates & Commissions',
    content: 'Earn rebates on your trades and commissions from F1 and F2.'
  },
  {
    iconUrl: '/images/TreasureChest.png',
    title: '3. Claim Daily Rewards',
    content: 'Rewards are credited after trades close and claimable daily at 0:00 UTC.'
  },
  {
    iconUrl: '/images/MedalMilitary.png',
    title: '4. Referral Tier System',
    content: 'Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days.'
  }
];

function StepList({}: Props) {
  return (
    <div className='grid grid-cols-1 gap-4 tablet:grid-cols-2 laptop:grid-cols-2 extraLarge:grid-cols-4'>
      {steps.map((step, index) => (
        <StepItem key={index} step={step} />
      ))}
    </div>
  );
}

export default StepList;
