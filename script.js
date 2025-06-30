const memes = [
  {
    img: "memes/meme1.webp",
  },
  {
    img: "memes/meme2.jpg",
   
  },
  {
    img: "memes/meme3.webp",

  },
  {
    img: "memes/meme4.webp",
  }
];
document.getElementById("generate").addEventListener("click", () => {
  const random = memes[Math.floor(Math.random() * memes.length)];
  document.getElementById("meme-image").src = random.img;
});

