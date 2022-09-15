<template>
  <f7-page name="profile" >
    <navbar />
    <!-- <f7-block-title>
      Profile Information
    </f7-block-title> -->
    <f7-block class="centered">
      <f7-block-title class="title"><h3>Profile</h3></f7-block-title>
      <f7-block-footer class="footer">
        tap any field to edit
      </f7-block-footer>
    </f7-block>
    <f7-list inset @click="enableEdit">
      <f7-list-input label="Name" type="text" placeholder="Enter name" :disabled="!isEditing" v-model:value="name" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input label="Last Name" type="text" placeholder="Enter last name" :disabled="!isEditing" v-model:value="lastname" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input label="Email" type="email" placeholder="example@example.com" :disabled="!isEditing" v-model:value="email" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input label="Address" type="text" placeholder="Enter address" :disabled="!isEditing" v-model:value="address" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input label="Phone" type="text" placeholder="Enter phone number" :disabled="!isEditing" v-model:value="phone" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input label="Password" type="password" placeholder="Enter password" :disabled="!isEditing" v-model:value="password" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input v-if="isEditing" label="Re-enter Password" type="password" placeholder="Re-enter password" :disabled="!isEditing" v-model:value="password2" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" />
      <f7-list-input v-if="isEditing" label="Favourite Exibit Types" type="text" placeholder="Add Type of Exibit" :outline="isEditing" :floating-label="isEditing" :clear-button="isEditing" ></f7-list-input>
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
          <f7-button class="h-40" @click="save" fill round>Save</f7-button>
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
let name = ref('Lazar')
let lastname = ref('Lazarevic')
let email = ref('email@gmail.com')
let address = ref('Beogradska 1, Beograd')
let phone = ref('+381 66 123 123')
let password = ref('123123')
let password2 = ref('123123')


const isEditing = ref(false)

const save = () => {
  isEditing.value = false
}

const cancel = () => {
  isEditing.value = false
}

const enableEdit = () => {
  isEditing.value = true
}

</script>
<style scoped lang="scss">
  .centered {
    text-align: center;

    .title {
      color: #000;
      font-size: 1.5rem;
      font-weight: 500;

      h3 {
        margin-bottom: 2px;
      }
    }
    .footer {
      padding: 0;
      font-size: 0.8rem;
      color: #999;
    }
  }
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