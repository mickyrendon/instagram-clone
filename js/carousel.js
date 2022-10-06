const src =  document.querySelector('.phone-img')
const imgs = [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png',
    'assets/4.png'
]
let i = -1;

let interval = setInterval(function() {
    ++i;
    if (i >= imgs.length) {
        i = 0;
    }
    src.classList.add('animate__fadeIn')
    setTimeout(() => {
        src.classList.remove('animate__fadeIn')
    }, 1000)
    return src.srcset = imgs[i]
}, 5000);

