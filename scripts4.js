const button = document.getElementById('resultado').value
const resultado = () =>{
    const sp = 67836.43
    const rj = 36678.66
    const mg = 29229.88
    const es = 27165.48
    const outros = 19849.53

    const total = sp + rj + mg + es + outros
    const resultadoSp = ((sp/total)*100).toFixed(2)
    const resultadoRj = ((rj/total)*100).toFixed(2)
    const resultadoMg = ((mg/total)*100).toFixed(2)
    const resultadoEs = ((es/total)*100).toFixed(2)
    const resultadoOutros = ((outros/total)*100).toFixed(2)
    alert(`O percentual de SP é ${resultadoSp}%, 
    O percentual do RJ é ${resultadoRj}%, 
    O percentual de MG é ${resultadoMg}%, 
    O percentual de ES é ${resultadoEs}%, 
    O percentual de Outros é ${resultadoOutros}%`)

}
addEventListener("click", resultado)