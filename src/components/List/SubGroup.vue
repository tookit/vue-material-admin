<template>
  <list-group :item="item" sub-group />
</template>

<script>
import ListGroup from './Group'
export default {
  components: {
    ListGroup,
  },
  props: {
    item: {
      type: Object,
      default: () => ({
        text: '',
        icon: false,
      }),
    },
  },
}
</script>
