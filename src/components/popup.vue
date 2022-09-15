<template>
  <div @click="closePopup" class="popup-bg" v-if="isActive">
      <div class="form-wrapper" @click.stop>
        <div class="title-wrapp">
          <h3>Leave a comment</h3>
        </div>
        <f7-block>
          <f7-list>
            <f7-block-title>
              Input Score
            </f7-block-title>
            <f7-range init :min="1" :max="5" :step="1" :value="score" :label="true" color="#ef223c" @range:change="onChangeScore"></f7-range>
            <f7-list-input type="textarea" label="Comment" placeholder="Enter comment (optional)" outline floating-label></f7-list-input>
            <f7-block>
              <f7-row>
                <f7-col>
                  <f7-button @click="confirm" round>Confrim</f7-button>
                </f7-col>
                <f7-col>
                  <f7-button @click="closePopup" round>Cancel</f7-button>
                </f7-col>
              </f7-row>
            </f7-block>
          </f7-list>
        </f7-block>
      </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

let score = ref(0)

const emit = defineEmits(['close-popup'])

let props = defineProps({
  isActive: {
    type: Boolean,
    default: false
  }
})

const closePopup = () => {
  emit('close')
  // console.log('s');
}

const confirm = () => {
  emit('close')
  console.log('confirm');
}

const onChangeScore = (e) => {
  score.value = e;
}

</script>

<style scoped lang="scss">
.popup-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-wrapper {
    .title-wrapp {
      text-align: center;
    }
    // width: 100px;
    // height: 100px;
    background-color: white;
    border-radius: 4px;
    padding: 0;
  }
}

</style>