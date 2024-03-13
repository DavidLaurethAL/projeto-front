import {areaQuadrado, perimetroQuadrado} from "./areaQuadrado";

console.log(perimetroQuadrado(5))

//arrow function
function UpperName (name) {
    console.log(name.toUpperCase());
}

const LowerName = (name) => {
    console.log(name.toLowerCase())
}

//Função de contar as letras de uma string
function medirtamanho (contar){
    console.log(contar.length)
}
medirtamanho('Jão do Grau')





//destructuring

const MouseClick = (event) => {
    const clientX = event.clientX
    const clientY = event.clientY
    console.log(clientX, clientY)
}

const MouseDown = (event) => {
    const {clientX, clientY} = event;
    console.log(clientX, clientY)
}

const HandleMouse = (clientX, clientY) =>{
    console.log(clientX, clientY)
}

// document.documentElement.addEventListener('mousemove', MouseClick)
//arrays

const cursos = ['informatica', 'eletrotecnica', 'petroquimica', 'moda']

const [curso1, curso2] = cursos

// curso1 retorna 'informatica'

// spread

const numeros = [1, 20, 3, 53, 9, 22, 13, 7]

const frutas = ['pera', 'mamão', 'maça']

const outrasfrutas = ['banana', 'jabuticaba', 'romã', ...frutas ]

const meusirmaos = ['gabriel', 'rayane']
const outrosirmaos = ['lucas', 'karina']

const todosirmaos = [...meusirmaos, ...outrosirmaos, 'luana', 'jezebel']

//console.log(outrasfrutas) exibe todos os irmaos

//rest

const listaDeClientes = (empresa, ...clientes) =>{
    clientes.forEach((clientes) => {
        
    }); 
}

function listaDeClientes(empresa, ...clientes){
    clientes.forEach((clientes)=>{
        console.log(clientes,empresa)
    })
}

listaDeClientes(['SENAI','igor', 'carlos', 'leticia', 'layla', 'predo'])

//fetch

    // fetch(`https://ranekapi.origamid.dev/json/api/produto`)
    //.then((response) =>{
    //     console.log(response.json)
    // })

    const fetchUrl = async (url) =>{
        const response = await fetch(url)
        const json = response.json()
        return json
    }

    console.logfetchUrl('https://viacep.com.br/ws/57045005/json/')
    .then((cep) => { 
    const element = document.getElementById('texto')
    console.log(`Rua: ${cep.logradouro} <br> Bairro: ${cep.bairro}`)
    })