(function () {
    const mainContainer = document.getElementsByClassName("main-container");
    console.log(mainContainer)
    if (mainContainer.length == 1 && window.innerWidth < window.innerHeight) {
        mainContainer[0].style.flexDirection = 'column-reverse';
    } else {
        document.body.style.height = '100vh';
    }
})();