<template>
  <a
    @mouseover="svgStrokeValue = '#fff'"
    @mouseleave="svgStrokeValue = '#5FB4A2'"
    class="primaryButton"
    href="#aboutMe--anchor"
    ><div class="primaryButton__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
        <g fill="none" fill-rule="evenodd" :stroke="svgStrokeValue">
          <path d="M0 9l8 4 8-4" />
          <path opacity=".5" d="M0 5l8 4 8-4" />
          <path opacity=".25" d="M0 1l8 4 8-4" />
        </g>
      </svg>
    </div>
    <p class="primaryButton__text">{{ text }}</p></a
  >
</template>

<script>
  export default {
    name: "PrimaryButton",
    props: {
      text: String,
      route: String,
    },

    data() {
      return {
        svgStrokeValue: "#5FB4A2",
      };
    },
  };
</script>

<style scoped>
  g {
    transition: stroke 1s;
  }
  .primaryButton {
    display: flex;
    cursor: pointer;
    background-color: var(--darkBlue);
    color: #fff;
    text-align: center;
    align-items: center;
    width: 202px;
    font-family: "Public Sans", sans-serif;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
    transition: background-color 1s, color 1s;
  }

  .primaryButton:hover {
    background-color: var(--slightlyDesaturatedCyan);
    color: var(--darkBlue);
  }

  .primaryButton:disabled {
    mix-blend-mode: normal;
    opacity: 0.2;
  }
  .primaryButton__icon {
    padding: 15px 18px;
    background-color: rgba(0, 0, 0, 0.1);
    mix-blend-mode: normal;
  }

  .primaryButton__text {
    width: 100%;
    text-align: center;
  }
</style>
