import { effect, signal } from 'compostate';
import { createEffect, createSignal } from 'solid-js';
import createTemplate from './template';

const [a, setA] = signal({});
const [b, setB] = createSignal({});

for (let i = 0; i < 1000; i += 1) {
  effect(a);
  createEffect(b);
}

export default async function signalWrite1000Effects() {
  await createTemplate({
    name: 'signal-write-1000-effects',
    operations: [
      {
        name: 'compostate',
        call() {
          setA({});
        },
      },
      {
        name: 'solid-js',
        call() {
          setB({});
        },
      },
    ],
  });
}
