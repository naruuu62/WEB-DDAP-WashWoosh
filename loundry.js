document.addEventListener("DOMContentLoaded", () => {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach((card) => {
    const buttons = card.querySelectorAll(".select-button");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });
  });
});
