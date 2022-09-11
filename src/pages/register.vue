<template>
  <f7-page>
    <navbar />
    
    <f7-list no-hairlines>
      <f7-list-input
        label="First name"
        type="text"
        placeholder="First Name"
        v-model:value="name"
      />
      <f7-list-input
        label="Last name"
        type="text"
        placeholder="Last Name"
        v-model:value="lastname"
      />
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Password"
        v-model:value="password"
      />
      <f7-list-input
        label="Confirm password"
        type="password"
        placeholder="Password"
        v-model:value="c_password"
      />
      <f7-list-input
        label="Email"
        type="text"
        placeholder="Email"
        v-model:value="email"
      />
      <f7-list-input
        label="Phone"
        type="text"
        placeholder="Phone"
        v-model:value="phone"
      />
      <f7-list-input
        label="Address"
        type="text"
        placeholder="Address"
        v-model:value="address"
      />
    </f7-list>
    <f7-button @click="submit">Register</f7-button>
  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
  import { ref } from 'vue';
  // import f7 
  import { f7 } from 'framework7-vue';
  let name = ref('vidak')
  let lastname = ref('test')
  let email = ref('v@v.v')
  let password = ref('123')
  let c_password = ref('123')
  let phone = ref('123123')
  let address = ref('asd 123')

  let submit = async () => {
    if (password.value != c_password.value) {
      f7.dialog.alert('Password do not match!')
      return
    } 

    let user = {
      name: name.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      phone: phone.value,
      address: address.value
    }
    console.log(user);
    console.log(f7);
    let [res,err] = await f7.store.dispatch('register', user)
    if (err) f7.dialog.alert(err)
    if (res) {
      f7.dialog.alert('You have successfully registered!')
      f7.views.main.router.navigate('/')
    }
  }
</script>

<style>

</style>