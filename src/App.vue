<template>
    <div class="app-wrapper">
        <h1>Thing to do:</h1>
        <h1>{{ title }}</h1>
        <p>Welcome to gatcha hell ....</p>
        <h3>Vue in training</h3>
        <div class="p-grid">
            <div
                class="p-col-12 p-md-4"
                v-for="item in trainingList"
                :key="item.id"
            >
                <div class="p-field-radiobutton">
                    <RadioButton
                        :id="item.id"
                        name="todo"
                        :value="item.text"
                        v-model="title"
                        :key="item.id"
                    />
                    <label :for="item.id">{{ item.text }}</label>
                </div>
            </div>
        </div>
        <teleport to=".modals" v-if="showModal">
            <CustomModal theme="" @close="toggleModal">
                <template v-slot:links>
                    <a href="#">Sign up Now!!!</a>
                    <a href="#">more info</a>
                </template>
                <h1>Primogem giveaway!!!</h1>
                <p>Ohh Yehhh</p>
            </CustomModal>
        </teleport>
        <button @click.alt="toggleModal">Open portal (alt)</button>

        <teleport to=".modals" v-if="showModalTwo">
            <CustomModal theme="" @close="toggleModalTwo">
                <template v-slot:links>
                    <a href="#">More to come</a>
                </template>
                <h1>Something</h1>
            </CustomModal>
        </teleport>
        <button @click="toggleModalTwo">Open portal</button>
    </div>
</template>

<script>
import CustomModal from './components/CustomModal.vue';
import RadioButton from 'primevue/radiobutton';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';

export default {
    name: 'App',
    components: {
        CustomModal,
        RadioButton,
        InputText,
        Calendar,
    },

    data() {
        return {
            value: '',
            title: '',
            showModal: false,
            showModalTwo: false,
            trainingList: [
                { id: 0, text: 'Component: with props and data' },
                { id: 1, text: 'Routes: make example with submenu' },
                { id: 2, text: 'Axios: call api' },
                {
                    id: 3,
                    text:
                        'Vuex: create 1 vuex get data from api with 4 file getter.js, action.js, mutation.js, index.js',
                },
            ],
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
