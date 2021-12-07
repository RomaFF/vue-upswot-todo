<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  border: 1px solid #101010;
  padding: 15px;
}
</style>
