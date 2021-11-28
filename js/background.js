const images = ["aurora.jpg", "night.jpg", "road.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// floor를 쓰는 이유는 개수보다 -1 수가 나와야 하므로 (due to 배열은 0부터 시작잉게)

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage)
document.body.style.backgroundImage = `url(img/${chosenImage})`
// prepend 쓰면 맨 앞에 생성됨.