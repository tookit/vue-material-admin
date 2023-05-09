<script setup lang="ts">
import { productsCard } from '@/data/dashboard/dashboardData';
</script>
<template>
  <VRow>
    <VCol cols="12" lg="3" sm="6" v-for="card in productsCard" :key="card.title">
      <VCard elevation="10" rounded="md">
        <RouterLink :to="card.link">
          <VImg :src="card.photo" height="100%" class="rounded-t-md" />
        </RouterLink>
        <div class="d-flex justify-end mr-4 mt-n5">
          <VBtn size="40" icon class="bg-primary d-flex">
            <VAvatar size="30" class="text-white">
              <BasketIcon size="15" />
            </VAvatar>
            <VTooltip activator="parent" location="bottom">Add To Cart </VTooltip>
          </VBtn>
        </div>
        <VCardItem class="pt-0">
          <h6 class="text-h6" v-text="card.title"></h6>
          <div class="d-flex align-center justify-space-between mt-1">
            <div>
              <span class="text-h6" v-text="'$' + card.price"></span>
              <span
                class="text-body-1 ml-2 text-medium-emphasis text-decoration-line-through"
                v-text="'$' + card.salesPrice"
              ></span>
            </div>
            <VRating density="compact" color="warning" size="small" v-model="card.rating" readonly></VRating>
          </div>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>
</template>
