<script setup lang="ts">
interface Props {
  avatar?: string;
  username?: string;
  status?: string;
  size: string | number;
}
const props = withDefaults(defineProps<Props>(), {
  avatar: '',
  username: 'Johh',
  status: 'online'
});

const computeAvatarText = (value) => {
  if (!value) return '';
  const nameArray = value.split(' ');
  return nameArray.map((word) => word.charAt(0).toUpperCase()).join('');
};
</script>
<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="0"
    bordered
    :color="status === 'online' ? 'success' : 'primary'"
  >
    <VAvatar :size="props.size" class="cursor-pointer" :color="avatar ? '' : 'surface-variant'">
      <VImg :src="avatar" v-if="avatar" />
      <span v-else>{{ computeAvatarText(props.username) }}</span>
    </VAvatar>
  </VBadge>
</template>
