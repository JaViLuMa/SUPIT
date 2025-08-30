function loginLogoutSnippet(isLoggedIn, username) {
  if (!isLoggedIn) {
    return `
      <a class="navbar__link" href="login.html" hreflang="hr"
        ><img src="./assets/icons/log-in.svg" class="navbar__icon" />Prijava</a
      >
    `;
  }

  return `
    <button id="logout" class="navbar__link navbar__link--button">
      <img src="./assets/icons/log-out.svg" class="navbar__icon" /> Odjavi <span class="navbar__username">${username}</span>
    </button>
  `;
}

function nastavniPlanSnippet(isLoggedIn) {
  if (!isLoggedIn) {
    return "";
  }

  return `
    <a class="navbar__link" href="nastavni-plan.html" hreflang="hr"
      ><img src="./assets/icons/home.svg" class="navbar__icon" />Nastavni
      plan</a
    >
  `;
}

const MAIN_NAVBAR_SNIPPET = (isLoggedIn, username) => {
  return `
    <div class="navbar__links" id="navbar-links">
      ${loginLogoutSnippet(isLoggedIn, username)}
      <a
        class="navbar__link" href="index.html" hreflang="hr"
        ><img src="./assets/icons/home.svg" class="navbar__icon" />Početna</a
      >
      <a class="navbar__link" href="o-nama.html" hreflang="hr"
        ><img src="./assets/icons/about-us.svg" class="navbar__icon" />O
        nama</a
      >
      <a class="navbar__link" href="novosti.html" hreflang="hr"
        ><img src="./assets/icons/news.svg" class="navbar__icon" />Novosti</a
      >
      ${nastavniPlanSnippet(isLoggedIn)}
      <button type="button" class="navbar__link navbar__link--button" onclick="handleContactUsDialogOpen()"
        ><img
          src="./assets/icons/contact.svg"
          class="navbar__icon"
        />Kontakt</button
      >
    </div>
    <button type="button" id="navbar-toggle" class="navbar__toggle">
      <img
        src="./assets/icons/menu.svg"
        class="navbar__icon navbar__icon--toggle"
      />
    </button>
  `;
};

function toggleNavbarMenu() {
  const toggleButton = document.getElementById("navbar-toggle");
  const navbarLinks = document.getElementById("navbar-links");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbar__links--open");
  });
}

function setActiveLink(navbar) {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navbar.querySelectorAll(".navbar__links a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) {
      return;
    }

    const mainFileName = href.split("/").pop();
    const mainFileNameWithoutHashedPath = mainFileName.split("#")[0];

    if (mainFileNameWithoutHashedPath === currentPage) {
      link.classList.add("navbar__link--active");
    } else {
      link.classList.remove("navbar__link--active");
    }
  });
}

function handleLogout() {
  const logoutButtonElement = document.getElementById("logout");

  if (!logoutButtonElement) {
    return;
  }

  logoutButtonElement.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");

    window.location.href = "login.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navbarElement = document.getElementById("navbar");

  const token = sessionStorage.getItem("token");
  const username = sessionStorage.getItem("username");

  navbarElement.innerHTML = MAIN_NAVBAR_SNIPPET(Boolean(token), username);

  setActiveLink(navbarElement);
  handleLogout();
  toggleNavbarMenu();
});
