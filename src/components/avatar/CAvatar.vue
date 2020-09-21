<template>
  <figure class="c-avatar">
    <slot name="top"></slot>
    <img
      v-if="src"
      class="c-avatar__image"
      :style="imgStyles"
      :src="src"
      alt=""
    />
    <div v-else class="c-avatar__inital" :style="charStyles">
      {{ username.charAt(0).toUpperCase() }}
    </div>
    <span v-if="showUnread" :class="alertClasses" :style="alertIndicatorStyles">
      <span v-show="unread > 0">{{ unread }}</span>
    </span>
    <v-icon v-if="icon" size="18" class="c-avatar__icon">{{ icon }}</v-icon>
    <span v-else-if="status" :class="statusClasses" :style="indicatorStyles">
    </span>
  </figure>
</template>

<script>
import colors from 'vuetify/es5/util/colors'
import { convertToUnit } from 'vuetify/lib/util/helpers'
export default {
  name: 'CAvatar',
  props: {
    src: {
      type: [String, null]
    },
    size: {
      type: [Number, String],
      default: 48
    },
    status: {
      type: String
    },
    icon: {
      type: String
    },
    username: {
      type: String,
      default: ''
    },
    publicId: {
      type: [String, Number]
    },
    unread: Number,
    online: Boolean
  },

  data() {
    return {}
  },

  computed: {
    showUnread() {
      return this.unread > 0 && !this.$route.path.includes(this.publicId)
    },

    imgStyles() {
      return {
        height: convertToUnit(this.size),

        minWidth: convertToUnit(this.size),

        width: convertToUnit(this.size)
      }
    },

    charStyles() {
      const temp = Object.keys(colors)

      const key = temp[Math.floor(Math.random() * temp.length)]

      const color = colors[key].base

      return {
        height: convertToUnit(this.size),
        minWidth: convertToUnit(this.size),
        width: convertToUnit(this.size),
        'background-color': color
      }
    },

    indicatorStyles() {
      const size = this.size / 3
      return {
        height: convertToUnit(size),
        minWidth: convertToUnit(size),
        width: convertToUnit(size)
      }
    },

    alertIndicatorStyles() {
      const size = this.size / 2
      return {
        height: convertToUnit(size),
        minWidth: convertToUnit(size)
      }
    },

    alertClasses() {
      return ['c-avatar__alert', 'alert']
    },
    statusClasses() {
      return ['c-avatar__status', this.status]
    }
  },

  watch: {},
  methods: {},
  created() {
    if (window._AVATAR === undefined) {
      window._AVATAR = this
    }
  }
}
</script>
<style lang="scss" scoped>
.c-avatar {
  position: relative;
  display: inline-flex;
  &__image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100% !important;
  }
  &__inital {
    width: 100px;
    height: 100px;
    object-fit: cover;
    display: inline-flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 100%;
  }
  &__icon {
    position: absolute !important;
    bottom: 2%;
    right: 2%;
    border-radius: 100%;
  }
  &__status {
    border: 2px solid var(--v-secondary-base);
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 100%;
  }
  &__status.online {
    background: #4caf50;
  }

  &__alert {
    position: absolute;
    top: 2%;
    left: 2%;
    border-radius: 100%;
    height: 17px !important;
    min-width: 17px !important;
  }
  &__alert.alert {
    background: #f44336 !important;
    color: #fff;
    font-size: 12px;
  }
  &__status.idle {
    background: #f5a532;
  }
  &__status.busy {
    background: #f44336;
  }
  &__status.offline {
    background: #757f8d;
  }
}
</style>
