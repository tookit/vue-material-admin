import type { recentTrans, productPerformanceType } from '@/types/dashboard/index';

/*--Recent Transaction--*/
const recentTransaction: recentTrans[] = [
  {
    title: '09:30 am',
    subtitle: 'Payment received from John Doe of $385.90',
    textcolor: 'primary',
    boldtext: false,
    line: true,
    link: '',
    url: ''
  },
  {
    title: '10:00 am',
    subtitle: 'New sale recorded',
    textcolor: 'secondary',
    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: ''
  },
  {
    title: '12:00 am',
    subtitle: 'Payment was made of $64.95 to Michael',
    textcolor: 'success',
    boldtext: false,
    line: true,
    link: '',
    url: ''
  },
  {
    title: '09:30 am',
    subtitle: 'New sale recorded',
    textcolor: 'warning',
    boldtext: true,
    line: true,
    link: '#ML-3467',
    url: ''
  },
  {
    title: '09:30 am',
    subtitle: 'New arrival recorded',
    textcolor: 'error',
    boldtext: true,
    line: true,
    link: '',
    url: ''
  },
  {
    title: '12:00 am',
    subtitle: 'Payment Received',
    textcolor: 'success',
    boldtext: false,
    line: false,
    link: '',
    url: ''
  }
];

/*Basic Table 1*/
const productPerformance: productPerformanceType[] = [
  {
    id: 1,
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    status: 'Low',
    statuscolor: 'primary',
    budget: '$3.9'
  },
  {
    id: 2,
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    status: 'Medium',
    statuscolor: 'secondary',
    budget: '$24.5k'
  },
  {
    id: 3,
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    status: 'High',
    statuscolor: 'error',
    budget: '$12.8k'
  },
  {
    id: 4,
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    status: 'Critical',
    statuscolor: 'success',
    budget: '$2.4k'
  }
];

export { recentTransaction, productPerformance };
