<template>
  <f7-page>
    <navbar />
    <f7-block class="wrapic">
      <f7-list no-hairlines>
        <f7-list-input
          label="email"
          type="text"
          floating-label
          outline
          placeholder="example@service.com"
          v-model:value="email"
        />
        <f7-list-input
          label="Password"
          type="password"
          floating-label
          outline
          placeholder="********"
          v-model:value="password"
        />
      </f7-list>
      <f7-block-footer>
        Don't have an account? <a href="/register">Register</a>
      </f7-block-footer>
      <f7-block style="width: 100%;">
        <f7-button @click="login" raised round fill>Log In</f7-button>
      </f7-block>
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

  let login = () => {
    console.log(email.value, password.value);
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