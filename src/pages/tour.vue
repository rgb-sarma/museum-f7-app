<template>
  <f7-page name="tour">
    <Navbar />
    <div class="title-wrap">
      <f7-block>
        <h2>{{ "This is a tour" }}</h2>
      </f7-block>
      <hr>
      <f7-block>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus reprehenderit exercitationem nihil unde nam blanditiis doloremque esse maiores, sed obcaecati, dolorum ratione adipisci animi vero. Quibusdam labore iste modi adipisci.</p>
      </f7-block>
      <hr>
      <div class="subtitle">
        <span>Time to tour: {{ timeToTour() }} minutes</span>
        <span>Price: $ {{ totalPrice() }}</span>
      </div>
    </div>
    <f7-list media-list accordion>
      <f7-list-item v-for="exibit in exibition[0].exibits"
        :link="`/exibit/${exibit.id}`" 
        :title="exibit.title" 
        :text="`Time to view ${exibit.timeToView} min`" 
        :after="`$ ` + exibit.price"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." 
        chevron-center>
        <template #media>
          <img :src="`https://picsum.photos/id/2${exibit.id}/60/60`" width="60">
        </template>
      </f7-list-item>
    </f7-list>
    <f7-block>
      <f7-list accordion-list class="elevation-2">
        <f7-list-item accordion-item title="User Reviews">
          <f7-accordion-content>
            <f7-list >
              <f7-block strong>
                <f7-row>
                  <f7-col>
                    <f7-button @click="kancer" fill round>Leave a review</f7-button>
                  </f7-col>
                </f7-row>
              </f7-block>
              <f7-list-item v-for="n in 5">
                <f7-block strong style="background-color: #f6f6f6;">
                  <f7-block-title>User name and Lastname {{ n }}</f7-block-title>
                  <p>Review Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit saepe vel sunt deserunt doloribus temporibus officiis maiores ipsam porro quos.</p>
                  <f7-block-footer>Score: 5/5</f7-block-footer>
                </f7-block>
              </f7-list-item>
            </f7-list>
          </f7-accordion-content>
        </f7-list-item>
      </f7-list>
    </f7-block>

    <Popup :isActive="isActive" @close="closePopup" />
    
  </f7-page>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import { f7, } from 'framework7-vue';
import { ref } from 'vue';
import Popup from '../components/popup.vue';

// console.log(f7.views.main.router.currentRoute.params.id)

// console.log("before",f7.store.state.allExibitions.value);
let exibition = ref(f7.store.state.allExibitions.value.filter((e) => e.id == f7.views.main.router.currentRoute.params.id || 1))
let isActive = ref(false)
// console.log("filtered val", exibition.value);

// let varijabla = ref(false)

const timeToTour = () => {
  let time = 0;
  exibition.value[0].exibits.forEach((e) => {
    time += e.timeToView;
  });
  return time;
}

const totalPrice = () => {
  let price = 0;
  exibition.value[0].exibits.forEach((e) => {
    price += e.price;
  });
  return price;
}

const closePopup = () => {
  isActive.value = false;
}

const kancer = () => {  
  isActive.value = true
  // let createComment = f7.dialog.create({
  //   title: 'Leave a comment',
  //   // text: 'Your name:',
  //   content: '<div><label for="desc">Comment</label><textarea class="outline-text" name="desc" maxlength="255" placeholder="Enter a comment (optional)" cols="21" rows="7"></textarea><div class="range-wrap"><label for="review">Review 1-5</label><input type="range" min="1" max="5" step="1" name="review" list="tickmarks"><datalist id="tickmarks"><option value="1"></option><option value="2"></option><option value="3"></option><option value="4"></option><option value="5"></option></datalist></div></div>',
  //   cssClass: 'textarea-outline-active',
  //   verticalButtons: true,
  //   closeByBackdropClick: true,
  //   buttons: [
  //   {
  //     text: 'Ok',
  //     bold: true,
  //     onClick: (dialog) => {
  //       const comment = dialog.$el.find('textarea[name="desc"]').val();
  //       const rating = dialog.$el.find('input[name="review"]').val();
  //       console.log(comment, rating);
  //     },
  //   },
  //   ],
  // });

  // createComment.open();
}

</script>

<style scoped lang="scss">
.title-wrap {
  // padding-top: 20px;
  width: 100%;
  height: 250px;
  // background-color: red;

  h2 {
    margin: 0;
    padding: 0;
  }

  .subtitle {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
  }
}

.range-wrap {
  display: flex;
  flex-direction: column;
}
</style>

<style lang="scss">
.outline-text {
  border-radius: 10px;
  border: 1px solid #e2e2e2;
  color: #212121;
  padding: 5px;

}

.range-wrap {
  display: flex;
  flex-direction: column;
}

.textarea-outline-active {
  textarea {
    &:focus {
      border-color: #ef223c;
    }
  }
}
</style>