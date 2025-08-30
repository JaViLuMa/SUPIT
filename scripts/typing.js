const BASE_TEXT = "Budi izvrstan u onom što";
const BASE_END_FIRST = "vidiš!";
const BASE_END_SECOND = "voliš.";
const BELOW_BASE = "zaiskri.";

const TYPE_SPEED_PER_CHAR = 80;
const DELETE_SPEED_PER_CHAR = 50;
const SHORT_PAUSE = 500;
const LONG_PAUSE = 1000;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeChars(element, text, msPerChar) {
  for (const char of text) {
    element.textContent += char;

    await sleep(msPerChar);
  }
}

async function deleteChars(element, count, msPerChar) {
  for (let i = 0; i < count; i++) {
    element.textContent = element.textContent.slice(0, -1);

    await sleep(msPerChar);
  }
}

async function run(
  firstLine,
  secondLine,
  firstCaret,
  secondCaret,
  secondLineContainer
) {
  // Type base sentence
  await typeChars(firstLine, BASE_TEXT, TYPE_SPEED_PER_CHAR);

  // Add and remove vidis
  await typeChars(firstLine, ` ${BASE_END_FIRST}`, TYPE_SPEED_PER_CHAR);
  await sleep(LONG_PAUSE);
  await deleteChars(
    firstLine,
    BASE_END_FIRST.length + 1,
    DELETE_SPEED_PER_CHAR
  );

  // Add volis
  await typeChars(firstLine, ` ${BASE_END_SECOND}`, TYPE_SPEED_PER_CHAR);
  await sleep(SHORT_PAUSE);

  // Move caret to second line
  firstCaret.style.display = "none";
  secondLineContainer.classList.add("typing_text_line__second_line--show");
  await sleep(100);
  await typeChars(secondLine, BELOW_BASE.toUpperCase(), TYPE_SPEED_PER_CHAR);
  secondCaret.style.display = "inline-block";
}

document.addEventListener("DOMContentLoaded", () => {
  const firstLineElement = document.getElementById("first_line");
  const secondLineElement = document.getElementById("second_line");

  const firstCaret = document.getElementById("first_caret");
  const secondCaret = document.getElementById("second_caret");

  const secondLineContainer = document.getElementById("second_line_container");

  run(
    firstLineElement,
    secondLineElement,
    firstCaret,
    secondCaret,
    secondLineContainer
  );
});
