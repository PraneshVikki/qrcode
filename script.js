const typurl = document.querySelector('.typurl');
const qrsize = document.querySelector('#qrsize');
const darkclr = document.querySelector('.darkclr');
const lightclr = document.querySelector('.lightclr'); 
const qrgenerator = document.querySelector('.qrgenerator');
const qrimg = document.querySelector('.qrimg');
const saveqr = document.querySelector('.saveqr')

qrgenerator.addEventListener('click', (e) => {
    e.preventDefault();
    qrimg.innerHTML= '';
    const qrcode = new QRCode(qrimg, {
        text: typurl.value,
        width: parseInt(qrsize.value),
        height: parseInt(qrsize.value),
        colorDark: darkclr.value,
        colorLight: lightclr.value,
        correctLevel: QRCode.CorrectLevel.H
    });
});
saveqr.addEventListener('click',()=>{
    const imgSrc = document.querySelector('img').src;
    saveqr.href = imgSrc;
    saveqr.download = 'qrcode';
})

