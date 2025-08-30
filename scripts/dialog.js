const DIALOG_SNIPPET = `
  <div class="dialog__content__container">
    <div class="dialog__content__header">
      <img
        class="dialog__content__header__image"
        src="./assets/icons/contact-blue.svg"
      />
      <p class="dialog__content__header__text">Kontaktirajte nas</p>
    </div>
    <form
      action="https://www.fulek.com/mvc/supit/project-contact-form"
      method="post"
      class="dialog__contact_form"
    >
      <label class="form__label">
        <p class="form__label--text">Puno ime</p>
        <input class="form__input" type="text" name="FullName" required />
      </label>
      <label class="form__label">
        <p class="form__label--text">E-mail</p>
        <input class="form__input" type="email" name="Email" required />
      </label>
      <label class="form__label">
        <p class="form__label--text">Važnost poruke</p>
        <select class="form__input" name="Importance" required>
          <option value="low">Niska</option>
          <option value="high">Visoka</option>
        </select>
      </label>
      <label class="form__label">
        <p class="form__label--text">Poruka</p>
        <textarea
          class="form__input"
          name="Message"
          rows="5"
          required
        ></textarea>
      </label>
      <label class="form__label form__label--row">
        <p class="form__label--text">Želim primati obavijesti</p>
        <input type="checkbox" name="ReceiveNewsletter" />
      </label>
      <div class="form__buttons__container">
        <button class="form__button form__button--blue" type="submit">
          Pošalji
        </button>
        <button onclick="handleContactUsDialogClose()" class="form__button form__button--red" type="button">
          Odustani
        </button>
      </div>
      <div
        id="form-error"
        class="form__label--text form__label--text_red"
      ></div>
    </form>
  </div>
`;

function handleContactUsDialogOpen() {
  const contactUsDialogElement = document.getElementById("contact-form");

  const bodyElement = document.body;

  contactUsDialogElement.showModal();

  bodyElement.style.overflow = "hidden";
}

function handleContactUsDialogClose() {
  const contactUsDialogElement = document.getElementById("contact-form");

  const bodyElement = document.body;

  contactUsDialogElement.close();

  bodyElement.style.overflow = "auto";
}

document.addEventListener("DOMContentLoaded", () => {
  const dialogElement = document.getElementById("contact-form");

  dialogElement.innerHTML = DIALOG_SNIPPET;
});
