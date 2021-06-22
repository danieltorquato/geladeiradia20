onload=()=>{
    document.querySelector('#iniciar').onclick = () => iniciar()
}

const iniciar = ()=>{
    window.location.href='http://127.0.0.1:5500/menufases/menufases.html'
    return sessionStorage.clear()
}