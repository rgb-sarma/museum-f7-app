<template>
  <f7-page name="home" @page:afterin="init">
    <navbar disableBack/>

    <!-- <f7-button fill @click="debug">Hello </f7-button> -->

    <f7-block class="another-test">
      <f7-searchbar no-shadow search-container=".search-list" search-in=".item-title"></f7-searchbar>
    </f7-block>
    <f7-block inset>
      <f7-button panel-open="left" raised round>Filter</f7-button>
    </f7-block>
    <f7-block>
      <f7-list class="searchbar-not-found">
        <f7-list-item title="Nothing Found"></f7-list-item>
      </f7-list>
      <f7-list media-list class="search-list searchbar-found">
        <f7-list-item v-for="exibition in displayExibitions" 
        no-chevron 
        :title="exibition.exn_name" 
        :subtitle="exibition.exn_type" 
        :text="exibition.exn_description" 
        :after="`${exibition.total_price}$`" 
        :footer="`Time to complete: ${formatTime(exibition.total_time_to_watch)}`" 
        :link="`/exibition/${exibition.exn_id}`">
          <!-- <ExibitionCard /> -->
          <!-- <template #media>
            <img src="https://picsum.photos/id/23/60/60" width="60">
          </template> -->
        </f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>

<script setup>
  import navbar from '@/components/navbar.vue';
  import { computed } from '@vue/reactivity';
  import { f7 } from 'framework7-vue';
  import { reactive } from 'vue';
  import emitter from '@/js/emmiter.js'
  let useEmitter = emitter()

  const init = async () => {
    // fetch all types for exibit and exibition
    let [res, err] = await f7.store.dispatch('fetchTypes')
    if (err) f7.dialog.alert(err)
    await f7.store.dispatch('addTypes', res.data)

    let [res1, err1] = await f7.store.dispatch('fetchExhibitions')
    await f7.store.dispatch('addExhibitions', res1.data.res)
    if (err1) f7.dialog.alert(err1)
  }

  let allExibitions = reactive(f7.store.state.allExibitions);
  let filters = reactive({})

  let displayExibitions = computed(() => {
    return allExibitions.value.filter(exibition => {
      if (
        (exibition.total_price >= filters.value.priceMin && exibition.total_price <= filters.value.priceMax) &&
        (exibition.total_time_to_watch >= filters.value.timeMin && exibition.total_time_to_watch <= filters.value.timeMax) &&
        (exibition.review >= filters.value.reviewMin && exibition.review <= filters.value.reviewMax)
        // (filters.value.types.includes(exibition.exn_type)) &&
      ) return true
    })
  })
  
  useEmitter.emitter.on('changedFilters', () => {
    filters.value = f7.store.state.filters.value;
  })

  // compress minutes into anything bigger than 1 hour
  const formatTime = (time) => {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;  
    return `${hours ? hours + 'h' : ''} ${minutes}m`
  }
  // const debug = () => {
  //   console.log("debug");
  //   // f7.dialog.prompt('Enter your name', 'Name', (name) => {
  //   //   f7.dialog.alert(`Hello ${name}!`);
  //   // });
  //   let crnci = "Halo Leskovac"
  //   let nigga = f7.dialog.create({
  //     title: 'Enter your name',
  //     // text: 'Your name:',
  //     // content: '<input type="text" name="name" placeholder="Your name">',
  //     verticalButtons: true,
  //     closeByBackdropClick: true,
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         cssClass: 'center'
  //       },
  //       {
  //         text: 'Ok',
  //         bold: true,
  //         cssClass: 'center',
  //         onClick: (dialog) => {
  //           const name = dialog.$el.find('input[name="name"]').val();
  //           f7.dialog.alert(`Hello ${name}!`);
  //         },
  //       },
  //       {
  //         text: crnci,
  //         cssClass: 'center',
  //         onClick: () => {
  //           f7.dialog.prompt('Enter tour name', 'Create New Tour', (name) => {
  //             f7.dialog.alert(`Added to new tour: ${name}`);
  //           });
  //         }
  //       },
  //     ],
  //   });

  //   nigga.open();
  // } 

  // const xd = () => {
  //   console.log('chje');
  // }

      
</script>

<style scoped lang="scss">

// .test {

//   ::after, ::before {
//     border: none;
//     background-color: transparent;
//   }
// }

.centered {
  text-align: center;
}

.another-test {
  :first-child {
    background: none;
  }
}

</style>

<style lang="scss">
// .item-title {
//   display: none;
// }

.center {
  width: 100%;
  text-align: center;

}
</style>