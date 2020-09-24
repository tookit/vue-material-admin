<template>
  <div class="page-user__item">
    <v-container>
      <v-row>
        <v-col>
          <user-form :user-id="id" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import UserForm from '@/components/form/UserForm'
export default {
  components: {
    UserForm
  },
  props: {
    id: [Number, String]
  }
}
</script>
