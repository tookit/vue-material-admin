<template>
  <v-card tile>
    <v-card-text class="pa-0">
      <v-row>
        <v-col cols="6">
          <div class="layout column ma-0 justify-center align-center">
            <v-icon size="56px" :color="color">{{ icon }}</v-icon>
          </div>
        </v-col>
        <v-col cols="6" :class="color">
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
