const content = document.querySelector('.content');
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const copyCode = document.querySelector('.copy-code');

// console.log(changeColor)
let RgbColors = function () {
    const red = Math.floor(Math.random() * 256) + 1;
    const green = Math.floor(Math.random() * 256) + 1;
    const blue = Math.floor(Math.random() * 256) + 1;

    const RandomColor = "rgb" + `(${red} , ${green} , ${blue})`
    content.style.backgroundColor = RandomColor
    color.textContent = RandomColor
}

changeColor.addEventListener("click", RgbColors)
window.addEventListener("load", RgbColors)


let CopyCode = async function () {
await   navigator.clipboard.writeText(color.textContent)
    alert('color code copied succesfully')
}

copyCode.addEventListener("click", CopyCode)



// navigator.clipboard.readText().then((value) => {
    //      document.querySelector("p").innerText = value;
    //    }