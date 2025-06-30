const memes = [
  {
    img: "meme1.webp",
  },
  {
    img: "meeme2.jpg",
   
  },
  {
    img: "meme3.webp",

  },
  {
    img: "meme4.webp",
  }
];
document.getElementById("generate").addEventListener("click", () => {
  const random = memes[Math.floor(Math.random() * memes.length)];
  document.getElementById("meme-image").src = random.img;
});

