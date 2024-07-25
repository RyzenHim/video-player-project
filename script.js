let playBtn = document.querySelector(".btn");
let thumbnail = document.getElementById("thumbnail");
let video = document.getElementById("video");

playBtn.addEventListener("click", () => {
  if (thumbnail.classList.contains("active")) {
    console.log("active class is present");
    thumbnail.classList.remove("active");
    video.classList.add("active");
    playBtn.style.backgroundColor = "red";
    playBtn.innerHTML = "Stop";
  } else {
    console.log("active class is not present");
    video.classList.remove("active");
    thumbnail.classList.add("active");
    playBtn.style.backgroundColor = "green";
    playBtn.innerHTML = "Watch Now";
    video.pause();
    video.currentTime = 0;
  }
});
