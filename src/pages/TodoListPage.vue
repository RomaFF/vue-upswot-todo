<template>
  <div class="background">
    <div class="background__logo-wrapper">
      <img
        class="background__logo"
        src="../assets/logo_big.png"
        alt="Company logo"
      />
    </div>
  </div>
  <div class="todo__wrapper">
    <div class="todo">
      <div class="todo__title">Thank you {{userData.username}}!</div>   
      <create-post
        @create="createPost"
      />
      <div class="todo__list">
        <todo-list
          :posts="posts" 
          @remove="removePost" 
          @editPostOpen="editPostOpen" 
          @edit="edit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ModalForm from '../components/ModalForm';
import TodoList from '../components/TodoList';
import CreatePost from '../components/CreatePost';
import MyButton from '../components/UI/MyButton';
import MyInput from '../components/UI/MyInput';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    MyInput,
    MyButton,
    TodoList,
    ModalForm,
    CreatePost
  },
  methods: {
    ...mapMutations({
      setPosts: 'post/setPosts',
    }),
    createPost(post) {
      let newPost = [...this.posts, post];
      this.$store.commit('setPosts', newPost)
    },
    removePost(post) {
      let newPost = this.posts.filter((p) => p.id !== post.id);
      this.$store.commit('setPosts', newPost)
    },
    editPostOpen(post) {
      let newPost = this.posts.map((p) => p.id === post.id ? {...p, isActive: !p.isActive} : {...p});
      this.$store.commit('setPosts', newPost)
    },
    edit(editedPost) {
      let newPost = this.posts.map((p) => p.id === editedPost.id ? {...editedPost, isActive: !p.isActive} : {...p});
      this.$store.commit('setPosts', newPost)
    },
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      userData: (state) => state.post.userData
    }),
  },
};
</script>

<style lang="scss">
@import '../styles/base/_variables.scss';

@media screen and (max-width: 1921px) {
.background {
  height: 600px;
  width: 100%;
  background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
  &__logo {
    padding-top: 65px;
    width: 150px;
    &-wrapper {
      text-align: center;
    }
  }
}
.todo {
  position: absolute;
  top: -400px;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 30px;
  min-height: 500px;
  width: 1000px;
  text-align: center;
  background: #ffffff;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
  &__title {
    padding-bottom: 50px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 55px;
    line-height: 156.69%;
  }
  &__wrapper {
    position: relative;
  }
  &__input {
    margin-bottom: 30px;
  }
}
}

@media screen and (max-width: 1200px) {
.todo {
  width: 800px;
}
}

@media screen and (max-width: 991px) {
.todo {
  width: 650px;
}
}

@media screen and (max-width: 767px) {
.todo {
  width: 400px;
  padding: 10px;
  &__title {
    padding-bottom: 30px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 156.69%;
  }
}
}

@media screen and (max-width: 480px) {
  .todo {
    width: 260px;
  }
}

</style>
