<script lang="ts" setup>
import Notification from '@/components/Notification.vue';
// Images
import avatar3 from '@/assets/images/avatars/avatar-3.png';
import avatar4 from '@/assets/images/avatars/avatar-4.png';
import avatar5 from '@/assets/images/avatars/avatar-5.png';
import paypal from '@/assets/svg/paypal.svg';

const notifications = [
  {
    img: avatar4,
    title: 'Congratulation Flora! 🎉',
    subtitle: 'Won the monthly best seller badge',
    time: 'Today'
  },
  {
    text: 'Tom Holland',
    title: 'New user registered.',
    subtitle: '5 hours ago',
    time: 'Yesterday'
  },
  {
    img: avatar5,
    title: 'New message received 👋🏻',
    subtitle: 'You have 10 unread messages',
    time: '11 Aug'
  },
  {
    img: paypal,
    title: 'Paypal',
    subtitle: 'Received Payment',
    time: '25 May',
    color: 'error'
  },
  {
    img: avatar3,
    title: 'Received Order 📦',
    subtitle: 'New order received from john',
    time: '19 Mar'
  }
];
</script>

<template>
  <Notification :notifications="notifications" />
</template>
