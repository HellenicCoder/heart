const image = document.querySelector(".container"),
heartIcon = document.querySelector(".heart");

//let add double click function
image.addEventListener("dblclick", (e) =>{
    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;

    heartIcon.style.left = `${xValue}px`
    heartIcon.style.top = `${yValue}px`

    heartIcon.classList.add("active");
    setTimeout(() => {
        heartIcon.classList.remove("active");
    }, 1000);
});