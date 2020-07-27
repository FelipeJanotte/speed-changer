console.log("WhatsappSpeedChanger is running.")

// ._3D5PJ _1OJ99 _3nwiG div class
const interval = setInterval(() => {
  const header = document.querySelector("header")
  if(header){
    console.log(header)
    clearInterval(interval)

    const button = document.createElement("button")
    button.innerHTML = "2x"
    button.classList.add("speed-two-button")

    button.addEventListener('click', ()=> {
      const audios = document.querySelectorAll("audio")
      audios.forEach((audio) =>{
        audio.playbackRate = 2
      })
    })

    header.appendChild(button)
  }
}, 1000);
