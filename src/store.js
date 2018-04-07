import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todos: [],
        counte: 0
    }, mutations: {},
    actions: {
        addTodo({ state }, text) {
            state.todos.push({
                message: text,
                isChecked: false,
                id: state.counte
            });
            state.counte++;
        },
        clickTodo({ state }, todo) {
            state.todos[todo.id].isChecked = true;
        },
        unClickTodo({ state }, todo) {
            state.todos[todo.id].isChecked = false;
        },
        getPosts() {
            return Axios.get("http://jsonplaceholder.typicode.com/posts");
        }
    },
    getters: {
        incompletedTodo: function (state) {
            return state.todos.filter(todo => todo.isChecked === false);
        }
    }
});

