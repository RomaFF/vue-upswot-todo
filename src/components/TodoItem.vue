<template>
  <div class="post__wrapper">
    <div class="post">
    <div class="post__text"> 
      <div class="post__text-title"><strong>Название:</strong> {{ post.title }}</div>
      <div class="post__text-descr"><strong>Описание:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <div class="post__btn">
        <my-button 
          @click="$emit('editPostOpen', post)"
          >Edit
        </my-button>
      </div>
      <div class="post__btn">
        <my-button @click="$emit('remove', post)"> Delete </my-button>
      </div>      
    </div>
  </div>
  <div v-if="post.isActive" class="post__edit">
    <edit-post :post="post" @edit="$emit('edit', post)"></edit-post>
  </div>
  </div>
</template>

<script>
import EditPost from './EditPost';

export default {
  components: { EditPost },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/base/_variables.scss';

@media screen and (max-width: 1921px) {
.post {
  width: calc(100% - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__wrapper {
    margin-bottom: 20px;
    padding: 15px;
    width: calc(100% - 30px);
    border: 2px solid $header-button-color;
  }
  &__text {
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: left;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    line-height: 156.69%;
    &-title {
      padding-bottom: 10px;
      word-wrap: break-word;
    }
    &-descr {
      word-wrap: break-word;
      width: 100%;
    }
  }
  &__btns {
    width: 18%;
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    padding-left: 10px;
    button {
      font-family: Roboto;
      font-weight: 500;
      font-size: 20px;
    }
  }
  &__edit {
    margin-top: 25px;
  }
}
}

@media screen and (max-width: 991px) {
  .post {
  width: calc(100% - 80px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  &__wrapper {
    margin-bottom: 20px;
    padding: 15px;
    width: calc(100% - 30px);
    border: 2px solid $header-button-color;
  }
  }
}

@media screen and (max-width: 767px) {
  .post {
  width: calc(100% - 50px);
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  &__wrapper {
    margin-bottom: 20px;
    padding: 15px;
    border: 2px solid $header-button-color;
  }
  &__text {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;
    width: 100%;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    line-height: 156.69%;
    &-title {
      padding-bottom: 10px;
      word-wrap: break-word;
    }
    &-descr {
      word-wrap: break-word;
      width: 100%;
    }
  }
  &__btns {
    margin-top: 10px;
    width: 50px;
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    padding-right: 5px;
    button {
      font-family: Roboto;
      font-weight: 500;
      font-size: 15px;
    }
  }
  &__edit {
    margin-top: 25px;
    button {
      font-family: Roboto;
      font-weight: 500;
      font-size: 15px;
      width: 100%;
    }
  }
  }
}

@media screen and (max-width: 480px) {
  .post {
  width: calc(100% - 30px);
  &__text {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex-wrap: wrap;
    width: 100%;
    font-family: Roboto;
    font-weight: 500;
    font-size: 16px;
    line-height: 156.69%;
    &-title {
      padding-bottom: 10px;
      word-wrap: break-word;
      width: 100%;
    }
    &-descr {
      word-wrap: break-word;
      width: 100%;
    }
    }
}
}
</style>
