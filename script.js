function changeBackgroundColor(event) {
    const divcolor = window.getComputedStyle(event.target).backgroundColor;
    document.body.style.backgroundColor = divcolor;

    const heading = document.querySelector(".heading");
    heading.style.color = divcolor;
}
const colorDivCollection = document.querySelectorAll(".color-div");
colorDivCollection.forEach((colorDiv) => {
    colorDiv.addEventListener("click", changeBackgroundColor);
})


// const colorDivCollection = document.querySelector(".color-container").children;
// console.log(colorDivCollection);
