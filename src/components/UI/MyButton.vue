<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style lang="scss" scoped>
@import '../../styles/base/_variables.scss';

.btn {
  padding: 10px 15px;
  height: 53px;
  width: 100%;
  background: $header-button-color;
  color: #ffffff;
  border: none;
  font-family: Roboto;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;
  &:hover {
    background: #ffffff;
    color: $header-button-color;
    border: 1px solid $header-button-color;
  }
}
</style>
