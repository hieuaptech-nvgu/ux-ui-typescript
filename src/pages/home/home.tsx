import Callout from '../../components/ui/Callout/Callout'
import { CALLOUT_MOCKS } from 'data/callouts'

export default function HomePage() {
  return (
    <section style={{ maxWidth: 720, margin: '0 auto' }}>
      {CALLOUT_MOCKS.map((item) => (
        <Callout key={item.id} variant={item.variant} title={item.title}>
          {item.content}
        </Callout>
      ))}
    </section>
  )
}
