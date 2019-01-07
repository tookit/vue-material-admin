<template>
<div id="typography-page">
  <v-container fluid grid-list-lg>
    <v-card>
      <v-toolbar card prominent>
        <v-toolbar-title class="body-2 grey--text">Typography</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>      
      <v-card-text>
        <div class="component-example">
          <div class="component-example__container">
            <dl class="headings">
                <dd>
                    <div class="display-4 grey--text text--darken-1">Light 112sp</div>
                    <strong>.display-4</strong>
                    <span>font-weight 300</span>
                </dd>
                <dd>
                    <div class="display-3 grey--text text--darken-1">Regular 56sp</div>
                    <strong>.display-3</strong
                    ><span>font-weight 400</span>
                </dd>
                <dd>
                    <div class="display-2 grey--text text--darken-1">Regular 45sp</div>
                    <strong>.display-2</strong>
                    <span>font-weight 400</span>
                </dd>
                <dd>
                    <div class="display-1 grey--text text--darken-1">Regular 34sp</div>
                    <strong>.display-1</strong>
                    <span>font-weight 400</span>
                </dd>
                <dd>
                    <div class="headline grey--text text--darken-1">Regular 24sp</div>
                    <strong>.headline</strong><span>font-weight 400</span>
                </dd>
                <dd>
                    <div class="title grey--text text--darken-1">Medium 20sp</div>
                    <strong>.title</strong><span>font-weight 500</span>
                </dd>
                <dd>
                    <div class="subheading grey--text text--darken-1">Regular 16sp</div>
                    <strong>.subheading</strong><span>font-weight 400</span>
                </dd>
                <dd>
                    <div class="body-2 grey--text text--darken-1">Medium 14sp</div>
                    <strong>.body-2</strong><span>font-weight 500</span>
                </dd>
                <dd>
                    <div class="body-1 grey--text text--darken-1">Regular 14sp</div>
                    <strong>.body-1</strong><span>font-weight 400</span>
                </dd>
                <dd>
                  <div class="caption grey--text text--darken-1">Regular 12sp</div>
                  <strong>.caption</strong><span>font-weight 400</span>
                </dd>
            </dl>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</div>

</template>

<script>
export default {
  components: {},
  data () {
    return {

    };
  }
};
</script>

<style lang="stylus">
  #typography-page
    .component-example__container
      > div, dl
        width: 100%
        &:after
          content:""
          display: table
          clear: both

      .headings
        dt, dd
          float: left

        dd
          margin: 0 0 2rem
          clear: both

          > div
            margin-bottom: 16px

          strong
            margin-right: 16px
</style>