<template>
  <v-card tile>
    <v-card-text class="pa-0">
      <v-row no-gutters>
        <v-col class="pa-3">
          <div class="layout justify-center align-center">
            <v-icon size="56px" :color="color">{{ icon }}</v-icon>
          </div>
        </v-col>
        <v-col class="pa-3" :class="color">
          <div class="white--text">{{ title }}</div>
          <span class="white--text">{{ subTitle }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    subTitle: String,
    color: String
  }
}
</script>
