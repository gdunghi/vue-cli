<template>
  <div>
    <h3>TODO</h3>
   
    <input v-model="text">
    <button @click="addTodo">Add todo</button>
     <div v-for="(todo,key) in this.$store.state.todos" v-bind:key="key">
         <span v-bind:class="{red:todo.isChecked}" @click="clickTodo(todo)">
               {{todo.message}}
         </span>
    </div>
    <div v-for="post in posts">
        <post :userId="post.userId" :title="post.title"/>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    Post
  },
  data: function() {
    return {
      text: "",
      posts: []
    };
  },
  methods: {
    addTodo: function() {
      this.$store.dispatch("addTodo", this.text);
    },
    clickTodo: function(todo) {
      if (todo.isChecked) {
        this.$store.dispatch("unClickTodo", todo);
        return;
      }
      this.$store.dispatch("clickTodo", todo);
    },
    async retriveData() {
      try {
        let result = await this.$store.dispatch("getPosts");
        this.posts = result.data;
      } catch (err) {}
    }
  },
  created() {
    this.retriveData();
  }
};
</script>

<style>
.red {
  color: red;
}
</style>
