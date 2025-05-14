const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
      const modal = button.nextElementSibling; // assumes modal follows button
      const closeBtn = modal.querySelector(".close");

button.addEventListener("click", () => {
        modal.style.display = "block";
      });

closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });

window.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
});

