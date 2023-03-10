

const wrapper=document.querySelector(".wrapper"),
qrInput=wrapper.querySelector(".form input"),
generateBtn=wrapper.querySelector(".form button");
qrImg=wrapper.querySelector(".qr-code img");



generateBtn.addEventListener("click", () => {
    let qrVlaue=qrInput.value;
    if(!qrVlaue){
        alert("search bar is empty");
     return;
    }
    generateBtn.innerText="Generating QR Code....";
    qrImg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrVlaue}`;
    qrImg.addEventListener("load", ()=>{

        wrapper.classList.add("active");
        generateBtn.innerText="Generaor QR Code";

    });
});

