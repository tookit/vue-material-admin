<script lang="ts" setup>
declare const block: readonly ['top', 'bottom'];
declare const inline: readonly ['start', 'end', 'left', 'right'];
type Tblock = (typeof block)[number];
type Tinline = (typeof inline)[number];
type Anchor =
  | Tblock
  | Tinline
  | 'center'
  | 'center center'
  | `${Tblock} ${Tinline | 'center'}`
  | `${Tinline} ${Tblock | 'center'}`;

interface Props {
  notifications: Notification[];
  badgeProps?: unknown;
  location?: Anchor;
}
type Notification = {
  title: string;
  subtitle: string;
  time: string;
  color?: string;
} & (
  | { img: string; text?: never; icon?: never }
  | { img?: never; text: string; icon?: never }
  | { img?: never; text?: never; icon: string }
);

const props = withDefaults(defineProps<Props>(), {
  location: 'bottom end',
  badgeProps: undefined
});

defineEmits<{
  (e: 'click:readAllNotifications'): void;
}>();
</script>

<template>
  <VBadge :model-value="!!props.badgeProps">
    <VBtn icon variant="text" color="default" size="small" class="mr-3">
      <VBadge :model-value="!!props.notifications.length" color="error" content="4">
        <VIcon icon="mdi-bell-outline" size="24" />
      </VBadge>

      <VMenu activator="parent" width="380px" :location="props.location" offset="14px">
        <VList class="py-0">
          <!-- 👉 Header -->
          <VListItem title="Notifications" class="notification-section" height="48px">
            <template #append>
              <VChip v-if="props.notifications.length" color="primary" size="small">
                {{ props.notifications.length }} New
              </VChip>
            </template>
          </VListItem>

          <VDivider />
          <!-- 👉 Notifications list -->
          <template v-for="notification in props.notifications" :key="notification.title">
            <VListItem :title="notification.title" :subtitle="notification.subtitle" link lines="one" min-height="66px">
              <!-- Slot: Prepend -->
              <!-- Handles Avatar: Image, Icon, Text -->
              <template #prepend>
                <VListItemAction start>
                  <VAvatar
                    :color="notification.color || 'primary'"
                    :image="notification.img || undefined"
                    :icon="notification.icon || undefined"
                    size="40"
                    variant="tonal"
                  >
                    <span v-if="notification.text">{{ notification.text }}</span>
                  </VAvatar>
                </VListItemAction>
              </template>
              <!-- Slot: Append -->
              <template #append>
                <small class="whitespace-no-wrap text-medium-emphasis">{{ notification.time }}</small>
              </template>
            </VListItem>
            <VDivider />
          </template>
          <!-- 👉 Footer -->
          <VListItem class="notification-section">
            <VBtn block @click="$emit('click:readAllNotifications')"> READ ALL NOTIFICATIONS </VBtn>
          </VListItem>
        </VList>
      </VMenu>
    </VBtn>
  </VBadge>
</template>

<style lang="scss">
.notification-section {
  padding: 14px !important;
}
</style>
