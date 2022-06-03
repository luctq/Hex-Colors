function changeBackgroundColor() {
    const hexcode1 = Math.floor(Math.random()*16777215).toString(16);
    const hexcode2 = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName("body")[0].style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})` ;
    document.querySelector("#hexcode1").textContent = hexcode1;
    document.querySelector("#hexcode2").textContent = hexcode2;
}