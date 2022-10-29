const checkout = document.querySelector(".submit-btn");

checkout.addEventListener("click", () =>{
    swal('Payment Complete!, would you like to keep shopping?',{
        buttons: {
            yes: {
                text: "Yes!",
                value: "go back",
            },
            no: {
                text: "No",
                value: "stay",
            },
        }
    })
    .then((value) => {
        switch (value) {
            case "go back":
                window.location.href="index.html"
                break;
            case "stay":
                swal("Thank you for sgopping with us!");
                break;
        };
    })
});

document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
};

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
};

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
};

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
};

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
};

