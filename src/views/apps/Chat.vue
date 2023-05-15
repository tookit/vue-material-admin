<template>
  <VLayout class="chat">
    <VNavigationDrawer :width="360" absolute touchless location="start">
      <VToolbar>
        <VTextField class="mx-5" append-inner-icon="mdi-magnify"></VTextField>
      </VToolbar>
      <VList>
        <VListSubheader>Recent</VListSubheader>
      </VList>
    </VNavigationDrawer>

    <VMain class="chat-main">
      <VCard>
        <VToolbar class="px-5">
          <!-- avatar -->
          <div class="d-flex align-center cursor-pointer">
            <VBadge dot location="bottom right" offset-x="3" offset-y="0" bordered>
              <VAvatar size="38" class="cursor-pointer">
                <VImg src="/assets/images/users/user.jpg" />
              </VAvatar>
            </VBadge>
            <div class="flex-grow-1 ms-4 overflow-hidden">
              <p class="text-15">Michael</p>
              <p class="text-truncate text-14 mb-0 text-disabled">Developer</p>
            </div>
          </div>
          <VSpacer />
          <VBtn icon="mdi-video-outline"></VBtn>
          <VBtn icon="mdi-phone-outline"></VBtn>
          <VBtn icon="mdi-magnify"></VBtn>
        </VToolbar>
      </VCard>
    </VMain>
  </VLayout>
</template>
<style lang="scss">
.chat {
  &-main {
    min-height: 100vh;
  }
}
</style>
