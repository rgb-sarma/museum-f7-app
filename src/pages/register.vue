<template>
  <f7-page>
    <navbar />
    
    <f7-list no-hairlines>
      <f7-list-input
        label="First name"
        type="text"
        floating-label
        outline
        placeholder="First Name"
        v-model:value="name"
      />
      <f7-list-input
        label="Last name"
        type="text"
        floating-label
        outline
        placeholder="Last Name"
        v-model:value="lastname"
      />
      <f7-list-input
        label="Password"
        type="password"
        floating-label
        outline
        placeholder="Password"
        v-model:value="password"
      />
      <f7-list-input
        label="Confirm password"
        type="password"
        floating-label
        outline
        placeholder="Password"
        v-model:value="c_password"
      />
      <f7-list-input
        label="Email"
        type="text"
        floating-label
        outline
        placeholder="Email"
        v-model:value="email"
      />
      <f7-list-input
        label="Phone"
        type="text"
        floating-label
        outline
        placeholder="Phone"
        v-model:value="phone"
      />
      <f7-list-input
        label="Address"
        type="text"
        floating-label
        outline
        placeholder="Address"
        v-model:value="address"
      />
    </f7-list>
    <f7-block-footer class="center-footer">
      Already have an account? <a href="/login">Log In</a>
    </f7-block-footer>
    <f7-block>
      <f7-button @click="submit" raised fill round inset>Register</f7-button>
    </f7-block>
  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
  import { ref } from 'vue';
  // import f7 
  import { f7 } from 'framework7-vue';
  let name = ref('test')
  let lastname = ref('test')
  let email = ref('v@v.v')
  let password = ref('123')
  let c_password = ref('123')
  let phone = ref('123123')
  let address = ref('asd 123')

  let submit = async () => {
    console.log(name.value, lastname.value, email.value, password.value, c_password.value, phone.value, address.value);
  }
</script>

<style scoped lang="scss">
.center-footer {
  text-align: center;
}

</style>