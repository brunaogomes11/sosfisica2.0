document.querySelector("#selecionar_variavel_achar").addEventListener("change", () => {
    selecao = document.querySelector("#selecionar_variavel_achar").value
    if (selecao == "E") {
        document.querySelector("#campos_entrada1").innerHTML = `
            <span>Q - Carga elétrica</span>
            <input class="entradaNumeros" id="entrada_q" name="entrada_q" type="number" start=0 />
            <span>d - Distância</span>
            <input class="entradaNumeros" id="entrada_d" name="entrada_d" type="number" start=0 />
            <div class="buttons" onclick="calcular2_1('E')">Calcular</div>
        `
    } else if (selecao == "Q") {
        document.querySelector("#campos_entrada1").innerHTML = `
            <span>E - Campo elétrico</span>
            <input class="entradaNumeros" id="entrada_E" name="entrada_E" type="number" start=0 />
            <span>d - Distância</span>
            <input class="entradaNumeros" id="entrada_d" name="entrada_d" type="number" start=0 />
            <div class="buttons" onclick="calcular2_1('Q')">Calcular</div>
        `
    } else if (selecao == "d") {
        document.querySelector("#campos_entrada1").innerHTML = `
            <span>E - Campo elétrico</span>
            <input class="entradaNumeros" id="entrada_E" name="entrada_E" type="number" start=0 />
            <span>Q - Carga elétrica</span>
            <input class="entradaNumeros" id="entrada_q" name="entrada_q" type="number" start=0 />
            <div class="buttons" onclick="calcular2_1('d')">Calcular</div>
        `
    } else {
        document.querySelector("#campos_entrada1").innerHTML = ``
    }
})

function calcular2_1(selecao) {
    let E = null
    let Q = null
    let d = null
    if(selecao == "E") {
        Q = document.querySelector("#entrada_q").value
        d = document.querySelector("#entrada_d").value
    } else if(selecao == "Q") {
        E = document.querySelector("#entrada_E").value
        d = document.querySelector("#entrada_d").value
    } else if(selecao == "d") {
        Q = document.querySelector("#entrada_q").value
        E = document.querySelector("#entrada_E").value
    }
    equacao_padrao = `\\[E = \\frac{K \\cdot Q}{d^2}\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_padrao
    K = (8.99)*(Math.pow(10,9))
    if (E != null && Q != null && d == null) {
        d = Math.sqrt((K*Q)/E)
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{K \\cdot Q}{E}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{8.99 \\cdot 10^9 \\cdot ${Q}}{${E}}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = ${converterParaNotacao10x(d)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[d = ${converterParaNotacao10x(d)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else if (E == null && Q != null && d != null) {
        E = (K*Q)/(Math.pow(d, 2))
        document.querySelector(".resultado_completo").innerHTML += `\\[E = \\frac{8.99 \\cdot 10^9 \\cdot ${Q}}{${d}^2}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E = \\frac{${K*Q}}{${Math.pow(d,2)}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E = ${converterParaNotacao10x(E)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[E = ${converterParaNotacao10x(E)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else if (E != null && Q == null && d != null) {
        Q = (E*(Math.pow(d, 2))/K)
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = \\frac{E \\cdot d^2}{8.99 \\cdot 10^9}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = \\frac{${E} \\cdot ${d}^2}{8.99 \\cdot 10^9}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = ${converterParaNotacao10x(Q)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[Q = ${converterParaNotacao10x(Q)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function calcular2_2() {
    let q1 = parseInt(document.querySelector("#entrada_q1_s2").value)
    let q2 = parseInt(document.querySelector("#entrada_q2_s2").value)
    let d = parseInt(document.querySelector("#entrada_d_s2").value)
    let x = parseInt(document.querySelector("#entrada_x_s2").value)
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\overrightarrow{E_1}+\\overrightarrow{E_2}\\]`
    eq1 = `\\[\\overrightarrow{E_{q_1}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{x^2}\\cdot î\\]` 
    eq2 = `\\[\\overrightarrow{E_{q_2}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_2}{(d - x)^2}\\cdot -î\\]` 
    equacao_p_substituida1 = `\\[E_p = (\\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{x^2} - \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_2}{(d - x)^2})\\cdot î\\]`
    equacao_p_substituida2 = `\\[E_p = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot (\\frac{q_1}{x^2} - \\frac{q_2}{(d - x)^2})\\cdot î\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    document.querySelector(".resultado_completo").innerHTML += eq1
    document.querySelector(".resultado_completo").innerHTML += eq2
    document.querySelector(".resultado_completo").innerHTML += equacao_p_substituida1
    document.querySelector(".resultado_completo").innerHTML += equacao_p_substituida2
    if (d != null && x != null && q1 != null && q2 != null) {
        E_p = (1/(4*Math.PI*8.85*(Math.pow(10,-12))))*((q1/x^2)-(q2/((d-x)^2)))
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot (\\frac{${q1}}{${x}^2} - \\frac{${q2}}{(${d} - ${x})^2})\\cdot î\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = ${converterParaNotacao10x(E_p)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[E_p = ${converterParaNotacao10x(E_p)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else {
        alert("Você esqueceu de algum campo")
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
function calcular2_3() {
    let q1 = parseInt(document.querySelector("#entrada_q1_s3").value)
    let q2 = parseInt(document.querySelector("#entrada_q2_s3").value)
    let a = parseInt(document.querySelector("#entrada_a_s3").value)
    let b = parseInt(document.querySelector("#entrada_b_s3").value)
    let c = parseInt(document.querySelector("#entrada_c_s3").value)
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\overrightarrow{E_1}+\\overrightarrow{E_2}\\]`
    eq1 = `\\[\\overrightarrow{E_{q_1}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{a^2}\\{sen[cos^{-1}(\\frac{b}{2a})]ĵ + \\frac{b}{2a}î\\}\\]`
    eq2 = `\\[\\overrightarrow{E_{q_1}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{c^2}\\{sen[cos^{-1}(\\frac{b}{2a})]ĵ - \\frac{b}{2a}î\\}\\]`
    equacao_p = `\\[\\overrightarrow{E_p} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{q_1}{a^2}+\\frac{q_2}{c^2})\\cdot sen[cos^{-1}(\\frac{b}{2a})]ĵ + (\\frac{q_1}{a^2}+\\frac{q_2}{c^2})\\cdot \\frac{b}{2a}î\\}\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    document.querySelector(".resultado_completo").innerHTML += eq1
    document.querySelector(".resultado_completo").innerHTML += eq2
    document.querySelector(".resultado_completo").innerHTML += equacao_p
    if (a != null && b != null && c != null && q1 != null && q2 != null) {
        Ep_i = (1/(4*Math.PI*8.85*(Math.pow(10,-12))))*(((q1/a^2)-(q2/c^2))*Math.sin(Math.acos(b/(2*a))))
        console.log(Ep_i, q1, q2, Math.sin(Math.acos(b/(2*a))))
        Ep_j = (1/(4*Math.PI*8.85*(Math.pow(10,-12))))*(((q1/a^2)+(q2/c^2))*Math.sin(Math.acos(b/(2*a))))
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} =  \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{${q1}}{${a}^2}+\\frac{${q2}}{${c}^2})\\cdot sen[cos^{-1}(\\frac{${b}}{${2*a}})]ĵ + (\\frac{${q1}}{${a}^2}+\\frac{${q2}}{${c}^2})\\cdot \\frac{${b}}{${2*a}}î\\}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} =  \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{${q1}}{${a}^2}+\\frac{${q2}}{${c}^2})\\cdot sen[cos^{-1}(\\frac{${b}}{${2*a}})]ĵ + \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{${q1}}{${a}^2}+\\frac{${q2}}{${c}^2})\\cdot \\frac{${b}}{${2*a}}î\\}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} = ${converterParaNotacao10x(Ep_i)}î + ${converterParaNotacao10x(Ep_j)}ĵ \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[\\overrightarrow{E_p} = ${converterParaNotacao10x(Ep_i)}î + ${converterParaNotacao10x(Ep_j)}ĵ \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else {
        alert("Você esqueceu de algum campo")
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function calcular2_4() {
    let q1 = parseInt(document.querySelector("#entrada_q1_s4").value)
    let q2 = parseInt(document.querySelector("#entrada_q2_s4").value)
    let q3 = parseInt(document.querySelector("#entrada_q3_s4").value)
    let d = parseInt(document.querySelector("#entrada_d_s4").value)
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\overrightarrow{E_1}+\\overrightarrow{E_2}+\\overrightarrow{E_3}\\]`
    eq1 = `\\[\\overrightarrow{E_{q_1}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_1}{d^2} \\cdot (-î)\\]`
    eq2 = `\\[\\overrightarrow{E_{q_2}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_2}{2d^2} (\\frac{-\\sqrt{2}}{2}î - \\frac{-\\sqrt{2}}{2}ĵ)\\]`
    eq3 = `\\[\\overrightarrow{E_{q_3}} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot \\frac{q_3}{d^2} \\cdot (-ĵ)\\]`
    equacao_p = `\\[\\overrightarrow{E_p} = \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0} \\cdot [(\\frac{q_1}{d^2})+(\\frac{q_2}{2d^2} \\cdot \\frac{-\\sqrt{2}}{2})î + (\\frac{q_3}{d^2})+(\\frac{q_2}{2d^2} \\cdot \\frac{-\\sqrt{2}}{2})ĵ\\ ]\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    document.querySelector(".resultado_completo").innerHTML += eq1
    document.querySelector(".resultado_completo").innerHTML += eq2
    document.querySelector(".resultado_completo").innerHTML += eq3
    document.querySelector(".resultado_completo").innerHTML += equacao_p
    if (q1 != null && q2 != null && q3 != null && d != null) {
        Ep_i = (1/(4*Math.PI*8.85*(Math.pow(10,-12))))*((q1/d^2)+((q2/2*(d^2))*(-(Math.sqrt(2)/2))))
        Ep_j = (1/(4*Math.PI*8.85*(Math.pow(10,-12))))*((q3/d^2)+((q2/2*(d^2))*(-(Math.sqrt(2)/2))))
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} =  \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{q_1}{d^2})+(\\frac{q_2}{2d^2} \\cdot \\frac{-\\sqrt{2}}{2})î\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} =  \\frac{1}{4 \\cdot \\pi \\cdot \\epsilon_0}\\{(\\frac{q_3}{d^2})+(\\frac{q_2}{2d^2} \\cdot \\frac{-\\sqrt{2}}{2})ĵ\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} = ${converterParaNotacao10x(Ep_i)}î + ${converterParaNotacao10x(Ep_j)}ĵ \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[\\overrightarrow{E_p} = ${converterParaNotacao10x(Ep_i)}î + ${converterParaNotacao10x(Ep_j)}ĵ \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function selecionarSistema(selecao) {
    document.querySelector(".resultado_resumido").innerHTML= ""
    document.querySelector(".resultado_completo").innerHTML = ""
    document.querySelector(".resultado_completo").style.display = "none"
    if (selecao == 1) {
        document.querySelector("#sistema2_1").style.display = "flex"
        document.querySelector("#sistema2_2").style.display = "none"
        document.querySelector("#sistema2_3").style.display = "none"
        document.querySelector("#sistema2_4").style.display = "none"
    } else if (selecao == 2) {
        document.querySelector("#sistema2_1").style.display = "none"
        document.querySelector("#sistema2_2").style.display = "flex"
        document.querySelector("#sistema2_3").style.display = "none"
        document.querySelector("#sistema2_4").style.display = "none"
    } else if (selecao == 3) {
        document.querySelector("#sistema2_1").style.display = "none"
        document.querySelector("#sistema2_2").style.display = "none"
        document.querySelector("#sistema2_3").style.display = "flex"
        document.querySelector("#sistema2_4").style.display = "none"
    } else if (selecao == 4) {
        document.querySelector("#sistema2_1").style.display = "none"
        document.querySelector("#sistema2_2").style.display = "none"
        document.querySelector("#sistema2_3").style.display = "none"
        document.querySelector("#sistema2_4").style.display = "flex"
    }
}

function converterParaNotacao10x(numero) {
    let notacaoCientifica = numero.toExponential().split('e');
    let base = parseFloat(notacaoCientifica[0]);
    let expoente = parseInt(notacaoCientifica[1]);
  
    return `${base.toFixed(2)} ⋅ 10^{${expoente}}`;
}

// function calcularSistemas() {
//     selecao = document.querySelector("#selecionar_sistema").value
//     if (selecao == 1) {
//         // calcular2_1()
//     } else if (selecao == 2) {
//         d = document.querySelector("#entrada_d").value
//         x = document.querySelector("#entrada_x").value
//         q1 = document.querySelector("#entrada_q1").value
//         q2 = document.querySelector("#entrada_q2").value
//         console.log(d, x, q1, q2)
//         // calcular2_2()
//     } else if (selecao == 3) {
//     } else if (selecao == 4) {
//     }
// }

function mostrarCalculos() {
    document.querySelector(".resultado_completo").style.display = "block"
}