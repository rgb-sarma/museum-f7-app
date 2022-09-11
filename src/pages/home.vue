<template>
  <f7-page name="home">
    <navbar disableBack/>

    <f7-button fill @click="debug">Hello </f7-button>

    <f7-list>
      <f7-list-item link="/exibition/">Kurac</f7-list-item>
      <f7-list-item>Kurac</f7-list-item>
      <f7-list-item>Kurac</f7-list-item>
      <f7-list-item>Kurac</f7-list-item>
      <f7-list-item>Kurac</f7-list-item>
      <f7-list-item>Kurac</f7-list-item>
      <f7-list-item>
        <TestComp />
      </f7-list-item>
    </f7-list>


  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
  import { f7 } from 'framework7-vue';
  import TestComp from '../components/testComp.vue';

    // props: {
    //   f7route: Object,
    //   f7router: Object,
    // },
      // console.log(p.f7route);
      // console.log(p.f7router);

    const debug = () => {
      console.log("debug");
      // f7.dialog.prompt('Enter your name', 'Name', (name) => {
      //   f7.dialog.alert(`Hello ${name}!`);
      // });
      let crnci = "Halo Leskovac"
      let nigga = f7.dialog.create({
        title: 'Enter your name',
        // text: 'Your name:',
        // content: '<input type="text" name="name" placeholder="Your name">',
        verticalButtons: true,
        closeByBackdropClick: true,
        buttons: [
          {
            text: 'Cancel',
            cssClass: 'center'
          },
          {
            text: 'Ok',
            bold: true,
            cssClass: 'center',
            onClick: (dialog) => {
              const name = dialog.$el.find('input[name="name"]').val();
              f7.dialog.alert(`Hello ${name}!`);
            },
          },
          {
            text: crnci,
            cssClass: 'center',
            onClick: () => {
              f7.dialog.prompt('Enter tour name', 'Create New Tour', (name) => {
                f7.dialog.alert(`Added to new tour: ${name}`);
              });
            }
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          },
          {
            text: 'Kurac',
            cssClass: 'center'
          }
        ],
        content: '<input type="text" name="name" placeholder="Your name">',
      });

      nigga.open();
    } 

      
</script>

<style scoped lang="scss">
.item-wrap {
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  .info-wrap {
    height: 80px;
    padding: 10px;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
  }
}
</style>

<style>

.center {
  width: 100%;
  text-align: center;
}
</style>