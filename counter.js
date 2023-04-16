const counterNum = document.querySelectorAll(".counter-num")
// const speed = 400;
counterNum.forEach((curElement) => {
    curElement.innerText = "0";
    const upadteNumber = () => {
        const targerNumber = +curElement.getAttribute("data-number");
        // console.log(targerNumber);
        const initialNumber = +curElement.innerText;
        // console.log(initialNumber);
        const incrementNum = targerNumber / 250;
        // console.log(incrementNum);
        if (initialNumber < targerNumber) {
            curElement.innerText = Math.ceil( initialNumber + incrementNum);
            setTimeout(upadteNumber, .5);
        }
    };
    upadteNumber();
});