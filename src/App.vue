<template>
    <div class="app-wrapper">
        <h1>Thing to do:</h1>
        <h1>{{ title }}</h1>
        <p>Welcome to gatcha hell ....</p>
        <h3>Vue in training</h3>

        <div class="p-d-flex">
            <Button label="Select to do" @click="toggleModal" class="p-mr-2" />

            <Button
                label="Add more to do"
                @click="toggleModalTwo"
                class="p-mr-2"
            />
        </div>
        <teleport to=".modals" v-if="showModal">
            <CustomModal theme="" @close="toggleModal">
                <template v-slot:body>
                    <div class="select-to-do">
                        <div
                            class=" p-md-4"
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
                                    :load="console.log(item.text)"
                                    class="p-mr-2 "
                                />
                                <label :for="item.id">{{ item.text }}</label>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-slot:footer>
                    <Button
                        label="Add more!!"
                        @click="goToAdd"
                        class="p-button-success p-mr-2"
                    />
                    <Button
                        label="Close"
                        @click="toggleModal"
                        class="p-button-danger"
                    />
                </template>
                <h1>Select something to do!!</h1>
                <p>Ohh Yehhh</p>
            </CustomModal>
        </teleport>

        <teleport to=".modals" v-if="showModalTwo">
            <CustomModal theme="" @close="toggleModalTwo">
                <template v-slot:body>
                    <span class="p-float-label">
                        <InputText
                            id="toDo"
                            type="text"
                            v-model="value"
                            :class="{
                                'p-inputtext-lg': true,
                                'p-invalid': error,
                            }"
                        />
                        <label for="toDo">To do</label>
                        <small
                            class="p-error"
                            v-show="error"
                            style="display: block"
                            >To do is required</small
                        >
                    </span>
                </template>
                <template v-slot:footer>
                    <Button
                        label="Add more!!"
                        @click="addTodo"
                        class="p-button-success p-mr-2"
                    />
                    <Button label="More info" @click="goToAdd" />
                </template>
                <h1>Add to do</h1>
            </CustomModal>
        </teleport>
    </div>
</template>

<script>
import CustomModal from './components/CustomModal.vue';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
export default {
    name: 'App',
    components: {
        CustomModal,
        RadioButton,
        Button,
        InputText,
    },

    data() {
        return {
            console,
            error: null,
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
    created() {
        this.console = window.console;
    },
    methods: {
        goToAdd() {
            this.toggleModal();
            this.toggleModalTwo();
        },
        addTodo() {
            console.log(this.value);
            if (this.value) {
                const newToDo = {
                    id: this.trainingList.length,
                    text: this.value,
                };
                this.trainingList = [...this.trainingList, newToDo];
                this.error = false;
                this.value = '';
            } else {
                console.log('error');
                this.error = true;
            }
        },
        toggleModal() {
            this.showModal = !this.showModal;
        },
        toggleModalTwo() {
            this.showModalTwo = !this.showModalTwo;
        },
        log(item) {
            console.log(item);
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
.p-mr-2 {
    margin-right: 0.5rem;
}
.p-md-4 {
    margin-bottom: 1rem;
}
.select-to-do {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
}
.p-float-label {
    width: 100%;
    margin-bottom: 2rem;
}
.p-float-label label {
    left: 4rem;
}
</style>
