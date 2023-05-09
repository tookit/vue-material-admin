<script lang="ts" setup>
import { ref, reactive, watchEffect } from 'vue';
import { VDataTable } from 'vuetify/lib/labs/VDataTable/index';
import { fetchUsers } from '@/api/user';
import { useUserStore } from '@/store/user';
import { IUser } from '@/api/type';
import UserForm from '@/components/forms/UserForm.vue';
const searchQuery = ref('');
const selectedRole = ref();
const selectedStatus = ref();
const rowPerPage = ref(10);
const currentPage = ref(1);
const totalPage = ref(1);
const totalUsers = ref(0);
const showFilter = ref(true);
const showDialog = ref(false);
const users = ref<IUser[]>([]);
const userStore = useUserStore();
const filters = reactive({
  role: '',
  status: ''
});
const selectedUser = reactive<IUser>({
  id: 0,
  username: '',
  email: '',
  avatar: '',
  role: '',
  status: ''
});
// 👉 search filters
const roles = userStore.getRoles;
const status = userStore.getStatusOptions;
const headers = reactive([
  { title: 'Avatar', key: 'avatar' },
  { title: 'Username', key: 'username' },
  { title: 'Role', key: 'role' },
  { title: 'Email', key: 'email' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'action' }
]);

const loading = ref(true);
const loadData = async (params) => {
  users.value = [];
  loading.value = true;
  const { data } = await fetchUsers(params);
  loading.value = false;
  users.value = data;
};
watchEffect(loadData);
const handleApplyFilter = () => {
  loadData(filters);
};
const handleRefreshItem = () => {
  loadData(filters);
};
const handleCreateItem = () => {
  showDialog.value = true;
};
const handleEditItem = (row) => {
  Object.assign(selectedUser, row);
  showDialog.value = true;
};
const handleClear = () => {
  filters.role = '';
  filters.status = '';
};
const handleResetFilter = () => {
  filters.role = '';
  filters.status = '';
  loadData({});
};
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard :loading="loading">
          <VCardItem class="py-0">
            <VToolbar flat style="background-color: #fff">
              <VTextField
                :prepend-icon="!showFilter ? 'mdi-filter-variant-plus' : 'mdi-filter-variant'"
                append-icon="mdi-magnify"
                placeholder="Type something"
                hide-details
                clearable
                variant="plain"
                class="search"
                @keyup.enter="handleApplyFilter"
                @click:append="handleApplyFilter"
                @click:prepend="showFilter = !showFilter"
                @click:clear="handleClear"
              />
              <VBtn icon @click="handleRefreshItem">
                <VIcon>mdi-refresh</VIcon>
              </VBtn>
              <VBtn icon @click="handleCreateItem">
                <VIcon>mdi-plus</VIcon>
              </VBtn>
            </VToolbar>
          </VCardItem>
          <VSheet color="#FBFBFB" v-show="showFilter">
            <VCardText>
              <VRow>
                <VCol :cols="4">
                  <VAutocomplete v-model="filters.role" :items="roles" label="Role" />
                </VCol>
                <VCol :cols="4">
                  <VAutocomplete v-model="filters.status" :items="status" label="Status" />
                </VCol>
              </VRow>
            </VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn @click="handleResetFilter">Reset</VBtn>
              <VBtn color="primary" variant="outlined" @click="handleApplyFilter">Apply</VBtn>
            </VCardActions>
          </VSheet>
          <VCardText class="pa-0 pb-5">
            <VDivider />
            <VDataTable :headers="headers" :items="users" hover show-select>
              <template #item.avatar="{ item }">
                <VAvatar>
                  <VImg :src="String(item.columns.avatar)" />
                </VAvatar>
              </template>
              <template #item.action="{ item }">
                <VBtn variant="plain" density="compact" icon="mdi-pencil-outline" @click="handleEditItem(item.columns)">
                </VBtn>
                <VBtn variant="plain" density="compact" icon="mdi-trash-can-outline"> </VBtn>
                <VBtn variant="plain" density="compact" icon="mdi-dots-vertical"> </VBtn>
              </template>
            </VDataTable>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
    <VDialog v-model="showDialog" width="auto" eager>
      <UserForm :user="selectedUser" @form:cancel="showDialog = false" />
    </VDialog>
  </section>
</template>

<style lang="scss">
.search {
  input {
    padding-top: 10px;
  }
}
</style>
