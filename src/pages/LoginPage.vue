<template>
  <div class="container">
    <div>
      <header class="header">
        <div class="header__cap"></div>
        <div class="header__logo-wrapper">
          <img
            class="header__img"
            src="../assets/logoHeader.png"
            alt="Company logo"
          />
        </div>
      </header>
    </div>

    <div class="promo">
      <div class="promo__text">Welcome to Business Analytics Online</div>
    </div>

    <div class="about">
      <div class="about__wrapper">
        <div class="about__title">
          <strong>Business Analytics</strong> — a new, convenient tool for
          managing and forecasting your business performance, which will help
          analyze your own finances and cash flows, visualize your reporting,
          business processes, KPI's
        </div>

        <div class="about__items">
          <div class="about__items-item">
            <div class="about__img">
              <img src="../assets/check.jpg" alt="Check" />
            </div>
            <div>
              <div>
                <h4>Interactive Reporting</h4>
              </div>
              <div class="about__text">
                In just a few clicks, you can connect your data from 1C, CRM
                (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
                ebay), Logistic (Nova Poshta), Google Analytics and many more
                systems that reflect different aspects of business activities.
              </div>
            </div>
          </div>

          <div class="about__items-item">
            <div class="about__img">
              <img src="../assets/check.jpg" alt="Check" />
            </div>
            <div>
              <h4>Automated data updates</h4>
              <div class="about__text">
                The application automatically updates and structures the data in
                just 60 seconds, saving you time and money.
              </div>
            </div>
          </div>

          <div class="about__items-item">
            <div class="about__items-item">
              <div class="about__img">
                <img src="../assets/check.jpg" alt="Check" />
              </div>
              <div>
                <h4>Data Security</h4>
                <div class="about__text">
                  The Bank guarantees the safety of your personal data, ensuring
                  their integrity and confidentiality.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="about__form">
        <div class="about__login">

          <form @submit.prevent>
            <div v-if="isUsername" class="about__input-wrapper">
              <div class="about__form-title">Name</div>
              <my-input v-model="userData.username" type="text" />
            </div>
            <div v-if="!isUsername" class="about__input-wrapper">
              <div class="about__form-title">Name</div>
              <error-input v-model="userData.username" type="text" />
              <div class="error-input">
                <div class="error-input__logo-wrapper">
                  <img
                    class="error-input__logo"
                    src="../assets/X.png"
                    alt="x"
                  />
                </div>
                <div class="error-input__text">
                  Enter correct username
                </div>
              </div>
            </div>

            <div v-if="isPassword" class="about__input-wrapper">
              <div class="about__form-title">Password</div>
              <my-input v-model="userData.password" type="text" />
            </div>
            <div v-if="!isPassword" class="about__input-wrapper">
              <div class="about__form-title">Name</div>
              <error-input v-model="userData.password" type="text" />
              <div class="error-input">
                <div class="error-input__logo-wrapper">
                  <img
                    class="error-input__logo"
                    src="../assets/X.png"
                    alt="x"
                  />
                </div>
                <div class="error-input__text">
                  Enter correct password
                </div>
              </div>
            </div>

            <div class="about__form-btn">
              <my-button  @click="checkData">LOGIN</my-button>
            </div>
            <div class="about__input-a"><a href="#">Forgot Password</a></div>
          </form>

        </div>
        <div class="about__register">Register now</div>
      </div>
    </div>

    <div class="footer__wrapper">
      <footer class="footer">
        <div class="footer__links">
          <div class="footer__logo">
            <img
              class="header__img"
              src="../assets/logoHeader.png"
              alt="Company logo"
            />
          </div>
          <ul class="footer__list">
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Notice at Collection</li>
            <li>CA Privacy Hub</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div class="footer__line"></div>
        <div class="footer__reserved">
          Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
          Opportunity Lender.
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
   data() {
    return {
      isPassword: true,
      isUsername: true,
    };
  },
  ...mapMutations({
    setUserData: 'post/setUserData',
  }),
  computed: {
    ...mapState({
      fakeLogin: (state) => state.post.fakeLogin,
      userData: (state) => state.post.userData
    }),
  },
  methods: {
    checkData() {
      this.isPassword = true;
      this.isUsername = true;
      if(this.userData.username === this.fakeLogin.username && +this.userData.password === +this.fakeLogin.password ) {
        localStorage.setItem('isAuth', true)
        this.$router.push('/todo')
      } else {
        if(this.userData.username !== this.fakeLogin.username) this.isUsername = false
        if(+this.userData.password !== +this.fakeLogin.password) this.isPassword = false    
        this.$store.commit('setUserData', '', '')
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/base/_variables.scss';
@import '../styles/_media.scss';

@media screen and (max-width: 1920px) {
.container {
  position: relative;
}
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  &__cap {
    height: 53px;
    background: $header-color;
  }
  &__logo-wrapper {
    height: 96px;
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
    padding-top: 16px;
  }
  &__img {
    display: block;
    margin-left: $margin-left;
    padding: 0 auto;
  }
}
.promo {
  height: 457px;
  width: 100%;
  background: url(../assets/background.png) center (center/cover) no-repeat;
  &__text {
    padding-top: 228px;
    padding-left: $margin-left;
    width: 600px;
    font-family: Roboto;
    font-size: 50px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
.about {
  display: flex;
  position: relative;
  padding-bottom: 30px;
  &__wrapper {
    margin-left: $margin-left;
    width: 550px;
  }
  &__title {
    margin-top: 53px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 156.69%;
  }
  &__items {
    display: grid;
    margin-top: 15px;
    &-item {
      display: grid;
      grid-template-columns: 40px 500px;
      column-gap: 10px;
      row-gap: 10px;
      h4 {
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 156.69%;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-size: 14px;
        line-height: 156.69%;
      }
    }
  }
  &__img {
    position: relative;
    padding: 25px 0 0 10px;
  }
  &__text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__form {
    min-height: 400px;
    width: 460px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: -185px;
    right: 230px;
    &-title {
      margin-bottom: 7px;
      font-family: Roboto;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &-btn {
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  &__login {
    min-height: 330px;
    background: #ffffff;
    padding: 45px 30px;
  }
  &__register {
    height: 70px;
    background: #f6f6f6;
    font-family: Roboto;
    font-weight: normal;
    font-size: 25px;
    text-align: center;
    line-height: 70px;
  }
  &__input {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-a {
      font-family: Roboto;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
  }
}
.error-input {
  display: flex;
  padding-top: 15px;
  &__logo {
    padding-right: 15px;
  }
  &__text {
    color: #D60000;
  }
}
.footer {
  height: 120px;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: $margin-left;
  margin-right: $margin-right;
  &__wrapper {
    background: $header-color;
    position: relative;
  }
  &__links {
    display: flex;
    justify-content: flex-end;
    height: 65px;
  }
  &__logo {
    position: absolute;
    top: 30px;
    left: 0;
    img {
      width: 56px;
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    width: 690px;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;
      color: #ffffff;
    }
  }
  &__line {
    border: 1px solid #ffffff;
  }
  &__reserved {
    margin-top: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
}

@media screen and (max-width: 1600px) {
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  &__cap {
    height: 53px;
    background: $header-color;
  }
  &__logo-wrapper {
    height: 96px;
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
    padding-top: 16px;
  }
  &__img {
    display: block;
    margin-left: $margin-left;
    padding: 0 auto;
  }
}
.promo {
  height: 457px;
  width: 100%;
  background: url(../assets/background.png) center (center/cover) no-repeat;
  &__text {
    padding-top: 228px;
    padding-left: $margin-left;
    width: 600px;
    font-family: Roboto;
    font-size: 50px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
.about {
  display: flex;
  padding-bottom: 30px;
  &__wrapper {
    margin-left: 180px;
    width: 550px;
  }
  &__title {
    margin-top: 53px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 156.69%;
  }
  &__items {
    display: grid;
    margin-top: 15px;
    &-item {
      display: grid;
      grid-template-columns: 40px 500px;
      column-gap: 10px;
      row-gap: 10px;
      h4 {
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 156.69%;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-size: 14px;
        line-height: 156.69%;
      }
    }
  }
  &__img {
    position: relative;
    padding: 25px 0 0 10px;
  }
  &__text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__form {
    min-height: 400px;
    width: 460px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    top: -150px;
    right: 230px;
    &-title {
      margin-bottom: 7px;
      font-family: Roboto;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &-btn {
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  &__login {
    min-height: 330px;
    background: #ffffff;
    padding: 45px 30px;
  }
  &__register {
    height: 70px;
    background: #f6f6f6;
    font-family: Roboto;
    font-weight: normal;
    font-size: 25px;
    justify-content: space-between;
    line-height: 70px;
  }
  &__input {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-a {
      font-family: Roboto;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
  }
}
.error-input {
  display: flex;
  padding-top: 15px;
  &__logo {
    padding-right: 15px;
  }
  &__text {
    color: #D60000;
  }
}
.footer {
  height: 120px;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: $margin-left;
  margin-right: $margin-right;
  &__wrapper {
    background: $header-color;
    position: relative;
  }
  &__links {
    display: flex;
    justify-content: flex-end;
    height: 65px;
  }
  &__logo {
    position: absolute;
    top: 30px;
    left: 0;
    img {
      width: 56px;
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    width: 400px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;
      color: #ffffff;
      padding-right: 10px;
    }
  }
  &__line {
    border: 1px solid #ffffff;
  }
  &__reserved {
    margin-top: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
}

@media screen and (max-width: 1439px) {
  .about {
    display: flex;
    padding-bottom: 30px;
    &__wrapper {
      margin-left: 50px;
      width: 550px;
    }
    &__title {
      margin-top: 53px;
      font-family: Roboto;
      font-weight: normal;
      font-size: 16px;
      line-height: 156.69%;
    }
    &__items {
      display: grid;
      margin-top: 15px;
      &-item {
        display: grid;
        grid-template-columns: 40px 500px;
        column-gap: 10px;
        row-gap: 10px;
        h4 {
          margin-bottom: 10px;
          font-family: Roboto;
          font-weight: 700;
          font-size: 16px;
          line-height: 156.69%;
        }
        p {
          font-family: Roboto;
          font-style: normal;
          font-size: 14px;
          line-height: 156.69%;
        }
      }
    }
    &__img {
      position: relative;
      padding: 25px 0 0 10px;
    }
    &__text {
      font-family: Roboto;
      font-weight: normal;
      font-size: 14px;
      line-height: 156.69%;
    }
    &__form {
      min-height: 400px;
      width: 460px;
      background: #ffffff;
      box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
      margin-top: 30px;
      top: -100px;
      right: 50px;
      &-title {
        margin-bottom: 7px;
        font-family: Roboto;
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
      }
      &-btn {
        button {
          margin-top: 20px;
          margin-bottom: 20px;
        }
      }
    }
    &__login {
      min-height: 330px;
      background: #ffffff;
      padding: 45px 30px;
    }
    &__register {
      height: 70px;
      background: #f6f6f6;
      font-family: Roboto;
      font-weight: normal;
      font-size: 25px;
      justify-content: space-between;
      line-height: 70px;
    }
    &__input {
      &-wrapper {
        margin-bottom: 40px;
      }
      &-a {
        font-family: Roboto;
        font-style: normal;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        a {
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (max-width: 1200px) {
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  &__cap {
    height: 53px;
    background: $header-color;
  }
  &__logo-wrapper {
    height: 96px;
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
    padding-top: 16px;
  }
  &__img {
    display: block;
    margin-left: $margin-left;
    padding: 0 auto;
  }
}
.promo {
  height: 457px;
  width: 100%;
  background: url(../assets/background.png) center (center/cover) no-repeat;
  &__text {
    padding-top: 228px;
    padding-left: $margin-left;
    width: 600px;
    font-family: Roboto;
    font-size: 50px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
.about {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;
  &__wrapper {
    margin-left: 75px;
    width: 550px;
  }
  &__title {
    margin-top: 53px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 156.69%;
  }
  &__items {
    display: grid;
    margin-top: 15px;
    &-item {
      display: grid;
      grid-template-columns: 40px 500px;
      column-gap: 10px;
      row-gap: 10px;
      h4 {
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 156.69%;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-size: 14px;
        line-height: 156.69%;
      }
    }
  }
  &__img {
    position: relative;
    padding: 25px 0 0 10px;
  }
  &__text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__form {
    min-height: 400px;
    width: 460px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    position: static;
    &-title {
      margin-bottom: 7px;
      font-family: Roboto;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &-btn {
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  &__login {
    min-height: 330px;
    background: #ffffff;
    padding: 45px 30px;
  }
  &__register {
    height: 70px;
    background: #f6f6f6;
    font-family: Roboto;
    font-weight: normal;
    font-size: 25px;
    justify-content: space-between;
    line-height: 70px;
  }
  &__input {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-a {
      font-family: Roboto;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
  }
}
.error-input {
  display: flex;
  padding-top: 15px;
  &__logo {
    padding-right: 15px;
  }
  &__text {
    color: #D60000;
  }
}
.footer {
  height: 120px;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: $margin-left;
  margin-right: $margin-right;
  &__wrapper {
    background: $header-color;
    position: relative;
  }
  &__links {
    display: flex;
    justify-content: flex-end;
    height: 65px;
  }
  &__logo {
    position: absolute;
    top: 30px;
    left: 0;
    img {
      width: 56px;
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    width: 400px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;
      color: #ffffff;
      padding-right: 10px;
    }
  }
  &__line {
    border: 1px solid #ffffff;
  }
  &__reserved {
    margin-top: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
}

@media screen and (max-width: 990px) {
.container {
  width: 100%;
  margin: 0;
  right: 0;
}
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  &__cap {
    height: 53px;
    background: $header-color;
  }
  &__logo-wrapper {
    height: 96px;
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
    padding-top: 16px;
  }
  &__img {
    display: block;
    margin-left: 75px;
    padding: 0 auto;
  }
}
.promo {
  height: 457px;
  width: 100%;
  background: url(../assets/background.png) center (center/cover) no-repeat;
  &__text {
    padding-top: 228px;
    padding-left: 75px;
    max-width: 600px;
    font-family: Roboto;
    font-size: 50px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
.about {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;
  &__wrapper {
    margin-left: 75px;
    width: 550px;
  }
  &__title {
    margin-top: 53px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 156.69%;
  }
  &__items {
    display: grid;
    margin-top: 15px;
    &-item {
      display: grid;
      grid-template-columns: 40px 500px;
      column-gap: 10px;
      row-gap: 10px;
      h4 {
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 156.69%;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-size: 14px;
        line-height: 156.69%;
      }
    }
  }
  &__img {
    position: relative;
    padding: 25px 0 0 10px;
  }
  &__text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__form {
    min-height: 400px;
    width: 460px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    position: static;
    &-title {
      margin-bottom: 7px;
      font-family: Roboto;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &-btn {
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  &__login {
    min-height: 330px;
    background: #ffffff;
    padding: 45px 30px;
  }
  &__register {
    height: 70px;
    background: #f6f6f6;
    font-family: Roboto;
    font-weight: normal;
    font-size: 25px;
    justify-content: space-between;
    line-height: 70px;
  }
  &__input {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-a {
      font-family: Roboto;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
  }
}
.error-input {
  display: flex;
  padding-top: 15px;
  &__logo {
    padding-right: 15px;
  }
  &__text {
    color: #D60000;
  }
}
.footer {
  height: 120px;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: 75px;
  margin-right: 75px;
  &__wrapper {
    background: $header-color;
    position: relative;
  }
  &__links {
    display: flex;
    justify-content: flex-end;
    height: 65px;
  }
  &__logo {
    position: absolute;
    top: 30px;
    left: 0;
    img {
      width: 56px;
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    width: 400px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;
      color: #ffffff;
      padding-right: 10px;
    }
  }
  &__line {
    border: 1px solid #ffffff;
  }
  &__reserved {
    margin-top: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
}

@media screen and (max-width: 767px) {
.container {
  width: 100%;
  margin: 0;
  right: 0;
}
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  &__cap {
    height: 53px;
    background: $header-color;
  }
  &__logo-wrapper {
    height: 96px;
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
    padding-top: 16px;
  }
  &__img {
    display: block;
    margin-left: 75px;
    padding: 0 auto;
  }
}
.promo {
  height: 457px;
  width: 100%;
  background: url(../assets/background.png) center (center/cover) no-repeat;
  &__text {
    padding-top: 228px;
    padding-left: 75px;
    max-width: 400px;
    font-family: Roboto;
    font-size: 36px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
.about {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;
  &__wrapper {
    margin-left: 25px;
    margin-right: 25px;
    width: 400px;
  }
  &__title {
    margin-top: 53px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 156.69%;
  }
  &__items {
    display: grid;
    margin-top: 15px;
    &-item {
      display: grid;
      grid-template-columns: 40px 360px;
      column-gap: 10px;
      row-gap: 10px;
      h4 {
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 156.69%;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-size: 14px;
        line-height: 156.69%;
      }
    }
  }
  &__img {
    position: relative;
    padding: 25px 0 0 10px;
  }
  &__text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__form {
    min-height: 400px;
    width: 460px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    position: static;
    &-title {
      margin-bottom: 7px;
      font-family: Roboto;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &-btn {
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  &__login {
    min-height: 330px;
    background: #ffffff;
    padding: 45px 30px;
  }
  &__register {
    height: 70px;
    background: #f6f6f6;
    font-family: Roboto;
    font-weight: normal;
    font-size: 25px;
    justify-content: space-between;
    line-height: 70px;
  }
  &__input {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-a {
      font-family: Roboto;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
  }
}
.error-input {
  display: flex;
  padding-top: 15px;
  &__logo {
    padding-right: 15px;
  }
  &__text {
    color: #D60000;
  }
}
.footer {
  height: 120px;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  &__wrapper {
    background: $header-color;
    position: relative;
  }
  &__links {
    display: flex;
    justify-content: flex-end;
    height: 65px;
  }
  &__logo {
    position: absolute;
    top: 30px;
    left: 0;
    img {
      width: 56px;
    }
  }
  &__list {
    display: flex;
    list-style-type: none;
    width: 400px;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;
      color: #ffffff;
      padding-right: 10px;
    }
  }
  &__line {
    border: 1px solid #ffffff;
  }
  &__reserved {
    margin-top: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
}

@media screen and (max-width: 575px) {
.container {
  width: 100%;
  margin: 0;
  right: 0;
}
.header {
  padding: 0;
  margin: 0;
  width: 100%;
  &__cap {
    height: 53px;
    background: $header-color;
  }
  &__logo-wrapper {
    height: 96px;
    background: linear-gradient(180deg, #00afed 0%, #00569a 100%);
    padding-top: 16px;
  }
  &__img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 0 auto;
  }
}
.promo {
  height: 250px;
  width: 100%;
  background: url(../assets/background.png) center (center/cover) no-repeat;
  &__text {
    padding-top: 75px;
    padding-left: 75px;
    max-width: 200px;
    font-family: Roboto;
    font-size: 25px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
.about {
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  align-items: center;
  &__wrapper {
    margin-left: 25px;
    margin-right: 25px;
    width: 250px;
  }
  &__title {
    margin-top: 53px;
    font-family: Roboto;
    font-weight: normal;
    font-size: 16px;
    line-height: 156.69%;
  }
  &__items {
    display: grid;
    margin-top: 15px;
    &-item {
      display: grid;
      grid-template-columns: 30px 200px;
      column-gap: 10px;
      row-gap: 10px;
      h4 {
        margin-bottom: 10px;
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
        line-height: 156.69%;
      }
      p {
        font-family: Roboto;
        font-style: normal;
        font-size: 14px;
        line-height: 156.69%;
      }
    }
  }
  &__img {
    position: relative;
    padding: 25px 0 0 10px;
  }
  &__text {
    font-family: Roboto;
    font-weight: normal;
    font-size: 14px;
    line-height: 156.69%;
  }
  &__form {
    min-height: 400px;
    width: 300px;
    background: #ffffff;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    position: static;
    &-title {
      margin-bottom: 7px;
      font-family: Roboto;
      font-weight: 300;
      font-size: 18px;
      line-height: 21px;
    }
    &-btn {
      button {
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
  &__login {
    min-height: 330px;
    background: #ffffff;
    padding: 45px 30px;
  }
  &__register {
    height: 70px;
    background: #f6f6f6;
    font-family: Roboto;
    font-weight: normal;
    font-size: 25px;
    justify-content: space-between;
    line-height: 70px;
  }
  &__input {
    &-wrapper {
      margin-bottom: 40px;
    }
    &-a {
      font-family: Roboto;
      font-style: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;
      a {
        text-decoration: none;
      }
    }
  }
}
.error-input {
  display: flex;
  padding-top: 15px;
  &__logo {
    padding-right: 15px;
  }
  &__text {
    color: #D60000;
  }
}
.footer {
  height: 250px;
  padding-top: 40px;
  padding-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  &__wrapper {
    background: $header-color;
    position: relative;
  }
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
  }
  &__logo {
    position: static;
    top: 10px;
    left: 0;
    margin-bottom: 20px;
    img {
      width: 56px;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    width: 200px;
    flex-wrap: wrap;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    li {
      font-family: Roboto;
      font-weight: 500;
      font-size: 16px;
      line-height: 156.69%;
      color: #ffffff;
      padding-right: 10px;
    }
  }
  &__line {
    border: 1px solid #ffffff;
  }
  &__reserved {
    margin-top: 30px;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    line-height: 156.69%;
    color: #ffffff;
  }
}
}



            
</style>
