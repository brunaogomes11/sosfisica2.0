document.querySelector("#selecionar_variavel_achar").addEventListener("change", () => {
    selecao = document.querySelector("#selecionar_variavel_achar").value
    if (selecao == "E") {
        document.querySelector("#campos_entrada1").innerHTML = `
            <span>Q - Carga elétrica</span>
            <div class="entradasContainer">
                <input class="entradaNumeros" id="entrada_q" name="entrada_q" type="number" start=0 />
                <select class="tipoInput" id="tipo_entrada_q1_s1">
                    <option value="C">C</option>
                    <option value="mC">mC</option>
                    <option value="µC">µC</option>
                    <option value="nC">nC</option>
                    <option value="pC">pC</option>
                </select>
            </div>
            <span>d - Distância</span>
            <div class="entradasContainer">
                    <input class="entradaNumeros" id="entrada_d" name="entrada_d" type="number" start=0 />
                    <select class="tipoInput" id="tipo_entrada_d_s1">
                        <option value="m">m</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option>
                    </select>
                </div> 
            <div class="buttons" onclick="calcular2_1('E')">Calcular</div>
        `
    } else if (selecao == "Q") {
        document.querySelector("#campos_entrada1").innerHTML = `
            <span>E - Campo elétrico</span>
            <input class="entradaNumeros" id="entrada_E" name="entrada_E" type="number" start=0 />
            <span>d - Distância</span>
            <div class="entradasContainer">
                <input class="entradaNumeros" id="entrada_d" name="entrada_d" type="number" start=0 />
                <select class="tipoInput" id="tipo_entrada_d_s1">
                    <option value="m">m</option>
                    <option value="cm">cm</option>
                    <option value="mm">mm</option>
                </select>
            </div> 
            <div class="buttons" onclick="calcular2_1('Q')">Calcular</div>
        `
    } else if (selecao == "d") {
        document.querySelector("#campos_entrada1").innerHTML = `
            <span>E - Campo elétrico</span>
            <input class="entradaNumeros" id="entrada_E" name="entrada_E" type="number" start=0 />
            <span>Q - Carga elétrica</span>
            <div class="entradasContainer">
                <input class="entradaNumeros" id="entrada_q" name="entrada_q" type="number" start=0 />
                <select class="tipoInput" id="tipo_entrada_q1_s1">
                    <option value="C">C</option>
                    <option value="mC">mC</option>
                    <option value="µC">µC</option>
                    <option value="nC">nC</option>
                    <option value="pC">pC</option>
                </select>
            </div>
            <div class="buttons" onclick="calcular2_1('d')">Calcular</div>
        `
    } else {
        document.querySelector("#campos_entrada1").innerHTML = ``
    }
})
const K = (8.99)*(Math.pow(10,9))
function calcular2_1(selecao) {
    let E = null
    let Q = null
    let d = null
    if(selecao == "E") {
        Q = document.querySelector("#tipo_entrada_q1_s1").value == 'C' ? parseFloat(document.querySelector("#entrada_q").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q1_s1").value, document.querySelector("#entrada_q").value)
        d = document.querySelector("#tipo_entrada_d_s1").value == 'm' ? parseFloat(document.querySelector("#entrada_d").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_d_s1").value, document.querySelector("#entrada_d").value)
    } else if(selecao == "Q") {
        E = document.querySelector("#entrada_E").value
        d = document.querySelector("#tipo_entrada_d_s1").value == 'm' ? parseFloat(document.querySelector("#entrada_d").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_d_s1").value, document.querySelector("#entrada_d").value)
    } else if(selecao == "d") {
        Q = document.querySelector("#tipo_entrada_q1_s1").value == 'C' ? parseFloat(document.querySelector("#entrada_q").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q1_s1").value, document.querySelector("#entrada_q").value)
        E = document.querySelector("#entrada_E").value
    }
    equacao_padrao = `\\[E = \\frac{K \\cdot Q}{d^2}\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_padrao
    if (E != '' && Q != '' && d == null && Math.sign(Q) == Math.sign(E)) {
        d = Math.sqrt((K*Q)/E)
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{K \\cdot Q}{E}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{8.99 \\cdot 10^9 \\cdot ${converterParaNotacao10x(Q)}}{${E}}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = \\sqrt{\\frac{${converterParaNotacao10x(K*Q)}}{${E}}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[d = ${converterParaNotacao10x(d)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[d = ${converterParaNotacao10x(d)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else if (E == null && Q != '' && d != '') {
        E = (K*Q)/(Math.pow(d, 2))
        document.querySelector(".resultado_completo").innerHTML += `\\[E = \\frac{8.99 \\cdot 10^9 \\cdot ${converterParaNotacao10x(Q)}}{${d}^2}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E = \\frac{${converterParaNotacao10x(K*Q)}}{${Math.pow(d,2)}}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E = ${converterParaNotacao10x(E)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[E = ${converterParaNotacao10x(E)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else if (E != '' && Q == null && d != '') {
        Q = (E*(Math.pow(d, 2))/K)
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = \\frac{E \\cdot d^2}{8.99 \\cdot 10^9}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = \\frac{${E} \\cdot ${d}^2}{8.99 \\cdot 10^9}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[Q = ${converterParaNotacao10x(Q)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[Q = ${converterParaNotacao10x(Q)} N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else {
        alert("Campos Inválidos")
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function calcular2_2() {
    let q1 = document.querySelector("#tipo_entrada_q1_s2").value == 'C' ? parseFloat(document.querySelector("#entrada_q1_s2").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q1_s2").value, document.querySelector("#entrada_q1_s2").value)
    let q2 = document.querySelector("#tipo_entrada_q2_s2").value == 'C' ? parseFloat(document.querySelector("#entrada_q2_s2").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q2_s2").value, document.querySelector("#entrada_q2_s2").value)
    let d = document.querySelector("#tipo_entrada_d_s2").value == 'm' ? parseFloat(document.querySelector("#entrada_d_s2").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_d_s2").value, document.querySelector("#entrada_d_s2").value)
    let x = document.querySelector("#tipo_entrada_x_s2").value == 'm' ? parseFloat(document.querySelector("#entrada_x_s2").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_x_s2").value, document.querySelector("#entrada_x_s2").value)
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\overrightarrow{E_1}+\\overrightarrow{E_2}\\]`
    eq1 = `\\[\\overrightarrow{E_{q_1}} = K \\cdot \\frac{q_1}{x^2}\\cdot î\\]` 
    eq2 = `\\[\\overrightarrow{E_{q_2}} = K \\cdot \\frac{q_2}{(d - x)^2}\\cdot -î\\]` 
    equacao_p_substituida1 = `\\[\\overrightarrow{E_p} = (K \\cdot \\frac{q_1}{x^2} - K \\cdot \\frac{q_2}{(d - x)^2})\\cdot î\\]`
    equacao_p_substituida2 = `\\[\\overrightarrow{E_p} = K \\cdot (\\frac{q_1}{x^2} - \\frac{q_2}{(d - x)^2})\\cdot î\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    document.querySelector(".resultado_completo").innerHTML += eq1
    document.querySelector(".resultado_completo").innerHTML += eq2
    document.querySelector(".resultado_completo").innerHTML += equacao_p_substituida1
    document.querySelector(".resultado_completo").innerHTML += equacao_p_substituida2
    if (!isNaN(d) && !isNaN(x) && !isNaN(q1) && !isNaN(q2) && x < d) {
        E_p = (K)*((q1/(Math.pow(x,2)))-(q2/(Math.pow((d-x), 2))))
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} = K \\cdot (\\frac{${q1}}{${x}^2} - \\frac{${q2}}{(${d} - ${x})^2})\\cdot î\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[\\overrightarrow{E_p} = ${converterParaNotacao10x(E_p)}\\cdot î \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[\\overrightarrow{E_p} = ${converterParaNotacao10x(E_p)}\\cdot î \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else {
        alert("Campos inválidos")
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}
function calcular2_3() {
    let q1 = document.querySelector("#tipo_entrada_q1_s3").value == 'C' ? parseFloat(document.querySelector("#entrada_q1_s3").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q1_s3").value, document.querySelector("#entrada_q1_s3").value)
    console.log(q1, document.querySelector("#tipo_entrada_q1_s3").value)
    let q2 = document.querySelector("#tipo_entrada_q2_s3").value == 'C' ? parseFloat(document.querySelector("#entrada_q2_s3").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q2_s3").value, document.querySelector("#entrada_q2_s3").value)
    let a = document.querySelector("#tipo_entrada_a_s3").value == 'm' ? parseFloat(document.querySelector("#entrada_a_s3").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_a_s3").value, document.querySelector("#entrada_a_s3").value)
    let b = document.querySelector("#tipo_entrada_b_s3").value == 'm' ? parseFloat(document.querySelector("#entrada_b_s3").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_b_s3").value, document.querySelector("#entrada_b_s3").value)
    let c = document.querySelector("#tipo_entrada_c_s3").value == 'm' ? parseFloat(document.querySelector("#entrada_c_s3").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_c_s3").value, document.querySelector("#entrada_c_s3").value)
    let angulo = parseFloat(document.querySelector("#entrada_alpha_s3").value)
    equacao_p_total = `\\[E_p = \\sqrt{E_1^2 + E_2^2 + 2 \\cdot E_1 \\cdot E_2 \\cdot cos \\alpha}\\]`
    eq1 =  `\\[E_{q_1} = \\frac{K \\cdot q_1}{a^2}\\]`
    eq2 = `\\[E_{q_2} = \\frac{K \\cdot q_2}{${c}^2}\\]`
    equacao_p = `\\[E_p = \\sqrt{(\\frac{K \\cdot q_1}{a^2})^2+(\\frac{K \\cdot q_2}{c^2})^2+ 2 \\cdot \\frac{K \\cdot q_1}{a^2} \\cdot \\frac{K \\cdot q_2}{c^2}\\cdot cos \\alpha\\}}\\]`
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    document.querySelector(".resultado_completo").innerHTML += eq1
    document.querySelector(".resultado_completo").innerHTML += eq2
    document.querySelector(".resultado_completo").innerHTML += equacao_p
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(angulo) && !isNaN(q1) && !isNaN(q2) && angulo > 0 && a > 0 && b > 0 && c > 0) {
        E1 = (K*q1)/(Math.pow(a, 2))
        E2 = (K*q2)/(Math.pow(c, 2))
        Ep = Math.sqrt(Math.pow(E1, 2)+Math.pow(E2, 2)+(2*E1*E2*Math.cos(angulo * (Math.PI/180))))
        q1 = converterParaNotacao10x(q1); q2 = converterParaNotacao10x(q2)
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = \\sqrt{(\\frac{K \\cdot {${q1}}}{${a}^2})^2+(\\frac{K \\cdot ${q2}}{${c}^2})^2+ 2 \\cdot \\frac{K \\cdot {${q1}}}{${a}^2} \\cdot \\frac{K \\cdot ${q2}}{${c}^2}\\cdot cos ${angulo}\\}}\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[E_p = ${converterParaNotacao10x(Ep)} \\ N/m\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = ${converterParaNotacao10x(Ep)} \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else {
        alert("Campos inválidos")
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function calcular2_4() {
    let q1 = document.querySelector("#tipo_entrada_q1_s4").value == 'C' ? parseFloat(document.querySelector("#entrada_q1_s4").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q1_s4").value, document.querySelector("#entrada_q1_s4").value)
    let q2 = document.querySelector("#tipo_entrada_q2_s4").value == 'C' ? parseFloat(document.querySelector("#entrada_q2_s4").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q2_s4").value, document.querySelector("#entrada_q2_s4").value)
    let q3 = document.querySelector("#tipo_entrada_q3_s4").value == 'C' ? parseFloat(document.querySelector("#entrada_q3_s4").value) : conversorCoulomb('C', document.querySelector("#tipo_entrada_q3_s4").value, document.querySelector("#entrada_q3_s4").value)
    let d = document.querySelector("#tipo_entrada_d_s4").value == 'm' ? parseFloat(document.querySelector("#entrada_d_s4").value) : conversorDistancia('m', document.querySelector("#tipo_entrada_d_s4").value, document.querySelector("#entrada_d_s4").value)
    equacao_p_total = `\\[\\overrightarrow{E_p} = \\overrightarrow{E_1}+\\overrightarrow{E_2}+\\overrightarrow{E_3}\\]`
    eq1 = `\\[E_1 = K \\cdot \\frac{q_1}{d^2}\\]`
    eq2x = `\\[E_{2_x} = K \\cdot \\frac{q_2}{(d\\sqrt{2})^2}\\cdot cos 45° \\]`
    eq2y = `\\[E_{2_y} = K \\cdot \\frac{q_2}{(d\\sqrt{2})^2}\\cdot sen 45° \\]`
    eq3 = `\\[E_3 = K \\cdot \\frac{q_3}{d^2}\\]`
    alpha = 45*(Math.PI / 180)
    document.querySelector(".resultado_completo").innerHTML = equacao_p_total
    document.querySelector(".resultado_completo").innerHTML += eq1
    document.querySelector(".resultado_completo").innerHTML += eq2x
    document.querySelector(".resultado_completo").innerHTML += eq2y
    document.querySelector(".resultado_completo").innerHTML += eq3
    if (!isNaN(q1) && !isNaN(q2) && !isNaN(q3) && !isNaN(d)) { 
        E1 = (K*q1)/(Math.pow(d, 2))
        document.querySelector(".resultado_completo").innerHTML += `\\[E_1 = ${converterParaNotacao10x(E1)}\\]`
        E3 = (K*q3)/(Math.pow(d, 2))
        document.querySelector(".resultado_completo").innerHTML += `\\[E_3 = ${converterParaNotacao10x(E3)}\\]`
        E2x = ((K*q2)/(Math.pow((2*Math.sqrt(2)), 2)))*Math.cos(alpha)
        document.querySelector(".resultado_completo").innerHTML += `\\[E_{2_x} = ${converterParaNotacao10x(E2x)}\\]`
        E2y = ((K*q2)/(Math.pow((2*Math.sqrt(2)), 2)))*Math.sin(alpha)
        document.querySelector(".resultado_completo").innerHTML += `\\[E_{2_y} = ${converterParaNotacao10x(E2y)}\\]`

        if (Math.sign(q1) == Math.sign(q2) == Math.sign(q3)) {
            Epx = E2x + E3
            Epy = E2y + E1
            document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(E2x)}+${converterParaNotacao10x(E3)}\\]`
            document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(E2y)}+${converterParaNotacao10x(E1)}\\]`
        } else if (Math.sign(q1) == Math.sign(q2) && Math.sign(q2) != Math.sign(q3)) { // q3 com sinal distindo do resto
            Epx = E2x > E3 ? E2x - Math.abs(E3) : E3 - Math.abs(E2x)
            Epy = E2y + E1
            E2x > E3 ? document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(E2x)}-${converterParaNotacao10x(Math.abs(E3))}\\]` : document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(E3)}-${converterParaNotacao10x(Math.abs(E2x))}\\]`
            document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(E2y)}+${converterParaNotacao10x(E1)}\\]`
        } else if (Math.sign(q1) == Math.sign(q3) && Math.sign(q2) != Math.sign(q3)) { // q2 com sinal distindo do resto
            Epx = E2x > E3 ? E2x - Math.abs(E3) : E3 - Math.abs(E2x)
            Epy = E2y > E1 ? E2y - Math.abs(E1) : E1 - Math.abs(E2y)
            E2x > E3 ? document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(E2x)}-${converterParaNotacao10x(Math.abs(E3))}\\]` : document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(E3)}-${converterParaNotacao10x(Math.abs(E2x))}\\]`
            E2y > E1 ? document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(E2y)}-${converterParaNotacao10x(Math.abs(E1))}\\]`: document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(E1)}-${converterParaNotacao10x(Math.abs(E2y))}\\]`
        
        } else if (Math.sign(q2) == Math.sign(q3) && Math.sign(q1) != Math.sign(q3)) { // q1 com sinal distindo do resto
            Epx = E2x + E3
            Epy = E2y > E1 ? E2y - Math.abs(E1) : E1 - Math.abs(E2y)
            document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(E2x)}+${converterParaNotacao10x(E3)}\\]`
            E2y > E1 ? document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(E2y)}-${converterParaNotacao10x(Math.abs(E1))}\\]`: document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(E1)}-${converterParaNotacao10x(Math.abs(E2y))}\\]`
        }
        Ep = Math.sqrt(Math.pow(Epx, 2)+Math.pow(Epy, 2))
        document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_x} = ${converterParaNotacao10x(Epx)}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E_{p_y} = ${converterParaNotacao10x(Epy)}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = \\sqrt{(${converterParaNotacao10x(Epx)})^2 + (${converterParaNotacao10x(Epy)})^2}\\]`
        document.querySelector(".resultado_completo").innerHTML += `\\[E_p = ${converterParaNotacao10x(Ep)} \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML = `\\[E_p = ${converterParaNotacao10x(Ep)} \\ N/m\\]`
        document.querySelector(".resultado_resumido").innerHTML += `<div id="mostrarButton" class="buttons" onclick="mostrarCalculos()">Mostrar Cálculos</div>`
    } else {
        alert("Você esqueceu de algum campo")
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
    let expoente = parseFloat(notacaoCientifica[1]);
    if (expoente != 0) {
        return `${base.toFixed(2)} ⋅ 10^{${expoente}}`;
    } else {
        return `${base.toFixed(2)}`
    }
}

function mostrarCalculos() {
    if (document.querySelector(".resultado_completo").style.display == "none") {
        document.querySelector(".resultado_completo").style.display = "block"
        document.querySelector("#mostrarButton").innerHTML = 'Ocultar Cálculos'
    } else {
        document.querySelector(".resultado_completo").style.display = "none"
        document.querySelector("#mostrarButton").innerHTML = 'Mostrar Cálculos'
    }
}