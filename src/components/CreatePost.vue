<template>
  <form @submit.prevent>
    <div class="create">
      <div class="create__input">
        <my-input v-model="post.title" type="text" placeholder="Enter title" />
      </div>
      <div class="create__input">
        <my-input v-model="post.body" type="text" placeholder="Enter description" />
      </div>   
      <div class="create__btn">
        <my-button  @click="createPost">Create Post</my-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post);
      this.post = {
        title: '',
        body: '',
      };
    },
  },
};
</script>

<style lang="scss" scoped>
  .create {
    display: flex;
    flex-direction: column;
    &__btn {
      margin-bottom: 30px;
    }
    &__input {
      margin-bottom: 15px;
    }
  }
</style>
