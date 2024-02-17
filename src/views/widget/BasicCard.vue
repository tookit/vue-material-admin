<script setup lang="ts">
import { reactive, ref } from 'vue';
import { IUser } from '@/api/type';
import VerticalProfileCard from '@/components/card/VerticalProfileCard.vue';
const user = reactive<IUser>({
  id: 0,
  username: 'tookit',
  company: 'ESG',
  job: 'Developer',
  country: 'China',
  city: '',
  phone: '18682157492',
  email: 'wangqiangshen@gmail.com',
  avatar: '/assets/images/avatars/avatar-1.png',
  role: 'admin',
  status: 'active'
});
const solidCardData = [
  {
    cardBg: '#16B1FF',
    title: 'Twitter Card',
    icon: 'tabler-brand-twitter',
    text: '"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."',
    avatarImg: '/assets/images/users/avatar-1.jpg',
    avatarName: 'Michael Wang',
    likes: '1.2k',
    share: '80'
  },
  {
    cardBg: '#3B5998',
    title: 'Facebook Card',
    icon: 'tabler-brand-facebook',
    text: "You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an.",
    avatarImg: '/assets/images/users/2.jpg',
    avatarName: 'John Doe',
    likes: '3.2k',
    share: '49'
  },
  {
    cardBg: '#007BB6',
    title: 'LinkedIn Card',
    icon: 'tabler-brand-linkedin',
    text: 'With the Internet spreading like wildfire and reaching every part of our daily life, more and more traffic is directed.',
    avatarImg: '/assets/images/users/3.jpg',
    avatarName: 'Anne Burke1',
    likes: '1.2k',
    share: '80'
  }
];
const show = ref(true);
</script>

<template>
  <VRow>
    <VCol lg="12">
      <VListSubheader>Vertical Card </VListSubheader>
    </VCol>
    <VCol lg="4">
      <VerticalProfileCard :user="user" />
    </VCol>
    <VCol lg="4">
      <VCard class="mx-auto">
        <VImg src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover />
        <VCardTitle> Top western road trips </VCardTitle>
        <VCardSubtitle> 1,000 miles of wonder </VCardSubtitle>
        <VCardActions>
          <VBtn color="orange-lighten-2" variant="text"> Explore </VBtn>
          <VSpacer />
          <VBtn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></VBtn>
        </VCardActions>
        <VExpandTransition>
          <div v-show="show">
            <VDivider />
            <VCardText>
              <div>
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
                you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way
                to escape.
              </div>
              <div class="mt-3">
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey,
                you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way
                to escape.
              </div>
            </VCardText>
          </div>
        </VExpandTransition>
      </VCard>
    </VCol>
    <VCol lg="4">
      <VCard>
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
        <VCardText>
          <VCardSubtitle class="px-0">Tonight's availability</VCardSubtitle>
          <VChipGroup>
            <VChip prepend-icon="mdi-clock">5:30PM</VChip>
            <VChip prepend-icon="mdi-clock">7:30PM</VChip>
            <VChip prepend-icon="mdi-clock">8:00PM</VChip>
            <VChip prepend-icon="mdi-clock">9:00PM</VChip>
          </VChipGroup>
        </VCardText>
        <VCardActions>
          <VBtn variant="text"> Reserve </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
    <VCol lg="12">
      <VListSubheader>Horizontal Card </VListSubheader>
    </VCol>
    <VCol sm="6" cols="12">
      <VCard>
        <div class="d-flex justify-space-between flex-wrap flex-md-nowrap flex-column flex-md-row">
          <div class="ma-auto pa-5">
            <VImg width="137" height="176" src="/assets/images/products/iphon12.png" />
          </div>
          <VDivider :vertical="$vuetify.display.mdAndUp" />
          <div>
            <VCardItem>
              <VCardTitle>Apple iPhone 12 Pro</VCardTitle>
            </VCardItem>
            <VCardText>
              Apple iPhone 12 Pro smartphone. Announced Sep 2021. Features 5.8″ display Apple A13 Bionic
            </VCardText>
            <VCardText class="text-subtitle-1">
              <span>Price :</span> <span class="font-weight-medium">$899</span>
            </VCardText>
            <VCardActions class="justify-space-between">
              <VBtn>
                <VIcon icon="mdi-cart" />
                <span class="ms-2">Add to cart</span>
              </VBtn>
              <VBtn color="secondary" icon="mdi-share-variant" />
            </VCardActions>
          </div>
        </div>
      </VCard>
    </VCol>
    <!-- 👉 Stump town Roasters. -->
    <VCol sm="6" cols="12">
      <VCard>
        <div class="d-flex flex-column-reverse flex-md-row">
          <div>
            <VCardItem>
              <VCardTitle>Stumptown Roasters</VCardTitle>
            </VCardItem>
            <VCardText class="d-flex align-center flex-wrap text-body-1">
              <VRating :model-value="5" readonly class="me-3" density="compact" />
              <span>5 Star | 98 reviews</span>
            </VCardText>
            <VCardText>
              Before there was a United States of America, there were coffee houses, because how are you supposed to
              build.
            </VCardText>
            <VCardActions>
              <VBtn>Location</VBtn>
              <VBtn>Reviews</VBtn>
            </VCardActions>
          </div>

          <div class="ma-auto pa-5">
            <VImg :width="176" src="/assets/images/products/4.jpg" class="rounded" />
          </div>
        </div>
      </VCard>
    </VCol>
    <VCol lg="12">
      <VListSubheader>Social Card </VListSubheader>
    </VCol>
    <VCol v-for="data in solidCardData" :key="data.icon" cols="12" md="6" lg="4">
      <VCard :color="data.cardBg">
        <VCardItem>
          <template #prepend>
            <VIcon size="1.9rem" color="white" :icon="data.icon" />
          </template>
          <VCardTitle class="text-white">
            {{ data.title }}
          </VCardTitle>
        </VCardItem>
        <VCardText>
          <p class="clamp-text text-white mb-0">
            {{ data.text }}
          </p>
        </VCardText>
        <VCardText class="d-flex justify-space-between align-center flex-wrap">
          <div class="text-no-wrap">
            <VAvatar size="34" :image="data.avatarImg" />
            <span class="text-white ms-2">{{ data.avatarName }}</span>
          </div>
          <div class="d-flex align-center">
            <VBtn icon="mdi-heart" color="transparent" class="me-1" size="sm" density="compact" variant="plain" />
            <span class="text-subtitle-2 text-white me-4">{{ data.likes }}</span>
            <VBtn
              icon="mdi-share-variant"
              color="transparent"
              class="me-1"
              size="sm"
              density="compact"
              variant="plain"
            />
            <span class="text-subtitle-2 text-white mt-1">{{ data.share }}</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
