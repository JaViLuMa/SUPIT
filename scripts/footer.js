const MAIN_FOOTER_SNIPPET = `
  <p class="footer__text">BUDI IZVRSTAN U ONOM ŠTO VOLIŠ</p>
  <p class="footer__text footer__text--red">ZAISKRI</p>
`;

document.addEventListener("DOMContentLoaded", () => {
  const footerElement = document.getElementById("footer");

  footerElement.innerHTML = MAIN_FOOTER_SNIPPET;
});
