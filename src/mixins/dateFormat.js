import { formatDate } from '@/util/index'

export default {
  methods: {
    formatDate(val) {
      return new Date(val).toDateString()
    }
  }
}
