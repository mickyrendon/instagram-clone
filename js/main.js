const pswrd = document.querySelector('.pswrd')
const btn = document.querySelector('.submit')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
})

function validator(){
    let val = pswrd.value
    if(val.length >= 6 ){
        console.log('more then 3')
        pswrd.addEventListener('keyup', validator, false)
        return btn.classList.add('active')
    }else{
        pswrd.addEventListener('keyup', validator, true)
        return btn.classList.remove('active')
    }
}
validator()



