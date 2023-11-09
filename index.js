function calcular2_1(E, Q, d) {
    equacao_padrao = `\\[E = \\frac{K \\cdot Q}{d^2}\\]`
    K = (8.99)*(Math.pow(10,9))
    if (E != null && Q != null && d == null) {
        d = Math.sqrt((K*Q)/E)
        document.querySelector(".equacao_usada").innerHTML = equacao_padrao
        document.querySelector(".equacao_usada").innerHTML += `\\[d = \\sqrt{\\frac{K \\cdot Q}{E}}\\]`
        document.querySelector(".equacao_usada").innerHTML += `\\[d = \\sqrt{\\frac{8.99 \\cdot 10^9 \\cdot ${Q}}{${E}}}\\]`
    } else if (E == null && Q != null && d != null) {
        E = (K*Q)/(Math.pow(d, 2))
        document.querySelector(".equacao_usada").innerHTML = equacao_padrao
        document.querySelector(".equacao_usada").innerHTML += `\\[E = \\frac{8.99 \\cdot 10^9 \\cdot ${Q}}{${d}^2}\\]`
        document.querySelector(".equacao_usada").innerHTML += `\\[E = \\frac{${K*Q}}{${Math.pow(d,2)}}\\]`
        document.querySelector(".equacao_usada").innerHTML += `\\[E = ${converterParaNotacao10x(E)} N/m\\]`
    }
}

calcular2_1(null, 4, 2)

function converterParaNotacao10x(numero) {
    let notacaoCientifica = numero.toExponential().split('e');
    let base = parseFloat(notacaoCientifica[0]);
    let expoente = parseInt(notacaoCientifica[1]);
  
    return `${base} ⋅ 10^${expoente}`;
}