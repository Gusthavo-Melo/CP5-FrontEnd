window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("shadow-md", "bg-white/90");
  } else {
    header.classList.remove("shadow-md", "bg-white/90");
  }
});
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();

    if (name === "" || email === "") {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    alert(`Obrigado, ${name}! Seu contato foi registrado com sucesso.`);
    form.reset();
  });
}