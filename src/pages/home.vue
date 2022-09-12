<template>
  <f7-page name="home">
    <navbar disableBack/>

    <f7-button fill @click="debug">Hello </f7-button>

    <f7-list class="test">
      <f7-list-item v-for="n in 5" class="center-el" no-chevron link="/exibition/">
        <ExibitionCard />
      </f7-list-item>
      
    </f7-list>


  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
  import { f7 } from 'framework7-vue';
  import ExibitionCard from '../components/exibitionCard.vue';

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
      ],
      content: '<input type="text" name="name" placeholder="Your name">',
    });

    nigga.open();
  } 

      
</script>

<style scoped lang="scss">

.test {

  ::after, ::before {
    border: none;
    background-color: transparent;
  }
}


.center-el {
  display: flex;
  justify-content: center;
  background-color: transparent;
}
// .custom-test {
//   display: flex;
//   justify-content: center;
//   background-color: transparent;
//   border: none;
//   outline: none;

//   &:after {
//     background-color: transparent;
//     border: none;
//     height: 0px;
//   }
// }
</style>

<style>

.center {
  width: 100%;
  text-align: center;
}
</style>