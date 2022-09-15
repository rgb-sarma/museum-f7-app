<template>
    <f7-page>
      <navbar />
      <div class="title-image">
        <img src="https://picsum.photos/id/2/400/200" alt="exibition image" />
      </div>
      <div class="title-wrap">
        <f7-block>
          <h2>{{  exibit.title }}</h2>
        </f7-block>
        <f7-block>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus reprehenderit exercitationem nihil unde nam blanditiis doloremque esse maiores, sed obcaecati, dolorum ratione adipisci animi vero. Quibusdam labore iste modi adipisci.</p>
          <f7-block-footer>
            Country of origin: {{ exibit.country }}
          </f7-block-footer>
          <f7-block-footer>
            Score: {{ calcAvgScore() }}
          </f7-block-footer>
        </f7-block>
        <hr>
        <div class="subtitle">
          <span>Time to tour: {{ exibit.timeToView }} minutes</span>
          <span>Price: $ {{ exibit.price }}</span>
        </div>
      </div>
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
    </f7-page>
</template>

<script setup>
  import { f7 } from 'framework7-vue';
  import { ref, reactive } from 'vue';
  import navbar from '@/components/navbar.vue';
import Popup from '../components/popup.vue';

  let exibit = ref(f7.store.state.allExibits.value.filter((e) => e.id == (f7.views.main.router.currentRoute.params.id || 1))[0])
  // console.log('all exibits',f7.store.state.allExibits.value);
  // console.log(f7.views.main.router.currentRoute.params.id);
  // console.log(exibit.value);
  // console.log(allComments.value);
  let allComments = ref(f7.store.state.comments.value)
  let isActive = ref(false);

  // let ext_id = props.f7route.params.id
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
  .title-image {
    width: 100%;
    // height: 200px;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .title-wrap {
    // padding-top: 20px;
    width: 100%;
    height: 300px;
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

</style>