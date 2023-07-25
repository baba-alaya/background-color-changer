const content = document.querySelector('.content');
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
const copyCode = document.querySelector('.copy-code');

const colorFormat = [ 0, 1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" ,"E" , "F" ]

HexColors = function() {
    let hex = '#' ;
    for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * colorFormat.length) ;
        hex += colorFormat[num]
    }
    content.style.backgroundColor = hex
    color.textContent = hex
}
changeColor.addEventListener('click', function() {
   
})

changeColor.addEventListener("click", HexColors)
window.addEventListener("load", HexColors)


let CopyCode = async function () {
  await navigator.clipboard.writeText(color.textContent)
    alert('color code copied succesfully')
}

copyCode.addEventListener("click", CopyCode)