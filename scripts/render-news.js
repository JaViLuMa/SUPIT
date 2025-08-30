const NEWS = [
  {
    image: "../assets/images/novost1.jpg",
    date: "28.08.2019.",
    description:
      "Student Josip Stanešić 12. je sistemaš svijeta i dobitnik medalje izvrsnosti na natjecanju WorldSkills Kazan",
    link: "novosti-1.html",
  },
  {
    image: "../assets/images/novost2.jpg",
    date: "22.07.2019.",
    description:
      "Nagrađujemo izvrsnost: Objavljujemo dobitnike stipendijskog natječaja šk. god. 2018./2019.!",
    link: "novosti-2.html",
  },
  {
    image: "../assets/images/novost3.jpg",
    date: "18.04.2019.",
    description: "Digitalno junior ljeto",
    link: "novosti-3.html",
  },
];

function mapDataToReachUsSnippet(image, date, description, link) {
  return `
    <a class="news__card" href="${link}">
      <img src="${image}" class="news__card__image" />
      <h2 class="news__card__title">${date}</h2>
      <p class="news__card__description">
        ${description}
      </p>
    </a>
  `;
}

function renderNewsCards() {
  const newsContainer = document.getElementById("news");

  NEWS.forEach((newsItem) => {
    const card = mapDataToReachUsSnippet(
      newsItem.image,
      newsItem.date,
      newsItem.description,
      newsItem.link
    );
    newsContainer.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderNewsCards();
});
