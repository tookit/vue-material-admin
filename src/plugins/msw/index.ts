import { setupWorker } from 'msw/browser';
import { handlerAuth } from '@/plugins/msw/handlers/authHandler';
import { handlerUser } from '@/plugins/msw/handlers/userHandler';
import { handlerEvent } from '@/plugins/msw/handlers/eventHandler';
import { handlerChat } from './handlers/chatHandler';

const worker = setupWorker(...handlerAuth, ...handlerUser, ...handlerEvent, ...handlerChat);

export default function () {
  const workerUrl = `${import.meta.env.BASE_URL ?? '/'}mockServiceWorker.js`;

  worker.start({
    serviceWorker: {
      url: workerUrl
    },
    onUnhandledRequest: 'bypass'
  });
}
