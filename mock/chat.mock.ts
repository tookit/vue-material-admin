import { IChatContact } from '../src/api/type';
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

let contacts = [
  {
    id: 1,
    fullName: 'Gavin Griffith',
    role: 'Frontend Developer',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '',
    status: 'offline'
  },
  {
    id: 2,
    fullName: 'Harriet McBride',
    role: 'UI/UX Designer',
    about:
      'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: '',
    status: 'busy'
  },
  {
    id: 3,
    fullName: 'Danny Conner',
    role: 'Town planner',
    about:
      'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
    avatar: '',
    status: 'busy'
  },
  {
    id: 4,
    fullName: 'Janie West',
    role: 'Data scientist',
    about:
      'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
    avatar: '',
    status: 'online'
  },
  {
    id: 5,
    fullName: 'Bryan Murray',
    role: 'Dietitian',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '',
    status: 'busy'
  },
  {
    id: 6,
    fullName: 'Albert Underwood',
    role: 'Marketing executive',
    about:
      'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: '',
    status: 'online'
  },
  {
    id: 7,
    fullName: 'Adele Ross',
    role: 'Special educational needs teacher',
    about:
      'Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.',
    avatar: '',
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
    avatar: '',
    status: 'offline'
  },
  {
    id: 10,
    fullName: 'Blake Carter',
    role: 'Building surveyor',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: '',
    status: 'away'
  }
];
