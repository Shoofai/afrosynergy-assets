
import dynamic from 'next/dynamic'
const IntroductionScheduler = dynamic(() => import('@/components/IntroductionScheduler'), { ssr: false })

export default function IntroPage() {
  return <IntroductionScheduler />
}
