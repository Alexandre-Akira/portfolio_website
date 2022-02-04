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
<style></style>
