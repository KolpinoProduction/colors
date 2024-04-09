const openModal = () => {
    const modal = document.getElementById("exampleModal");
    const span = document.getElementsByClassName("close")[0];
    const btn = document.getElementById("exampleModalButton");

    btn.onclick = function () {
        closeModal();
    }
    span.onclick.closeModal();

    if (btn.style.display === "none") {
        btn.style.display = "block";
        span.style.display = "none";
    } else {
        btn.style.display = "none";
        span.style.display = "block";
    }
}

const closeModal = () => { 
    const modal = document.getElementById("exampleModal");
    const span = document.getElementsByClassName("close")[0];
    const btn = document.getElementById("exampleModalButton");

    btn.onclick = function () {
        closeModal();
    }
    span.onclick.closeModal();

    if (btn.style.display === "none") {
        btn.style.display = "block";
        span.style.display = "none";
    } else {
        btn.style.display = "none";
        span.style.display = "block";
    }
}