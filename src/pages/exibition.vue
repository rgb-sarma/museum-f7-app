<template>
  <f7-page name="exibition">
    <Navbar />
    <div class="title-wrap">
      <f7-block>
        <h2>{{ exibition.title || "Could not access title" }}</h2>
      </f7-block>
      <f7-block>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus reprehenderit exercitationem nihil unde nam blanditiis doloremque esse maiores, sed obcaecati, dolorum ratione adipisci animi vero. Quibusdam labore iste modi adipisci.</p>
        <f7-block-footer>
          Score: {{ calcAvgScore() }}
        </f7-block-footer>
      </f7-block>
      <hr>
      <div class="subtitle">
        <span>Time to tour: {{ timeToTour() }} minutes</span>
        <span>Price: $ {{ totalPrice() }}</span>
      </div>
    </div>
    <f7-list media-list accordion>
      <f7-list-item v-for="exibit in exibition.exibits" 
        :link="`/exibit/${exibit.id}`" 
        :title="exibit.title" 
        :text="`Time to view ${exibit.timeToView} min`" 
        :footer="exibit.type"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." 
        chevron-center>
        <template #media>
          <img :src="`https://picsum.photos/id/2${exibit.id}/65/65`" width="75">
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
              <f7-list-item v-for="comment in allComments" :key="comment.id" >
                <f7-block strong style="background-color: #f6f6f6;">
                  <f7-block-title>{{ comment.user }}</f7-block-title>
                  <p>{{ comment.text }}</p>
                  <f7-block-footer>Score: {{ comment.score }}/5</f7-block-footer>
                </f7-block>
              </f7-list-item>
            </f7-list>
          </f7-accordion-content>
        </f7-list-item>
      </f7-list>
    </f7-block>

    <Popup :isActive="isActive" @close="closePopup"/>

    <!-- <f7-block v-show="varijabla" id="pravda_za_vucica" style="position: absolute;">
      <f7-list>
        <f7-list-item>
          <f7-list-item-cell class="flex-shrink-3">
            <f7-range :min="1" :max="5" :step="1" :value="5" :label="true" color="#ef223c" />
          </f7-list-item-cell>
        </f7-list-item>
        <f7-list-input type="textarea" placeholder="Type a comment"></f7-list-input>
      </f7-list>
    </f7-block> -->
  </f7-page>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import { f7, } from 'framework7-vue';
import { ref } from 'vue';
import Popup from '../components/popup.vue';

// console.log(f7.views.main.router.currentRoute.params.id)

// console.log("before",f7.store.state.allExibitions.value);
let exibition = ref(f7.store.state.allExibitions.value.filter((e) => e.id == (f7.views.main.router.currentRoute.params.id || 1))[0])

let allComments = ref(f7.store.state.comments.value)
let isActive = ref(false);
// let varijabla = ref(false)

const timeToTour = () => {
  let time = 0;
  exibition.value.exibits.forEach((e) => {
    time += e.timeToView;
  });
  return time;
}

const totalPrice = () => {
  let price = 0;
  exibition.value.exibits.forEach((e) => {
    price += e.price;
  });
  return price;
}

const kancer = () => {
  isActive.value = true;
}

const closePopup = () => {
  isActive.value = false;
}

const calcAvgScore = () => {
  let sum = 0
  let avg = 0
  allComments.value.forEach((c) => {
    sum += c.score
  })
  avg = sum / allComments.value.length
  return avg
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