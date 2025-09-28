const btn = document.querySelector('.btn')
const pharag =  document.querySelector('.ph')


btn.addEventListener("click", () => {
    pharag.textContent = 'Salom!'    
})

const ul = document.querySelector('.ul')
const li = document.querySelector('.li')
// const btn = document.querySelector('.btn')

// btn.addEventListener('click', () => {
//     const promt = prompt('Yangi Element Qoshing')
//     const li2 = createElement(li)
//     const a = createElement(a)
//     const ul2 = ul.appendChild(li2)
//     const a2 = ul2.appendChild(a)

    
// })

const textarea = document.querySelector('#text')
const p = document.querySelector('.p')



const text = textarea.value.length

textarea.addEventListener('input', (e) => {
    p.textContent = e.target.value.length
})