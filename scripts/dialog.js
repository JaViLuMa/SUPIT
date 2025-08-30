const DIALOG_SNIPPET = `
  <div class="dialog__content__container">
    <div class="dialog__content__header">
      <img
        class="dialog__content__header__image"
        src="./assets/icons/contact-blue.svg"
      />
      <p class="dialog__content__header__text">Kontaktirajte nas</p>
    </div>
    <form onsubmit="handleSubmitContactForm(event)" class="dialog__contact_form">
      <label class="form__label">
        <p class="form__label--text">Puno ime</p>
        <input class="form__input" type="text" name="full_name" required />
      </label>
      <label class="form__label">
        <p class="form__label--text">E-mail</p>
        <input class="form__input" type="email" name="email" required />
      </label>
      <label class="form__label">
        <p class="form__label--text">Važnost poruke</p>
        <select class="form__input" name="priority" required>
          <option value="low">Niska</option>
          <option value="high">Visoka</option>
        </select>
      </label>
      <label class="form__label">
        <p class="form__label--text">Poruka</p>
        <textarea
          class="form__input"
          name="message"
          rows="5"
          required
        ></textarea>
      </label>
      <label class="form__label form__label--row">
        <p class="form__label--text">Želim primati obavijesti</p>
        <input type="checkbox" name="notifications" />
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

async function sendContactFormData(formValues) {
  const { fullName, email, priority, message, notifications } = formValues;

  const formResponse = await fetch(
    "https://www.fulek.com/mvc/supit/project-contact-form",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FullName: fullName,
        Email: email,
        Importance: priority,
        ReceiveNewsletter: Boolean(notifications),
        Message: message,
      }),
    }
  );

  const formData = await formResponse.json();

  console.log("formData", formData);
}

async function handleSubmitContactForm(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const fullName = formData.get("full_name");
  const email = formData.get("email");
  const priority = formData.get("priority");
  const message = formData.get("message");
  const notifications = formData.get("notifications");

  await sendContactFormData({
    fullName,
    email,
    priority,
    message,
    notifications,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const dialogElement = document.getElementById("contact-form");

  dialogElement.innerHTML = DIALOG_SNIPPET;
});
