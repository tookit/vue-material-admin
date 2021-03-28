<template>
  <div class="messaging_item" :class="rowReverse">
    <div class="messaging_item__avatar">
      <c-avatar :size="36" :username="username" status="online" />
    </div>
    <div class="messaging_item__body">
      <div class="pa-2">
        {{ text }}
      </div>
      <div class="caption px-2 text--secondary">
        {{ createdAt | formateDate }}
      </div>
    </div>
  </div>
</template>

<script>
import CAvatar from '@/components/avatar/CAvatar'
import { format } from 'date-fns'
import { mapGetters } from 'vuex'
export default {
  components: {
    CAvatar,
  },
  filters: {
    formateDate(val) {
      return format(val, 'yyyy-MM-dd H:mm:s')
    },
  },
  props: {
    username: [Number, String],
    status: [Number, String],
    text: [String],
    createdAt: [String, Number],
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getAvatar', 'getUsername', 'getClientId', 'getStatusByName']),
    isMyOwn() {
      return this.username === this.getUsername
    },
    rowReverse() {
      return {
        'flex-row-reverse': !this.isMyOwn,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.messaging_item
  display: flex
  margin-top: 25px
  &__avatar
    margin: 0 25px
  &__body
    // flex: 1 1 auto
    background: #eee
</style>
