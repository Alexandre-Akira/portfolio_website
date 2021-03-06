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
        <FormInput
          class="contact__input"
          :label="contactInput.label"
          v-model="form.data[contactInput.label.toLowerCase()]"
          :error="form.errorText[contactInput.label.toLowerCase()]"
        ></FormInput>
      </div>
      <div class="contact__text-area">
        <FormTextArea
          label="Message"
          v-model="form.data.message"
          :error="form.errorText.message"
        ></FormTextArea>
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
  import FormTextArea from "../components/Inputs/FormTextArea.vue";
  export default {
    name: "Contact",
    components: { FormButton, FormInput, FormTextArea },
    data() {
      return {
        form: {
          data: {
            name: "",
            email: "",
            message: "",
          },
          errorText: {
            name: "",
            email: "",
            message: "",
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
            value: "",
          },
          {
            label: "Email",
            placeholder: "email@example.com",
            type: "email",
            value: "",
          },
        ],
      };
    },
    methods: {
      sendForm() {
        let blankField = false;
        //Validar se os campos do form nao estao vazios
        for (const property in this.form.data) {
          if (this.form.data[property] === "") {
            this.form.errorText[property] = "This field is required";
            blankField = true;
          } else {
            this.form.errorText[property] = "";
          }
        }
        this.validateEmail(this.form.data.email)
          ? (this.form.errorText.email = "")
          : (this.form.errorText.email = "Please use a valid email address");
        if (blankField === false) {
          console.log("Sending this form:", this.form.data);
        }
      },

      validateEmail(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
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

  .contact__form {
    width: 100%;
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
