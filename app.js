const mainContainer = document.getElementsByClassName("main-container");
const onResize = (event) => {
    if (mainContainer.length == 1 && window.innerWidth < window.innerHeight) {
        mainContainer[0].style.flexDirection = 'column-reverse';
    } else {
        mainContainer[0].style.flexDirection = 'row';
    }
}

(function () {
    addEventListener("resize", onResize);
})();