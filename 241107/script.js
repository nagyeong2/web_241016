const path = anime.path(".svg path");

anime({
  targets: ".circle",
  translatex: path("x"),
  translatey: path("y"),
  easing: "linear",
  duration: 10000,
  loop: true,
});
