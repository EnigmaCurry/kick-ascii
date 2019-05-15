  window.onload = function() {
    var crt = document.getElementById("CRT_BOX")
    var urlParams = new URLSearchParams(window.location.search)
    var cast = urlParams.get("cast") != null ? urlParams.get("cast") : "index"
    var speed = urlParams.get("speed") == null ? " speed=\"1\" " : " speed=\"" + urlParams.get("speed") + "\" "
    var bg = urlParams.get("bg")
    var autoplay = urlParams.get("autoplay") === "false" ? "" : " autoplay=\"true\" "
    var loop = urlParams.get("loop") === "false" ? "" : " loop=\"true\" "
    var preload = urlParams.get("preload") === "false" ? "" : " preload=\"true\" "
    var fontsize = urlParams.get("fontsize") == null ? " fontsize=\"small\" " : " fontsize=\"" + urlParams.get("fontsize") + "\" "

    crt.innerHTML = "<asciinema-player id=\"asciinema-player\" src=\"cast/" + cast + ".cast\"" + fontsize + autoplay + loop + preload + speed + "></asciinema-player>"

    var player = document.getElementsByTagName("asciinema-player")[0]

    var wrapper = document.getElementsByClassName("asciinema-player-wrapper")[0]

    var background = document.createElement("img")
    background.classList.add("bg_image")

    if (bg != null) {
      background.src = "img/" + bg
      document.body.append(background)
    }

    window.addEventListener('resize',  function() {
      var control_bar_offset = 23;
      var scale = (document.body.clientHeight / (wrapper.clientHeight + control_bar_offset));
      crt.style.transform = "scale("+scale+")";
      if (wrapper.clientWidth * scale < document.body.clientWidth) {
        crt.style.transform = "scale("+scale+") translate(-50%, 0%)";
        crt.style.left = "50%"
      }
    });
    window.dispatchEvent(new Event('resize'));

    var playing = true;
    let drag = false;

    // Click anywhere to play/pause
    // Allow selecting/dragging text without affecting play/pause
    document.addEventListener('mousedown', () => drag = false);
    document.addEventListener('mousemove', () => drag = true);
    document.addEventListener('mouseup', function() {
      if(!drag){
        if (playing) {
          player.pause()
          playing = false
        } else {
          player.play()
          playing = true
        }
      }
    })
  }
