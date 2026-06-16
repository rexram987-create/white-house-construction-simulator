const buttonsContainer = document.getElementById("timeline-buttons");
const periodEl = document.getElementById("stage-period");
const titleEl = document.getElementById("stage-title");
const descriptionEl = document.getElementById("stage-description");
const presidentEl = document.getElementById("stage-president");
const figureEl = document.getElementById("stage-figure");
const themeEl = document.getElementById("stage-theme");

function renderStage(stage, activeButton) {
  periodEl.textContent = stage.period;
  titleEl.textContent = stage.title;
  descriptionEl.textContent = stage.description;
  presidentEl.textContent = stage.president;
  figureEl.textContent = stage.figure;
  themeEl.textContent = stage.theme;

  document.querySelectorAll(".timeline-buttons button").forEach((button) => {
    button.classList.remove("active");
  });

  if (activeButton) {
    activeButton.classList.add("active");
  }
}

function buildTimeline() {
  timelineStages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = stage.period;
    button.addEventListener("click", () => renderStage(stage, button));
    buttonsContainer.appendChild(button);

    if (index === 0) {
      renderStage(stage, button);
    }
  });
}

buildTimeline();
