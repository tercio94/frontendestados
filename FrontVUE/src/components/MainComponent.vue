<template>
  <div>
    <div>
      <input type="text" v-model="inputText">
      <button @click="sendState">Enviar!</button>
    </div>
    <state-list
      :states="states"
      @remove="removeState"
    />
  </div>
</template>
<script>
import StateService from '@/services/StateService';
import StateList from './StateList.vue';

export default {
  components: {
    StateList,
  },
  data: () => ({
    inputText: '',
    states: [],
  }),
  methods: {
    sendState() {
      StateService.postState(this.inputText).then(() => {
        this.inputText = '';
        this.loadStates();
      });
    },
    removeState(stateId) {
      StateService.deleteState(stateId).then(() => {
        this.loadStates();
      });
    },
    loadStates() {
      StateService.getStates().then((states) => {
        this.states = states;
      });
    },
  },
  created() {
    this.loadStates();
  },
};
</script>
