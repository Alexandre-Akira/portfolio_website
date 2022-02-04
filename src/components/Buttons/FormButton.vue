<template>
  <input
    :action="path"
    :method="requestMethod"
    :form="formID"
    type="submit"
    class="formButton"
    :value="text"
  />
</template>

<script>
  export default {
    name: "formButton",
    props: {
      text: {
        type: String,
        required: true,
      },
      formID: {
        type: String,
        required: true,
      },
      requestMethod: {
        type: String,
        required: true,
      },
      path: {
        type: String,
        required: true,
      },
    },
  };
</script>

<style scoped>
  .formButton {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: var(--darkBlue);
    color: #fff;
    width: 202px;
    font-family: "Public Sans", sans-serif;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
    transition: background-color 1s, color 1s;
    padding: 17px 24px;
    border: none;
  }

  .formButton:hover {
    background-color: var(--slightlyDesaturatedCyan);
    color: var(--darkBlue);
  }

  .formButton:disabled {
    mix-blend-mode: normal;
    opacity: 0.2;
  }
</style>
