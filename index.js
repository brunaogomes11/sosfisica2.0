function mostrar2_1() {
    
}
function calcular2_1(E, Q, d) {
    equacao_padrao = `\\[E = \\frac{K \\cdot Q}{d^2}\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_padrao
    K = (8.99)*(Math.pow(10,9))
    if (E != null && Q != null && d == null) {
        d = Math.sqrt((K*Q)/E)
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{K \\cdot Q}{E}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{8.99 \\cdot 10^9 \\cdot ${Q}}{${E}}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = ${converterParaNotacao10x(d)} N/m\\]`
    } else if (E == null && Q != null && d != null) {
        E = (K*Q)/(Math.pow(d, 2))
        document.querySelector(".resultado_completo").innerHTML += `\\[E = \\frac{8.99 \\cdot 10^9 \\cdot ${Q}}{${d}^2}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E = \\frac{${K*Q}}{${Math.pow(d,2)}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E = ${converterParaNotacao10x(E)} N/m\\]`
    } else if (E != null && Q == null && d != null) {
        Q = (E*(Math.pow(d, 2))/K)
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = \\frac{E \\cdot d^2}{8.99 \\cdot 10^9}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = \\frac{${E} \\cdot ${d}^2}{8.99 \\cdot 10^9}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = ${converterParaNotacao10x(Q)} N/m\\]`
    }
}

function calcular2_2(E_p, d, x, q1, q2) {
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\overrightarrow{E_1}+\\overrightarrow{E_2}\\]`
    eq1 = `\\[\\overrightarrow{E_{q_1}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{x^2}\\cdot î\\]` 
    eq2 = `\\[\\overrightarrow{E_{q_2}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_2}{(d - x)^2}\\cdot -î\\]` 
    equacao_p_substituida1 = `\\[E_p = (\\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{x^2} - \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_2}{(d - x)^2})\\cdot î\\]`
    equacao_p_substituida2 = `\\[E_p = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot (\\frac{q_1}{x^2} - \\frac{q_2}{(d - x)^2})\\cdot î\\]`
    document.querySelector(".resultado_completo").innerHTML = [equacao_p_total, eq1, eq2, equacao_p_substituida1, equacao_p_substituida2]
    if (E_p == null && d != null && x != null && q1 != null && q2 != null) {
        E_p = (1/(4*Math.PI*8.85*(Math.pow(10,-12))))*((q1/x^2)-(q2/((d-x)^2)))
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot (\\frac{${q1}}{${x}^2} - \\frac{${q2}}{(${d} - ${x})^2})\\cdot î\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = ${converterParaNotacao10x(E_p)} N/m\\]`
    } else {
        alert("Você esqueceu de algum campo")
    }
}
function calcular2_3() {
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{q_1}{a^2}+\\frac{q_2}{c^2})\\cdot sen[cos^{-1}(\\frac{b}{2a})]ĵ + (\\frac{q_1}{a^2}+\\frac{q_2}{c^2})\\cdot \\frac{b}{2a}î\\}\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    
}

// calcular2_2(null,3,3,4,5)
calcular2_3()

document.querySelector("#selecionar_sistema").addEventListener("onchange", () => {
    selecao = document.querySelector("#selecionar_sistema").value
    if (selecao == 1) {
        mostrar2_1()
    }
})
function converterParaNotacao10x(numero) {
    let notacaoCientifica = numero.toExponential().split('e');
    let base = parseFloat(notacaoCientifica[0]);
    let expoente = parseInt(notacaoCientifica[1]);
  
    return `${base.toFixed(2)} ⋅ 10^{${expoente}}`;
}