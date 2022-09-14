const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");



generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if(!qrValue) return; // kutucuk boş iş ise buradan geriye dönecek
    generateBtn.innerText = "QR Kod Oluşturuluyor...";
    // QR CODE oluşturma aşamaları buradan başlıyor
    // apiden gelen veriyi imajdan qrIMG haline dönüştürüyor
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrValue}`;
    qrImg.addEventListener("load", () => { // bir kere QR kod yükler
        wrapper.classList.add("active");
        generateBtn.innerText = "QR Kod Oluştur";

    })
    
});


