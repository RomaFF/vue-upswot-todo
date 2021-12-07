<template>
  <form @submit.prevent>
    <div class="edit">
      <div class="edit__input">
        <my-input v-model="post.title" type="text" placeholder="Enter title" />
      </div>
      <div class="edit__input">
        <my-input v-model="post.body" type="text" placeholder="Enter description" />
      </div>   
      <div class="edit__btn">
        <my-button @click="edit">Edit Post</my-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    edit() {
      this.$emit('edit', this.post);
    },
  },
};
</script>

<style lang="scss" scoped>
  .edit {
    display: flex;
    flex-direction: column;
    &__btn {
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;
      width: 175px;
    }
    &__input {
      margin-bottom: 15px;
    }
  }
</style>
