<template>
  <v-container>
    <v-row>
      <template v-for="dir in dirs">
        <v-col :key="dir">
          <v-card>
            <v-card-text>
              <div class="d-flex flex-column align-center">
                <v-icon>mdi-folder</v-icon>

                <span>{{ dir }}</span>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dir: []
    }
  }
}
</script>

<style></style>
