import { setupWorker } from 'msw/browser';
import { handlerAuth } from '@/plugins/msw/handlers/auth';
import { handlerUser } from '@/plugins/msw/handlers/user';
import { handlerEvent } from '@/plugins/msw/handlers/event';

const worker = setupWorker(...handlerAuth, ...handlerUser, ...handlerEvent);

export default function () {
  const workerUrl = `${import.meta.env.BASE_URL ?? '/'}mockServiceWorker.js`;

  worker.start({
    serviceWorker: {
      url: workerUrl
    },
    onUnhandledRequest: 'bypass'
  });
}
