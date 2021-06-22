onload = () => {

    document.querySelector('#cremedeleite').onclick = () => adicionar(cremedeleite.nome)
    document.querySelector('#polvilho').onclick = () => adicionar(polvilho.nome)
    document.querySelector('#queijoralado').onclick = () => adicionar(queijoralado.nome)
    document.querySelector('#leitecondensado').onclick = () => adicionar(leitecondensado.nome)
    document.querySelector('#limao').onclick = () => adicionar(limao.nome)
    document.querySelector('#envia').onclick = () => enviar()
    document.querySelector('#limpar').onclick = () => limpar()
    document.querySelector('#menu').onclick = () => menu()
}

class Produto {
    constructor(nome) {
        this.nome = nome;
    }

}
const adicionar = (n) => {
   
    if(this.sessionStorage.tela==undefined){        
    this.sessionStorage.tela = n
            window.document.getElementById('one').innerHTML = sessionStorage.tela
            
        } 
        else if (this.sessionStorage.tela1==undefined) {
            this.sessionStorage.tela1 = n
            if(this.sessionStorage.tela1!=this.sessionStorage.tela){
        window.document.getElementById('two').innerHTML = sessionStorage.tela1}
        else if (this.sessionStorage.tela1==this.sessionStorage.tela){
            this.sessionStorage.removeItem('tela1')
          
        }
        teste() 
    } else if (this.sessionStorage.tela2==undefined) {
        this.sessionStorage.tela2 = n
        if(this.sessionStorage.tela2!=this.sessionStorage.tela&&this.sessionStorage.tela2!=this.sessionStorage.tela1){
            window.document.getElementById('tri').innerHTML = sessionStorage.tela2}
            else if (this.sessionStorage.tela2==this.sessionStorage.tela||this.sessionStorage.tela2==this.sessionStorage.tela1){
                this.sessionStorage.removeItem('tela2')
                
            }  
            teste() 
} else if (this.sessionStorage.tela3==undefined) {
    this.sessionStorage.tela3 = n
    if(this.sessionStorage.tela3!=this.sessionStorage.tela1&&this.sessionStorage.tela3!=this.sessionStorage.tela2&&this.sessionStorage.tela3!=this.sessionStorage.tela){
        window.document.getElementById('four').innerHTML = sessionStorage.tela3}
        else if (this.sessionStorage.tela3==this.sessionStorage.tela||this.sessionStorage.tela3==this.sessionStorage.tela1||this.sessionStorage.tela3==this.sessionStorage.tela2){
            this.sessionStorage.removeItem('tela3')
        }
} else if (this.sessionStorage.tela4==undefined) {
    this.sessionStorage.tela4 = n
        if(this.sessionStorage.tela4!=this.sessionStorage.tela1&&this.sessionStorage.tela4!=this.sessionStorage.tela2&&this.sessionStorage.tela4!=this.sessionStorage.tela&&this.sessionStorage.tela4!=this.sessionStorage.tela3){
            window.document.getElementById('five').innerHTML = sessionStorage.tela4}
            else if (this.sessionStorage.tela4==this.sessionStorage.tela||this.sessionStorage.tela4==this.sessionStorage.tela1||this.sessionStorage.tela4==this.sessionStorage.tela2||this.sessionStorage.tela4==this.sessionStorage.tela3){
                this.sessionStorage.removeItem('tela4')
            }
}
   
}
const limpar = ()=>{
    window.document.getElementById('one').innerHTML = ''
    window.document.getElementById('two').innerHTML = ''
    window.document.getElementById('tri').innerHTML = ''
    window.document.getElementById('four').innerHTML = ''
    window.document.getElementById('five').innerHTML = ''
    window.document.getElementById('envia').style.display='none'
    return sessionStorage.clear()
}
function teste(){
    if (this.sessionStorage.tela!=undefined&&this.sessionStorage.tela1!=undefined&&this.sessionStorage.tela2!=undefined) {
        window.document.getElementById('envia').style.display=''
    
    }
        
}
const menu=()=>{
    window.location.href='http://127.0.0.1:5500/menu.html'
}
const enviar = () => {
        if(this.sessionStorage.tela==cremedeleite.nome&&this.sessionStorage.tela1==polvilho.nome&&this.sessionStorage.tela2==queijoralado.nome||this.sessionStorage.tela==cremedeleite.nome&&this.sessionStorage.tela1==queijoralado.nome&&this.sessionStorage.tela2==polvilho.nome||this.sessionStorage.tela==polvilho.nome&&this.sessionStorage.tela1==queijoralado.nome&&this.sessionStorage.tela2==cremedeleite.nome||this.sessionStorage.tela==polvilho.nome&&this.sessionStorage.tela1==cremedeleite.nome&&this.sessionStorage.tela2==queijoralado.nome||this.sessionStorage.tela==queijoralado.nome&&this.sessionStorage.tela1==cremedeleite.nome&&this.sessionStorage.tela2==polvilho.nome||this.sessionStorage.tela==queijoralado.nome&&this.sessionStorage.tela1==polvilho.nome&&this.sessionStorage.tela2==cremedeleite.nome){
       window.location.href='https://www.tudogostoso.com.br/receita/79996-pao-de-queijo-3-ingredientes.html'
           }else{
           alert('erou')
           }
       }


let cremedeleite = new Produto('Creme de leite')
let polvilho = new Produto("Polvilho")
let queijoralado = new Produto("Queijo Ralado")
let leitecondensado = new Produto("Leite Condensado")
let limao = new Produto("Limão")
let chocolate = new Produto("Chocolate")



/*escolherReceita = ()=>{
    let i1 = window.document.getElementById('cremedeleite')
    let i2 = window.document.getElementById('polvilho')
    let i3 = window.document.getElementById('queijoralado')
    if(i3.checked && i2.checked && i1.checked){
        return paodequeijo()

    }
}

const paodequeijo=()=>{

        window.location.href = 'https://www.tudogostoso.com.br/receita/79996-pao-de-queijo-3-ingredientes.html'

        }*/