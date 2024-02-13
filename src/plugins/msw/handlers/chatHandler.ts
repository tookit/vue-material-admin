import { http, HttpResponse } from 'msw';

import { IChat } from '@/api/type';
import { findUserById } from './userHandler';
import { users } from './db';

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2);

const chats: IChat[] = [
  {
    id: 1,
    userId: 2,
    unseenMsgs: 0,
    messages: [
      {
        message: 'Hi',
        time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
        senderId: 2,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Hello. How can I help You?',
        time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Can I get details of my last transaction I made last month? 🤔',
        time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
        senderId: 2,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'We need to check if we can provide you such information.',
        time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'I will inform you as I get update on this.',
        time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
        senderId: 2,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'If it takes long you can mail me at my mail address.',
        time: String(dayBeforePreviousDay),
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: false,
          isSeen: false
        }
      }
    ]
  },
  {
    id: 2,
    userId: 11,
    unseenMsgs: 1,
    messages: [
      {
        message: "How can we help? We're here for you!",
        time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
        senderId: 11,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
        time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'It should use nice Framework.',
        time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Absolutely!',
        time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
        senderId: 11,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Our admin is the responsive admin template.!',
        time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
        senderId: 11,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Looks clean and fresh UI. 😍',
        time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: "It's perfect for my next project.",
        time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'How can I purchase it?',
        time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'Thanks, From our official site  😇',
        time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
        senderId: 11,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      },
      {
        message: 'I will purchase it for sure. 👍',
        time: String(previousDay),
        senderId: 1,
        feedback: {
          isSent: true,
          isDelivered: true,
          isSeen: true
        }
      }
    ]
  }
];

const chatWithUsers = chats.map((item) => {
  item.user = findUserById(item.userId);
  item.messages.map((msg) => {
    msg.sender = findUserById(msg.senderId);
  });
  return item;
});

export const handlerChat = [
  http.get('/api/chat', async () => {
    const data = {
      chats: chatWithUsers,
      contacts: users
    };
    return HttpResponse.json(data, { status: 200 });
  })
];
