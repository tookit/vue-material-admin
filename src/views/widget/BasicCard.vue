<script setup lang="ts">
import { reactive } from 'vue';
import { IUser } from '@/api/type';
import VerticalProfileCard from '@/components/card/VerticalProfileCard.vue';
const user = reactive<IUser>({
  id: 0,
  username: 'tookit',
  company: 'ESG',
  country: 'China',
  contact: '18682157492',
  currentPlan: 'free',
  email: 'wangqiangshen@gmail.com',
  avatar: '/assets/images/avatars/avatar-1.png',
  billing: '',
  role: 'admin',
  status: 'active'
});
</script>

<template>
  <VRow>
    <VCol lg="4">
      <VerticalProfileCard :user="user" />
    </VCol>
    <VCol lg="4">
      <VCard>
        <VImg class="align-end text-white" height="300" src="/assets/images/bg/bg_mac.png" cover>
          <VCardTitle>Top 10 Australian beaches</VCardTitle>
        </VImg>
        <VCardSubtitle class="pt-4"> Number 10 </VCardSubtitle>
        <VCardText>
          <div>Whitehaven Beach</div>
          <div>Whitsunday Island, Whitsunday Islands</div>
        </VCardText>

        <VCardActions>
          <VBtn> Share </VBtn>
          <VBtn> Explore </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
    <VCol lg="4">
      <VCard class="mx-auto" max-width="374">
        <VImg cover height="250" src="/assets/images/bg/cooking.png"></VImg>
        <VCardItem>
          <VCardTitle>Cafe Badilico</VCardTitle>
          <VCardSubtitle>
            <span class="me-1">Local Favorite</span>
            <VIcon color="error" icon="mdi-fire-circle" size="small"></VIcon>
          </VCardSubtitle>
        </VCardItem>
        <VCardText>
          <div>
            <VRating :model-value="4.5" color="amber" density="compact" half-increments readonly size="small" />
            <div class="text-grey ms-4">4.5 (413)</div>
          </div>
          <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>
          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </VCardText>
        <VDivider class="mx-4 mb-1" />
        <VCardTitle>Tonight's availability</VCardTitle>
        <div class="px-4">
          <VChipGroup>
            <VChip>5:30PM</VChip>

            <VChip>7:30PM</VChip>

            <VChip>8:00PM</VChip>

            <VChip>9:00PM</VChip>
          </VChipGroup>
        </div>
        <VCardActions>
          <VBtn variant="text"> Reserve </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>
