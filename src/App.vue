<template>
  <header class="headerApp">
    <nav class="headerApp__navigation">
      <rounter-link to="/" class="headerApp__logo"
        ><img src="./assets/images/logo.svg" />
      </rounter-link>

      <a class="headerApp__hamburguer" @click="toggleMenu"
        ><img src="./assets/images/icons/hamburger.svg"
      /></a>

      <div
        class="headerApp__hamburguer-menu headerApp__hamburguer-menu--closed"
      >
        <router-link
          class="headerApp__hamburguer-link"
          v-for="(link, index) in links"
          :key="link + index"
          :to="link.path"
          >{{ link.description }}</router-link
        >
      </div>

      <div class="headerApp__navLinks">
        <router-link
          class="headerApp__navLink"
          v-for="(link, index) in links"
          :key="link + index"
          :to="link.path"
          >{{ link.description }}</router-link
        >
      </div>
    </nav>
  </header>

  <main class="mainApp">
    <router-view />
  </main>

  <footer class="footerApp">
    <nav class="footerApp__navLinks">
      <router-link class="footerApp__logo" to="/"></router-link>

      <router-link
        class="footerApp__navLink"
        v-for="(link, index) in links"
        :key="link + index"
        :to="link.path"
        >{{ link.description }}
      </router-link>
    </nav>

    <div class="footerApp__socialMedias">
      <a
        v-for="(media, index) in socialMedias"
        :key="media + index"
        :href="media.path"
        target="_blank"
        class="footerApp__mediaLink"
        ><img
          class="footerApp__media-image"
          :src="require('./assets/images/icons/' + media.name + '.svg')"
          :alt="'Icone do' + media.name"
        />
      </a>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "App",

    created() {
      this.$store.dispatch("getProjects");
    },
    data() {
      return {
        links: [
          { path: "/", description: "HOME" },
          { path: "/portfolio", description: "PORTFOLIO" },
          { path: "/contact", description: "CONTACT ME" },
        ],
        socialMedias: [
          { name: "github", path: "https://github.com/Alexandre-Akira" },
          {
            name: "linkedin",
            path: "https://www.linkedin.com/in/alexandre-akira-enjiu-baa5411b3/",
          },
          { name: "twitter", path: "" },
        ],
      };
    },
    methods: {
      toggleMenu() {
        let mobileMenu = document.querySelector(".headerApp__hamburguer-menu");
        let html = document.querySelector("html");
        let isMobileMenuOpen;
        if (
          mobileMenu.classList.contains(
            "headerApp__hamburguer-menu--closed"
          ) === true
        ) {
          mobileMenu.classList.remove("headerApp__hamburguer-menu--closed");
          setTimeout(() => {
            mobileMenu.style.height = "186px";

            isMobileMenuOpen = true;
            html.onclick = () => {
              if (isMobileMenuOpen === true) {
                mobileMenu.style.height = "0px";
                setTimeout(() => {
                  mobileMenu.classList.add(
                    "headerApp__hamburguer-menu--closed"
                  );
                  isMobileMenuOpen = false;
                }, 500);
              } else {
                return;
              }
            };
          }, 200);
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

  /* LINKS & IMG*/

  a {
    text-decoration: none;
    color: inherit;
  }

  a.router-link-exact-active {
    color: var(--slightlyDesaturatedCyan) !important;
  }

  img {
    width: 100%;
    height: auto;
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

  .headerApp__navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 32px 40px;
  }

  .headerApp__hamburguer {
    display: block;
  }

  .headerApp__hamburguer-menu {
    position: absolute;
    width: 223px;
    height: 0px;
    top: 88px;
    right: 32px;
    background: var(--darkBlue);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Public Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;
    overflow: hidden;
    transition: all 500ms;
  }

  .headerApp__hamburguer-menu--closed {
    display: none;
  }

  .headerApp__navLinks {
    display: none;
    font-family: "Public Sans", sans-serif;
    font-weight: regular;
    font-size: 12px;
    line-height: 30px;
  }

  .headerApp__navLink:visited {
    color: var(--darkBlue);
  }

  .mainApp {
    padding: 0 32px;
  }
  .footerApp {
    margin-top: 80px;
    padding: 56px 136px;
    text-align: center;
    background-color: var(--grayishDarkBlue);
  }

  .footerApp__logo {
    display: block;
    margin-right: auto;
    margin-left: auto;
    background-color: #ffffff;
    mask: url(./assets/images/logo.svg) no-repeat center / contain;
    -webkit-mask: url(./assets/images/logo.svg) no-repeat center / contain;
    width: 61px;
    height: 32px;
  }

  .footerApp__navLinks {
    font-family: "Public Sans", sans-serif;
    font-weight: regular;
    font-size: 12px;
    line-height: 30px;
  }

  .footerApp__navLink {
    letter-spacing: 2px;
    display: block;
    text-decoration: none;
    color: white;
    padding-bottom: 24px;
  }

  .footerApp__navLink:nth-child(2) {
    margin-top: 24px;
  }

  .footerApp__media-image {
    width: unset;
    height: unset;
    cursor: pointer;
  }

  .footerApp__mediaLink:not(:last-child) {
    padding-right: 15px;
  }

  /* TABLET SETTINGS */

  @media (min-width: 768px) {
    .headerApp__navigation {
      padding-top: 64px;
      padding-right: 40px;
      padding-left: 40px;
      padding-bottom: 47px;
    }

    .headerApp__hamburguer {
      display: none;
    }

    .headerApp__navLinks {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 306px;
      letter-spacing: 2px;
    }
    .mainApp {
      padding-right: 40px;
      padding-left: 40px;
    }

    .footerApp {
      margin-top: 120px;
      display: flex;
      padding: 24px 39px;
      justify-content: space-between;
      align-items: center;
      margin-top: 96px;
    }

    .footerApp__logo {
      margin-right: 40px;
    }

    .footerApp__navLinks {
      display: flex;
      align-items: center;
    }
    .footerApp__navLink {
      padding: unset;
    }

    .footerApp__navLink:nth-child(2) {
      margin: unset;
    }

    .footerApp__navLink:not(:last-child) {
      padding: 0 33px 0 0;
    }
  }

  @media (min-width: 1440px) {
    .headerApp__navigation {
      padding-right: 165px;
      padding-left: 165px;
      padding-bottom: 54px;
    }

    .mainApp {
      padding-right: 165px;
      padding-left: 165px;
    }

    .footerApp {
      padding: 33px 165px;
    }
  }
</style>
