<script lang="ts" setup>
import { ref } from 'vue';
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'vue-prism-component';

interface Props {
  title: string;
  code: CodeProp;
  codeLanguage?: string;
  noPadding?: boolean;
}

interface CodeProp {
  ts: string;
  js: string;
}

const props = withDefaults(defineProps<Props>(), {
  codeLanguage: 'markup',
  noPadding: true
});

const preferredCodeLanguage = ref('ts');
const isCodeShown = ref(false);
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>{{ props.title }}</VCardTitle>
      <template #append>
        <VBtn
          icon
          size="x-small"
          :color="isCodeShown ? 'primary' : 'default'"
          variant="text"
          :class="isCodeShown ? '' : 'text-disabled'"
          @click="isCodeShown = !isCodeShown"
        >
          <VIcon size="20" icon="mdi-bell" />
        </VBtn>
      </template>
    </VCardItem>
    <slot v-if="noPadding" />
    <VCardText v-else>
      <slot />
    </VCardText>
    <VExpandTransition>
      <div v-show="isCodeShown">
        <VDivider />
        <VCardText class="d-flex gap-y-3 flex-column">
          <div class="d-flex justify-end">
            <VBtnToggle v-model="preferredCodeLanguage" mandatory variant="outlined" density="compact">
              <VBtn size="x-small" value="ts" :color="preferredCodeLanguage === 'ts' ? 'primary' : 'default'">
                <VIcon
                  size="x-large"
                  icon="custom-typescript"
                  :color="preferredCodeLanguage === 'ts' ? 'primary' : 'secondary'"
                />
              </VBtn>
              <VBtn size="x-small" value="js" :color="preferredCodeLanguage === 'js' ? 'primary' : 'default'">
                <VIcon
                  size="x-large"
                  icon="custom-javascript"
                  :color="preferredCodeLanguage === 'js' ? 'primary' : 'secondary'"
                />
              </VBtn>
            </VBtnToggle>
          </div>

          <Prism :key="props.code[preferredCodeLanguage]" :language="props.codeLanguage">
            {{ props.code[preferredCodeLanguage] }}
          </Prism>
        </VCardText>
      </div>
    </VExpandTransition>
  </VCard>
</template>

<style lang="scss">
// @use '@/styles/variables/_vuetify.scss';

// :not(pre) > code[class*='language-'],
// pre[class*='language-'] {
//   border-radius: vuetify.$card-border-radius;
// }
</style>
