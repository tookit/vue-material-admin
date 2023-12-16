import { http, HttpResponse } from 'msw';

import { IChatContact, IChat } from '@/api/type';
import { findUserById } from './user';

const previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
const dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2);
const profileUser = {
  id: 11,
  avatar: '/assets/images/avatars/avatar-1.png',
  fullName: 'John Doe',
  role: 'admin',
  about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie marshmallow.',
  status: 'online',
  settings: {
    isTwoStepAuthVerificationEnabled: true,
    isNotificationsOn: false
  }
};

const contacts: IChatContact[] = [
  {
    id: 1,
    fullName: 'Gavin Griffith',
    role: 'Frontend Developer',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '/assets/images/avatars/avatar-3.png',
    status: 'offline'
  },
  {
    id: 2,
    fullName: 'Harriet McBride',
    role: 'UI/UX Designer',
    about:
      'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: '/assets/images/avatars/avatar-5.png',
    status: 'busy'
  },
  {
    id: 3,
    fullName: 'Danny Conner',
    role: 'Town planner',
    about:
      'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
    avatar: '/assets/images/avatars/avatar-6.png',
    status: 'busy'
  },
  {
    id: 4,
    fullName: 'Janie West',
    role: 'Data scientist',
    about:
      'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
    avatar: '/assets/images/avatars/avatar-6.png',
    status: 'online'
  },
  {
    id: 5,
    fullName: 'Bryan Murray',
    role: 'Dietitian',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '/assets/images/avatars/avatar-6.png',
    status: 'busy'
  },
  {
    id: 6,
    fullName: 'Albert Underwood',
    role: 'Marketing executive',
    about:
      'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: '/assets/images/avatars/avatar-6.png',
    status: 'online'
  },
  {
    id: 7,
    fullName: 'Adele Ross',
    role: 'Special educational needs teacher',
    about:
      'Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.',
    avatar: '/assets/images/avatars/avatar-6.png',
    status: 'online'
  },
  {
    id: 8,
    fullName: 'Mark Berry',
    role: 'Advertising copywriter',
    about:
      'Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.',
    avatar: '',
    status: 'away'
  },
  {
    id: 9,
    fullName: 'Joseph Evans',
    role: 'Designer, television/film set',
    about:
      'Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.',
    avatar: '/assets/images/avatars/avatar-1.png',
    status: 'offline'
  },
  {
    id: 10,
    fullName: 'Blake Carter',
    role: 'Building surveyor',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '/assets/images/avatars/avatar-2.png',
    status: 'away'
  }
];

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

console.log(chatWithUsers);
export const handlerChat = [
  http.get('/api/chat', async () => {
    const data = {
      chats: chatWithUsers,
      contacts,
      profile: profileUser
    };
    return HttpResponse.json(data, { status: 200 });
  })
];
