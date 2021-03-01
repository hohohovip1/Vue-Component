<template>
  <h1>{{ title }}</h1>
  <p>Welcome to gatcha hell ....</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up Now!!!</a>
        <a href="#">more info</a>
      </template>
      <h1>Primogem giveaway!!!</h1>
      <p>Ohh Yehhh</p>
    </Modal>
  </teleport>
  <button @click.alt="toggleModal">Open portal (alt)</button>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <template v-slot:links>
        <a href="#">More to come</a>
      </template>
      <h1>Something</h1>
    </Modal>
  </teleport>
  <button @click="toggleModalTwo">Open portal</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My First Vue App :v',
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
.modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
