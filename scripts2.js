const button = document.getElementById('button')

const conferirNumero = () =>{
    const inputValor = document.getElementById('numero').value
    
    let termo = 0
    let primeiro = 0
    let ultimo = 1
    
    while (inputValor > termo) {
        termo = primeiro + ultimo
        primeiro = ultimo
        ultimo = termo
    }

    if (inputValor ==0 || inputValor ==1) {
        alert('O número faz parte da sequência de Fibonacci')
    }
    else if(inputValor == termo){
        alert('O número faz parte da sequência de Fibonacci')
    }
    else{
        alert('O número não faz partre da sequência de Fibonacci')
    }
}

button.addEventListener('click', conferirNumero)

