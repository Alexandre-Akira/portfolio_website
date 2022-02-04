<template>
  <div>
    <div class="divider"></div>
    <div class="contact__information">
      <h2 class="contact__title">Get in Touch</h2>
      <p class="contact__text">
        I’d love to hear about what you’re working on and how I could help. I’m
        currently looking for a new role and am open to a wide range of
        opportunities. My preference would be to find a position in a company in
        London. But I’m also happy to hear about opportunites that don’t fit
        that description. I’m a hard-working and positive person who will always
        approach each task with a sense of purpose and attention to detail.
        Please do feel free to check out my online profiles below and get in
        touch using the form.
      </p>
      <div class="contact__mediaLinks">
        <a
          v-for="(media, index) in socialMedias"
          :key="media + index"
          :href="media.path"
          target="_blank"
          class="contact__mediaLink"
          ><img
            class="contact__media-image"
            :src="
              require('../assets/images/icons/' + media.name + '-dark-blue.svg')
            "
            :alt="'Icone do' + media.name"
          />
        </a>
      </div>
      <div class="divider"></div>
    </div>

    <form
      id="contact__form--send"
      action=""
      class="contact__form"
      @submit.prevent="sendForm"
    >
      <h2 class="contact__title">Contact Me</h2>
      <div
        class="contact__inputs"
        v-for="(contactInput, index) in contactInputs"
        :key="contactInput + index"
      >
        <FormInput></FormInput>
      </div>
      <div class="contact__text-area">
        <label for="contact__input--message" class="contact__label"
          >Message</label
        >
        <textarea
          required
          placeholder="How can i help?"
          name=""
          class="contact__input"
          id="contact__input--message"
          cols="30"
          rows="10"
        ></textarea>
      </div>

      <FormButton
        class="contact__form-button"
        requestMethod="post"
        text="Send Message"
        form="contact__form--send"
      ></FormButton>
    </form>
  </div>
</template>

<script>
  import FormButton from "../components/Buttons/FormButton.vue";
  import FormInput from "../components/Inputs/FormInput.vue";
  export default {
    name: "Contact",
    components: { FormButton, FormInput },
    data() {
      return {
        formData: {
          user: {
            name: String,
            email: String,
            message: String,
          },
        },
        socialMedias: [
          { name: "github", path: "https://github.com/Alexandre-Akira" },
          {
            name: "linkedin",
            path: "https://www.linkedin.com/in/alexandre-akira-enjiu-baa5411b3/",
          },
          { name: "twitter", path: "" },
        ],
        contactInputs: [
          {
            label: "Name",
            placeholder: "Jane Appleseed",
            type: "text",
            value: this.name,
          },
          {
            label: "Email",
            placeholder: "email@example.com",
            type: "email",
            value: this.email,
          },
        ],
      };
    },
    methods: {
      sendForm() {
        console.log(this.formData);
      },
    },
  };
</script>

<style scoped>
  .divider {
    height: 1px;
    background-color: var(--grayishDarkBlue);
    mix-blend-mode: normal;
    opacity: 0.15;
  }

  .contact__title {
    font-family: "Ibarra Real Nova", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 42px;

    letter-spacing: -0.357143px;

    color: #33323d;
  }

  .contact__title:nth-child(1) {
    margin: 24px 0;
  }

  .contact__text {
    font-family: Public Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #33323d;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .contact__mediaLinks {
    display: flex;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 32px;
  }

  .contact__mediaLink:not(:last-child) {
    padding-right: 15px;
  }

  .contact__title:nth-child(5) {
    margin-top: 32px;
    margin-bottom: 24px;
  }

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

  .contact__form {
    width: 100%;
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

  /* DESKTOP */
  @media (min-width: 1440px) {
    .divider:nth-child(1) {
      margin-top: 30px;
    }
    .contact__information {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .contact__information .contact__title {
      margin-top: 48px;
    }

    .contact__text {
      margin-top: 48px;
    }

    .contact__mediaLinks {
      grid-column-start: 2;
      grid-column-end: 3;
      margin-bottom: 48px;
    }
    .divider:nth-child(4) {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    .contact__form {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .contact__form .contact__title,
    .contact__form .contact__inputs:nth-child(2) {
      margin-top: 48px;
    }
    .contact__inputs,
    .contact__text-area,
    .contact__form-button {
      grid-column-start: 2;
      grid-column-end: 3;
    }

    .contact__form-button {
      margin-bottom: 60px;
    }
  }
</style>
