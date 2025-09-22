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
const tracks = [
  {
    title: "MBB - Destination",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A304162133&color=%23ff5500"></iframe>`
  },
  {
    title: "Peyruis - Swing",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A432949887&color=%23ff5500"></iframe>`
  },
  {
    title: "Pyrosion - Up Above",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A402531966&color=%23ff5500"></iframe>`
  },
  {
    title: "Scandinavianz - Campfire",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A667477364&color=%23ff5500"></iframe>`
  },
  {
    title: "Oshóva - Chilling",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A283476174&color=%23ff5500"></iframe>`
  },
  {
    title: "Amine Maxwell - Lovely",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A657492500&color=%23ff5500"></iframe>`
  },
  {
    title: "Apashe - Uebok (Gottan Run)",
    embed: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1102347877&color=%23ff5500"></iframe>`
  }
];

// Elementos
const musicList = document.getElementById("music-list");
const playlist = document.getElementById("playlist");

// Renderiza músicas disponíveis
tracks.forEach((track, index) => {
  const li = document.createElement("li");
  li.className = "bg-white p-4 rounded-lg shadow flex justify-between items-center";

  li.innerHTML = `
    <span class="font-medium">${track.title}</span>
    <button data-index="${index}" class="add-btn bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-800">
      Adicionar
    </button>
  `;

  musicList.appendChild(li);
});

// Adiciona música à playlist
musicList.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-btn")) {
    const index = e.target.getAttribute("data-index");
    const track = tracks[index];

    // Remove aviso inicial se houver
    if (playlist.querySelector("p")) {
      playlist.innerHTML = "";
    }

    // Adiciona player à playlist
    const div = document.createElement("div");
    div.innerHTML = `
      <h3 class="font-semibold mb-2">${track.title}</h3>
      ${track.embed}
    `;
    playlist.appendChild(div);
  }
});