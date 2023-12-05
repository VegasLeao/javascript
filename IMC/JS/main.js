
const calcularImc = () => {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
    if(nome !== '' && peso !== '' && altura !== ''){
        const imc = (peso/(altura*altura))
        //comando para exibir no console f12
        console.log('altura: ', altura);

        let classificacao = '';

        if(imc < 18.5){
            classificacao = 'Abaixo do peso';
        }
        else if(imc < 25){
            classificacao = 'compeso ideal. parabens!!!';
        }
        else if (imc < 30){
            classificacao = 'levemente acima do peso.';
        }
        else if (imc < 35){
            classificacao = 'obesidade grau I';
        }
        else if(imc < 40){
            classificacao = 'obesidade grau II';
        }
        else {
            classificacao = 'obesidade grau III. cuidado!!!';
        }
        resultado.textContent = 
            `${nome}, seu IMC e ${imc} e vc esta ${classificacao}`

    }
    else {
        resultado.textContent = 
        'preencha todos os campos';
    }
    
};
const limparCampos = () => {
    const nome = 
        document.getElementById("nome").value = null;
    const altura = 
        document.getElementById("altura").value = null;
    const peso = 
        document.getElementById("peso").value = null;
};

const mascaraAltura = (value, pattern) => {
    let i = 0;
    let v = value.tostring();
    v = v.replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
};

const aplicar = (value) => {
    const formatado = mascaraAltura(value, '#.##');
    document.getElementById('altura').value = formatado;
}
