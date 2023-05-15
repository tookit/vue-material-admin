<template>
  <VSheet elevation="10">
    <VLayout class="chat">
      <VNavigationDrawer :width="360" absolute touchless location="start">
        <VToolbar style="background-color: #fff" flat tag="div">
          <VTextField class="mx-5" append-inner-icon="mdi-magnify"></VTextField>
        </VToolbar>
        <VDivider />
        <VList>
          <VListSubheader>Recent</VListSubheader>
        </VList>
      </VNavigationDrawer>

      <VMain class="chat-main">
        <VSheet>
          <VToolbar class="px-5" style="background-color: #fff" flat tag="div">
            <!-- avatar -->
            <VList class="pa-0">
              <VListItem class="px-0">
                <template v-slot:prepend>
                  <VBadge dot location="bottom right" offset-x="3" offset-y="0" bordered>
                    <VAvatar class="cursor-pointer">
                      <VImg src="/assets/images/users/user.jpg" />
                    </VAvatar>
                  </VBadge>
                </template>
                <VListItemTitle class="ml-3">Lucy</VListItemTitle>
                <VListItemSubtitle class="ml-3">Design</VListItemSubtitle>
              </VListItem>
            </VList>
            <VSpacer />
            <VBtn icon="mdi-video-outline" size="36" density="comfortable"></VBtn>
            <VBtn icon="mdi-phone-outline" size="36" density="comfortable"></VBtn>
            <VBtn icon="mdi-magnify" size="36" density="comfortable"></VBtn>
          </VToolbar>
          <VDivider />
        </VSheet>
      </VMain>
    </VLayout>
  </VSheet>
</template>
<style lang="scss">
.chat {
  &-main {
    min-height: 100vh;
  }
}
</style>
