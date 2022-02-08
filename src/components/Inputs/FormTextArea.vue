<template>
  <label for="uuid" class="contact__label">{{ label }}</label>
  <textarea
    v-bind="$attrs"
    :placeholder="placeholder"
    class="contact__input"
    :class="error ? 'contact__input--error' : ''"
    id="contact__input--message"
    cols="30"
    rows="10"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  ></textarea>
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
    name: "FormTextArea",
    props: {
      label: {
        type: String,
        required: true,
        default: "",
      },
      modelValue: {
        type: [String, Number],
        required: true,
        default: "",
      },
      placeholder: {
        type: String,
        required: true,
        default: "How can i help?",
      },

      error: {
        type: String,
        required: true,
        default: "This field is required",
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
  .contact__label {
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
  .contact__input {
    box-sizing: border-box;
    margin: 8px 0 24px 0;
    background: rgb(51, 50, 61, 0.1);
    mix-blend-mode: normal;
    border: none;
    color: var(--darkBlue);
    padding: 9px 16px;
    width: 100%;
  }

  .contact__input::placeholder {
    color: #33323d;
    mix-blend-mode: normal;
    opacity: 0.4;
  }

  .contact__input:focus {
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
