function toggleMode() {
  const html = document.documentElement;

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light");
  // } else {
  //   html.classList.add("light");
  // }

  html.classList.toggle("light");

  //pegar imagem
  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Foto do jair na natureza");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Foto do Jair Torezone com chapéu e sorrindo");
  }
}
