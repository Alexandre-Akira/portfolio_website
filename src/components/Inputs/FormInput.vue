<template>
  <label for="uuid" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="label"
    @input="$emit('update:modelValue', $event.target.value)"
    class="'field'"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
    :class="error ? 'contact__input--error' : ''"
  />
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>
<script>
  import UniqueID from "../../Features/UniqueID";

  export default {
    props: {
      label: {
        type: String,
        default: "",
        required: true,
      },
      modelValue: {
        type: [String, Number],
        default: "",
        required: true,
      },
      error: {
        type: String,
        default: "",
        required: true,
      },
    },
    setup() {
      const uuid = UniqueID().getID();
      return {
        uuid,
      };
    },
  };
</script>
<style scoped>
  label {
    font-family: "Public Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 30px;
    color: #33323d;
    mix-blend-mode: normal;
    opacity: 0.8;
    display: block;
  }

  input {
    box-sizing: border-box;
    margin: 8px 0 24px 0;
    background: rgb(51, 50, 61, 0.1);
    mix-blend-mode: normal;
    border: none;
    color: var(--darkBlue);
    padding: 9px 16px;
    width: 100%;
  }

  input::placeholder {
    color: #33323d;
    mix-blend-mode: normal;
    opacity: 0.4;
  }

  input:focus {
    outline-color: var(--slightlyDesaturatedCyan);
  }

  .contact__input--error {
    border: 1px solid;
    border-color: var(--brightRedErrors);
  }

  .errorMessage {
    position: relative;
    top: -20px;
    font-family: Public Sans;
    font-style: italic;
    font-weight: bold;
    font-size: 10px;
    line-height: 12px;
    color: var(--brightRedErrors);
  }
</style>
