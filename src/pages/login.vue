<template>
  <f7-page>
    <navbar />
    <f7-block class="wrapic">
      <f7-list no-hairlines>
        <f7-list-input
          label="email"
          type="text"
          placeholder="example@service.com"
          v-model:value="email"
        />
        <f7-list-input
          label="Password"
          type="password"
          placeholder="********"
          v-model:value="password"
        />
      </f7-list>
      <f7-block-footer>
        Don't have an account? <a href="/register">Register</a>
      </f7-block-footer>
      <f7-button @click="submit" disabled>Login</f7-button>
    </f7-block>

  </f7-page>
</template>

<script setup>
  // import f7 
  import { f7 } from 'framework7-vue';
  import navbar from '@/components/navbar.vue';
  import { ref } from 'vue';

  let email = ref('v@v.v')
  let password = ref('123')

  let submit = async () => {
    let data = {
      email: email.value,
      password: password.value
    }

    let [res, err] = await f7.store.dispatch('login', data)
    
    if (err) f7.dialog.alert(err)
    console.log(res);
    if (res) {
      let user = res.data.user
      let sid = res.data.sid
      await f7.store.dispatch('addUser', {user: user, sid: sid})
      console.log(f7.store.state);
      f7.dialog.alert('You have successfully :) !')
      f7.views.main.router.navigate('/')
    }
  }
</script>

<style scoped lang="scss">
  .wrapic {
    // this centers the div :,)
    height: calc(100% - (var(--f7-navbar-height) + var(--f7-safe-area-top) + var(--f7-block-margin-vertical) + var(--f7-block-margin-vertical)));
    // abominagus
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .list {
      width: 100%;
    }
  }
</style>