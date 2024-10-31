import CounterServer from '@/components/counter-server';
import { css } from '../../styled-system/css'

export default function Homepage() {
  return (
    <>
      <div class="hero">
        <h1>
          <span class="h1_addition">Welcome to </span>Almarto Assistant
        </h1>
        <p class="edit-note">✏️ Change this page on </p>
        <code>src/pages/index.tsx</code>
      </div>

      <div class={css({ bg: 'red.400' })}>Check Panda CSS</div>

      <section class="counter-section">
        <h2>Counters</h2>
        <div class="counters">
          <counter-client initialValue={42} />
          <CounterServer initialValue={37} />
        </div>
      </section>
    </>
  );
}
