function enviar(){
    const nivel1 = "Muito abaixo do peso";
    const nivel2 = "Abaixo do peso";
    const nivel3 = "Peso Normal";
    const nivel4 = "Acima do peso";
    const nivel5 = "Obesidade I";
    const nivel6 = "Obesidade II";
    const nivel7 = "Obesidade III";

    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const valorResultado = document.querySelector('#number-result');
    const resultado = document.querySelector('#resultado');
    const imc = (peso / (altura * altura));
    valorResultado.innerText = imc.toFixed(2);



    if(altura === ''){
        alert('Preencha os valores corretamente')
        window.location.reload(true);
    }
    
    
    
    
    
    if(imc < 18.5) {

        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';
  
     const valorResultado = document.getElementById('number-result').textContent = imc.toFixed(2);
     const resultado = document.getElementById('resultado').textContent = nivel2;

        document.getElementById('resultado').style.visibility = "visible"
        document.getElementById('number-result').style.visibility = "visible"
        document.getElementById('imagem-peso').style.backgroundImage = 'url("./assets/pesoabaixo.png")';
        document.getElementById('imagem-peso').style.visibility = "visible"
        document.getElementById('imagem-peso').style.width = "200px";
         
    } else if (imc >= 18.5 && imc <= 24.9 ){

        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';

        const valorResultado = document.getElementById('number-result').textContent = imc.toFixed(2);
        const resultado = document.getElementById('resultado').textContent = nivel3;

        document.getElementById('resultado').style.visibility = "visible"
        document.getElementById('number-result').style.visibility = "visible"
        document.getElementById('imagem-peso').style.backgroundImage = 'url("./assets/pesonormal.png")';
        document.getElementById('imagem-peso').style.visibility = "visible"
        document.getElementById('imagem-peso').style.width = "200px";

    } else if (imc >= 25 && imc <= 29.99){

        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';

        const valorResultado = document.getElementById('number-result').textContent = imc.toFixed(2);
        const resultado = document.getElementById('resultado').textContent = nivel4;

        document.getElementById('resultado').style.visibility = "visible"
        document.getElementById('number-result').style.visibility = "visible"
        document.getElementById('imagem-peso').style.backgroundImage = 'url("./assets/acima-peso.png")';
        document.getElementById('imagem-peso').style.visibility = "visible"
        document.getElementById('imagem-peso').style.width = "200px";

    } else if (imc >= 30 && imc <= 34.9){

        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';

        const valorResultado = document.getElementById('number-result').textContent = imc.toFixed(2);
        const resultado = document.getElementById('resultado').textContent = nivel5;

        document.getElementById('resultado').style.visibility = "visible"
        document.getElementById('number-result').style.visibility = "visible"
        document.getElementById('imagem-peso').style.backgroundImage = 'url("./assets/obesidade1.png")';
        document.getElementById('imagem-peso').style.visibility = "visible"
        document.getElementById('imagem-peso').style.width = "200px";

    } else if (imc >= 35 && imc <= 39.99){

        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';

        const valorResultado = document.getElementById('number-result').textContent = imc.toFixed(2);
        const resultado = document.getElementById('resultado').textContent = nivel6;

        document.getElementById('resultado').style.visibility = "visible"
        document.getElementById('number-result').style.visibility = "visible"
        document.getElementById('imagem-peso').style.backgroundImage = 'url("./assets/obesidade2.png")';
        document.getElementById('imagem-peso').style.visibility = "visible"
        document.getElementById('imagem-peso').style.width = "200px";

    } else if (imc >= 40){

        document.getElementById('altura').value = '';
        document.getElementById('peso').value = '';

        const valorResultado = document.getElementById('number-result').textContent = imc.toFixed(2);
        const resultado = document.getElementById('resultado').textContent = nivel7;

        document.getElementById('resultado').style.visibility = "visible"
        document.getElementById('number-result').style.visibility = "visible"
        document.getElementById('imagem-peso').style.backgroundImage = 'url("./assets/obesidade3.png")';
        document.getElementById('imagem-peso').style.visibility = "visible"
        document.getElementById('imagem-peso').style.width = "200px";
        
    }

    
   

}
