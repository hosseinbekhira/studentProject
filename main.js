// For Make background with diffrent colors

let parentDiv = document.querySelector(".cont-parts"),
  allGarbage = document.querySelectorAll(".garbage"),
  arrayAllGarbage = Array.from(allGarbage),
  btnStart = document.querySelector(".control .btn-start"),
  btnEnd = document.querySelector(".control .btn-reset"),
  carWheel = document.querySelectorAll(".car .g-wheel .wheel-circle"),
  arrayCarWheel = Array.from(carWheel),
  car1 = document.querySelector(".car-position-1"),
  car2 = document.querySelector(".car-position-2");

function newContent() {
  let numberBuild = 48,
    arrayColors = ["a", "b", "c", "d", "e", "f", "g"],
    arrayColorRandom = [],
    arrayTraffic = [
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "none",
      "b",
      "none",
      "none",
      "none",
      "b",
      "none",
      "none",
      "none",
      "none",
      "none",
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "none",
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "b",
      "none",
      "none",
      "none",
      "b",
      "none",
      "none",
      "none",
      "b",
    ];

  for (let i = 0; i <= numberBuild; i++) {
    let randomLetterNumber = Math.floor(Math.random() * arrayColors.length);
    arrayColorRandom.push(arrayColors[randomLetterNumber]);
  }

  for (let i = 0; i < numberBuild; i++) {
    parentDiv.innerHTML += `
    <div class="part">
    <div class="cont-town">
        <div class="building ${arrayColorRandom[i]}-bg-build">
            <div class="cont-window">
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
                <div class="window"></div>
            </div>
        </div>
        <div class="cont-tree-lawn">
            <div class="tree scale-8"></div>
            <div class="lawn scale-4 position-1">
                <div class="base"></div>
                <div class="triangle t1"></div>
                <div class="triangle t2"></div>
                <div class="triangle t3"></div>
                <div class="triangle t4"></div>
            </div>
            <div class="lawn scale-4 position-2">
                <div class="base"></div>
                <div class="triangle t1"></div>
                <div class="triangle t2"></div>
                <div class="triangle t3"></div>
                <div class="triangle t4"></div>
            </div>
            <div class="lawn scale-4 position-3">
                <div class="base"></div>
                <div class="triangle t1"></div>
                <div class="triangle t2"></div>
                <div class="triangle t3"></div>
                <div class="triangle t4"></div>
            </div>
            <div class="tree scale-8"></div>
        </div>
        <div class="traffic-light scale-6 ${arrayTraffic[i]}">
            <div class="part-color">
                <div class="circle-color red"></div>
                <div class="circle-color green"></div>
                <div class="circle-color yellow"></div>
            </div>
            <div class="stand"></div>
        </div>
    </div>
</div>
    `;
  }
}
document.body.onload = () => {
  newContent();
};

btnStart.onclick = () => {
  console.log("start clicked");
  console.log(arrayCarWheel);
  arrayCarWheel.forEach((wheel) => {
    wheel.classList.add("animation-wheel");
  });
  car1.style.left = 140 + "px";
  car2.style.left = 139 + "px";
  let count = 1;
  function moveCar() {
    count++;
    switch (count) {
      case 3:
        arrayAllGarbage[0].classList.add("hide-garbage");
        car1.style.left = 228 + "px";
        car2.style.top = 506 + "px";
        break;
      case 6:
        car1.style.top = 251 + "px";
        car2.style.left = 328 + "px";
        arrayAllGarbage[4].classList.add("hide-garbage");
        break;
      case 9:
        car1.style.left = 335 + "px";
        car2.style.top = 382 + "px";
        break;
      case 12:
        car2.style.left = 328 + "px";
        arrayAllGarbage[1].classList.add("hide-garbage");
        car1.style.left = 435 + "px";
        break;
      case 15:
        car1.style.top = 122 + "px";
        car2.style.left = 428 + "px";
        break;
      case 18:
        car1.style.left = 635 + "px";
        car2.style.left = 628 + "px";
        arrayAllGarbage[5].classList.add("hide-garbage");
        break;
      case 21:
        car1.style.left = 1035 + "px";
        arrayAllGarbage[2].classList.add("hide-garbage");
        car2.style.top = 251 + "px";
        break;
      case 24:
        car1.style.left = 1135 + "px";
        arrayAllGarbage[3].classList.add("hide-garbage");
        car2.style.left = 728 + "px";
        break;
      case 27:
        car2.style.left = 928 + "px";
        arrayCarWheel[0].classList.remove("animation-wheel");
        arrayCarWheel[1].classList.remove("animation-wheel");
        arrayCarWheel[2].classList.remove("animation-wheel");
        arrayAllGarbage[6].classList.add("hide-garbage");
        break;
      case 30:
        car2.style.top = 382 + "px";
        break;
      case 33:
        car2.style.left = 1135 + "px";
        arrayAllGarbage[7].classList.add("hide-garbage");
        break;
      case 36:
        clearInterval(countTime);
        arrayCarWheel[3].classList.remove("animation-wheel");
        arrayCarWheel[4].classList.remove("animation-wheel");
        arrayCarWheel[5].classList.remove("animation-wheel");
        break;
    }
  }
  let countTime = setInterval(() => {
    moveCar();
  }, 1000);
};

btnEnd.onclick = () => {
  console.log("End clicked");
  arrayAllGarbage.forEach((garbage) => {
    garbage.classList.remove("hide-garbage");
  });
  car1.style.left = -34 + "px";
  car1.style.top = 122 + "px";
  car2.style.top = 382 + "px";
  car2.style.left = -34 + "px";
};

// animation-wheel
