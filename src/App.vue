<template>
  <nav class="navigation">
    <rounter-link to="/" class="navigation__logo"
      ><img src="./assets/images/logo.svg" />
    </rounter-link>
    <a class="navigation__hamburguer" v-if="!teste"
      ><img src="./assets/images/icons/hamburger.svg"
    /></a>
    <div class="navigation__links body1" v-if="teste">
      <router-link to="/">HOME</router-link>
      <router-link to="/about">PORTFOLIO</router-link>
      <router-link to="/about">CONTACT ME</router-link>
    </div>
  </nav>
  <router-view class="main" />
  <footer class="contact">
    <div class="contact__navLinks">
      <router-link class="contact__logo" to="/"></router-link>
      <router-link class="contact__navLink" to="/">HOME</router-link>
      <router-link class="contact__navLink" to="/about">PORTFOLIO</router-link>
      <router-link class="contact__navLink" to="/about">CONTACT ME</router-link>
    </div>

    <div class="contact__socialMedias body1">
      <rounter-link to="/" class="contact__mediaLink"
        ><img src="./assets/images/icons/github.svg" />
      </rounter-link>
      <rounter-link to="/" class="contact__mediaLink"
        ><img src="./assets/images/icons/linkedin.svg" />
      </rounter-link>
      <rounter-link to="/" class="contact__mediaLink"
        ><img src="./assets/images/icons/twitter.svg" />
      </rounter-link>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "App",
    computed: {
      teste() {
        if (screen.width <= 375) {
          return false;
        } else {
          return true;
        }
      },
    },
  };
</script>
<style>
  /* FONTS IMPORT */
  @import url("https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  /* CSS RESET */
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  a:visited {
    color: none;
  }

  :root {
    /* PRIMARY COLORS */
    --slightlyDesaturatedCyan: #5fb4a2;
    --darkBlue: #203a4c;
    --grayishDarkBlue: #33323d;
    /* SECONDARY COLORS */
    --veryLightGreyBG: #fafafa;
    --lightGreyTextField: #eaeaeb;
    --brightRedErrors: #f43030;
  }

  /* HEADINGS  */

  h1 {
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 50px;
    letter-spacing: -0.45px;
  }

  h2 {
    font-family: "Ibarra Real Nova", serif;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;
    letter-spacing: -0.36px;
  }

  h3 {
    font-family: "Ibarra Real Nova", serif;
    font-weight: regular;
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -0.29px;
  }

  .body1 {
    font-family: "Public Sans", sans-serif;
    font-weight: regular;
    font-size: 16px;
    line-height: 30px;
  }

  .body2 {
    font-family: "Public Sans", sans-serif;
    font-weight: regular;
    font-size: 15px;
    line-height: 30px;
  }
  #app {
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 32px 40px;
  }

  .navigation__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 309px;
    letter-spacing: 2px;
  }

  .navigation a {
    text-decoration: none;
  }

  .navigation a:visited {
    color: var(--darkBlue);
  }
  .navigation a.router-link-exact-active {
    color: var(--slightlyDesaturatedCyan);
  }

  .main {
    padding: 0 32px;
  }
  .contact {
    margin-top: 80px;
    padding: 56px 136px;
    text-align: center;
    background-color: var(--grayishDarkBlue);
  }

  .contact__logo {
    display: block;
    margin-right: auto;
    margin-left: auto;
    background-color: #ffffff;
    mask: url(./assets/images/logo.svg) no-repeat center / contain;
    -webkit-mask: url(./assets/images/logo.svg) no-repeat center / contain;
    width: 61px;
    height: 32px;
  }

  .contact__navLinks {
    padding: 40px 0;
  }

  .contact__navLink {
    display: block;
    text-decoration: none;
    color: white;
  }

  .contact__navLink:not(:last-child) {
    padding-bottom: 32px;
  }

  .contact__mediaLink:not(:last-child) {
    padding-right: 15px;
  }

  /* TABLET SETTINGS */

  @media (min-width: 768px) {
    .navigation {
      padding-top: 64px;
      padding-right: 40px;
      padding-left: 40px;
    }

    .main {
      padding-right: 40px;
      padding-left: 40px;
    }

    .contact {
      margin-top: 120px;
      display: flex;
      padding: 0 39px;
      justify-content: space-between;
      align-items: center;
    }

    .contact__logo {
      margin-right: 40px;
    }

    .contact__navLinks {
      display: flex;
      align-items: center;
      padding: 0;
    }

    .contact__navLink:not(:last-child) {
      padding: 0 33px 0 0;
    }

    .contact__navLink {
      padding: 33px 0px;
      letter-spacing: 2px;
    }
  }

  @media (min-width: 1440px) {
    .navigation {
      padding-right: 165px;
      padding-left: 165px;
      padding-bottom: 54px;
    }

    .main {
      padding-right: 165px;
      padding-left: 165px;
    }

    .contact {
      padding: 0 165px;
    }
  }
</style>
