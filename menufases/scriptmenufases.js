onload=()=>{
    document.querySelector('#ingredientes3').onclick = () => ing3()
    document.querySelector('#ingredientes4').onclick = () => ing4()
    document.querySelector('#ingredientes5').onclick = () => ing5()
    document.querySelector('#voltarmenu').onclick = () =>voltarmenu()
}

const ing3 = ()=>{
    window.location.href='http://127.0.0.1:5500/tresingredientes/index3.html'
    return sessionStorage.clear()
}
const ing4 = ()=>{
    window.location.href='http://127.0.0.1:5500/index.html'
    return sessionStorage.clear()
}
const ing5 = ()=>{
    window.location.href='http://127.0.0.1:5500/cincoingredientes/index5.html'
    return sessionStorage.clear()
}
const voltarmenu=()=>{
    window.location.href='http://127.0.0.1:5500/menu/menu.html'
    return sessionStorage.clear()
}