document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement.parentElement;
    const icon = question.querySelector("i");

    // Alternar classe ativa
    item.classList.toggle("active");

    // Mudar ícone
    if (item.classList.contains("active")) {
      icon.classList.replace("fa-plus", "fa-minus");
    } else {
      icon.classList.replace("fa-minus", "fa-plus");
    }
  });
});
