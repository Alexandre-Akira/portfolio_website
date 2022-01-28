<template>
  <div class="secondaryButton">
    <rounter-link to="/">{{ text }}</rounter-link>
  </div>
</template>

<script>
  export default {
    name: "SecondaryButton",
    props: {
      text: String,
    },
  };
</script>

<style scoped>
  .secondaryButton {
    cursor: pointer;
    border: 1px solid var(--grayishDarkBlue);
    text-align: center;
    padding: 17px;
    width: 202px;
    font-family: "Public Sans", sans-serif;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
    transition: background-color 1s, color 1s;
  }

  .secondaryButton:hover {
    background-color: var(--grayishDarkBlue);
    color: #fff;
  }

  .secondaryButton:disabled {
    mix-blend-mode: normal;
    opacity: 0.2;
  }
</style>
