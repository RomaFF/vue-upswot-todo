<template>
  <div class="list">
    <h2 v-if="posts.length === 0">
      Задач еще нет :(
    </h2>
    <todo-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
      @editPostOpen="$emit('editPostOpen', post)"
      @edit="$emit('edit', post)"
    />
  </div>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  components: { TodoItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};  
</script>

<style scoped lang="scss">
@import '../styles/base/_variables.scss';

.list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
  border: 2px solid #0076C0;
  h2 {
    margin: 0 auto;
  }
}
.post__btns {
  display: flex;
}
</style>
