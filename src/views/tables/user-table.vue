<script lang="ts" setup>
import { ref, reactive, watchEffect, toRaw } from 'vue';
import { VDataTable } from 'vuetify/lib/labs/VDataTable/index';
import { fetchUsers } from '@/api/user';
import { useUserStore } from '@/store/user';
import { User } from '@/api/type';
import UserForm from '@/components/forms/UserForm.vue';
const searchQuery = ref('');
const selectedRole = ref();
const selectedPlan = ref();
const selectedStatus = ref();
const rowPerPage = ref(10);
const currentPage = ref(1);
const totalPage = ref(1);
const totalUsers = ref(0);
const showDialog = ref(false);
const users = ref<User[]>([]);
const userStore = useUserStore();
const selectedUser = reactive<User>({
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
  {
    title: 'ID',
    key: 'id',
    sortable: false
  },
  { title: 'Avatar', key: 'avatar' },
  { title: 'Username', key: 'username' },
  { title: 'Role', key: 'role' },
  { title: 'Email', key: 'email' },
  { title: 'Status', key: 'status' },
  { title: 'Actions', key: 'action' }
]);

const loading = ref(true);
const loadData = async () => {
  users.value = [];
  loading.value = true;
  const { data } = await fetchUsers({});
  loading.value = false;
  users.value = data;
};
watchEffect(loadData);
const showFilter = ref(true);
const handleApplyFilter = () => {
  loadData();
};
const handleRefreshItem = () => {
  loadData();
};
const handleCreateItem = () => {
  showDialog.value = true;
};
const handleEditItem = (row) => {
  Object.assign(selectedUser, row);
  showDialog.value = true;
};
const handleClear = () => {};
const handleResetFilter = () => {};
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard :loading="loading">
          <VCardItem class="py-0">
            <VToolbar flat>
              <VTextField
                :prepend-icon="showFilter ? 'mdi-filter-variant-plus' : 'mdi-filter-variant'"
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
                <v-icon>mdi-refresh</v-icon>
              </VBtn>
              <VBtn icon @click="handleCreateItem">
                <v-icon>mdi-plus</v-icon>
              </VBtn>
            </VToolbar>
          </VCardItem>
          <VSheet color="#FBFBFB">
            <VCardText>
              <VRow>
                <VCol :cols="4">
                  <VAutocomplete :items="roles" label="Role" />
                </VCol>
                <VCol :cols="4">
                  <VAutocomplete :items="status" label="Status" />
                </VCol>
              </VRow>
            </VCardText>
            <VCardActions>
              <VSpacer />
              <VBtn text @click="handleResetFilter">Reset</VBtn>
              <VBtn color="primary" variant="outlined" @click="handleApplyFilter">Apply</VBtn>
            </VCardActions>
          </VSheet>
          <VCardText class="pa-0 pb-5">
            <VDivider />
            <VDataTable :headers="headers" :items="users" :loading="loading" show-select hover>
              <template v-slot:item="{ item }">
                <tr>
                  <td></td>
                  <td>{{ item.columns.id }}</td>
                  <td>
                    <VAvatar>
                      <VImg :src="String(item.columns.avatar)" />
                    </VAvatar>
                  </td>
                  <td>{{ item.columns.username }}</td>
                  <td>{{ item.columns.role }}</td>
                  <td>{{ item.columns.email }}</td>
                  <td>{{ item.columns.status }}</td>
                  <td>
                    <VBtn
                      variant="plain"
                      density="compact"
                      icon="mdi-pencil-outline"
                      @click="handleEditItem(item.columns)"
                    >
                    </VBtn>
                    <VBtn variant="plain" density="compact" icon="mdi-trash-can-outline"> </VBtn>
                    <VBtn variant="plain" density="compact" icon="mdi-dots-vertical"> </VBtn>
                  </td>
                </tr>
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
