<template>
  <f7-page name="profile" >
    <navbar />
    <!-- <f7-block-title>
      Profile Information
    </f7-block-title> -->
    <f7-list inset @click="enableEdit">
      <f7-list-input label="Name" type="text" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" clear-button />
      <f7-list-input label="Last Name" type="text" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" />
      <f7-list-input label="Email" type="email" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" />
      <f7-list-input label="Address" type="text" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" />
      <f7-list-input label="Phone" type="text" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" />
      <f7-list-input label="Password" type="password" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" />
      <f7-list-input v-if="isEditing" label="Re-enter Password" type="password" placeholder="hll" :disabled="!isEditing" v-model:value="niggas" />
      <f7-list-input v-if="isEditing" label="Favourite Exibit Types" type="text" placeholder="Add Type of Exibit"></f7-list-input>
      <f7-list-item>
        <f7-block class="reduced-m">
          <f7-chip class="mr-10" text="Slike" :deleteable="isEditing" outline color="blue" ></f7-chip>
          <f7-chip class="mr-10" text="Muzika" :deleteable="isEditing" outline color="red" ></f7-chip>
          <f7-chip class="mr-10" text="3D" :deleteable="isEditing" outline color="green" ></f7-chip>
          <f7-chip class="mr-10" text="2D" :deleteable="isEditing" outline color="blue" ></f7-chip>
          <f7-chip class="mr-10" text="VR" :deleteable="isEditing" outline color="red" ></f7-chip>
          <f7-chip class="mr-10" text="Slike" :deleteable="isEditing" outline color="blue" ></f7-chip>
          <f7-chip class="mr-10" text="VR" :deleteable="isEditing" outline color="red" ></f7-chip>
          <f7-chip class="mr-10" text="Muzika" :deleteable="isEditing" outline color="red" ></f7-chip>
          <f7-chip class="mr-10" text="3D" :deleteable="isEditing" outline color="green" ></f7-chip>
          <f7-chip class="mr-10" text="3D" :deleteable="isEditing" outline color="green" ></f7-chip>
          <f7-chip class="mr-10" text="3D" :deleteable="isEditing" outline color="green" ></f7-chip>
          <f7-chip class="mr-10" text="3D" :deleteable="isEditing" outline color="green" ></f7-chip>
          <f7-chip class="mr-10" text="2D" :deleteable="isEditing" outline color="blue" ></f7-chip>
        </f7-block>
      </f7-list-item>
    </f7-list>
    <!-- <f7-block-title>
      Favourite Types
    </f7-block-title>
    <f7-block inset strong>
      <f7-chip class="mr-10" text="Slike" :deleteable="isEditing" outline color="blue" ></f7-chip>
      <f7-chip class="mr-10" text="Muzika" :deleteable="isEditing" outline color="red" ></f7-chip>
      <f7-chip class="mr-10" text="3D" :deleteable="isEditing" outline color="green" ></f7-chip>
      <f7-chip class="mr-10" text="2D" :deleteable="isEditing" outline color="blue" ></f7-chip>
      <f7-chip class="mr-10" text="VR" :deleteable="isEditing" outline color="red" ></f7-chip>
    </f7-block> -->
    <f7-block v-if="isEditing">
      <f7-row>
        <f7-col>
          <f7-button class="h-40" fill round>Save</f7-button>
        </f7-col>
        <f7-col>
          <f7-button class="h-40" @click="cancel" outline round>Cancel</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>




  </f7-page>
</template>

<script setup>
import { ref } from 'vue';
import navbar from '@/components/navbar.vue';

const niggas = "Racist Kassadin"
const isEditing = ref(false)

const cancel = () => {
  isEditing.value = false
}

const enableEdit = () => {
  isEditing.value = true
}

</script>
<style scoped lang="scss">
  .mr-10 {
    margin-right: 10px;
  }

  .h-40 {
    height: 40px;
  }

  .reduced-m {
    margin: 0;
  }

</style>