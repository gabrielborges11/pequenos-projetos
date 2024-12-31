

function atualizarLabel() {
  // Obtém o valor do input range
  var tamanhoSenha = document.getElementById("tamanhoSenha").value;

  // Atualiza o texto do label com o valor atual
  document.getElementById("labelTamanhoSenha").innerText = + tamanhoSenha;
}
atualizarLabel()




function box1() {
 var verificar1 = ""
    var minhaCheckbox = document.getElementById("minusculas");
  
    if (minhaCheckbox.checked) {
        verificar1 = "sim"
    } else {
        verificar1 ="nao"
    }

    return verificar1
  }
  
  function box2() {
    var verificar2 = ""
       var numeros = document.getElementById("numeros");
     
       if (numeros.checked) {
           verificar2 = "sim"
       } else {
           verificar2 ="nao"
       }

       return verificar2
     }

     function box3() {
        var verificar3 = ""
           var simbolos= document.getElementById("simbolos");
         
           if (simbolos.checked) {
               verificar3 = "sim"
           } else {
               verificar3 ="nao"
           }
    
           return verificar3
         }

        

    
         btn.addEventListener('click', ()=>{
            if(box1() === "sim" && box2() === "nao" && box3()==="nao" ){
              apenasMinusculas() 
           

            }
         
            
            if(box1() === "nao" && box2() === "sim" && box3()==="nao" ){
               apenasNumeros()
          
            }
         
            
            if(box1() === "nao" && box2() === "nao" && box3()==="sim" ){
              apenasSimbolos()

            }
         
            
            if(box1() === "sim" && box2() === "sim" && box3()==="sim"){
              totalaleatoria()

            }

                   
            if(box1() === "nao" && box2() === "sim" && box3()==="sim"){
              apenassimenum()

            }

            if(box1() === "sim" && box2() === "sim" && box3()==="nao"){
              apenasminenum()

            }

            if(box1() === "sim" && box2() === "nao" && box3()==="sim"){
              apenasminesim()

            }

            if(box1() === "nao" && box2() === "nao" && box3()==="nao"){
              calma()

            }
                    
          })

          function totalaleatoria() {
        
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA
          }

          function apenasMinusculas() {
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            
            const caracteres = "abcdefghijklmnopqrstuvwxyz";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA;
          }
          

          function apenasSimbolos() {
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            
            const caracteres = "!@#$%^&*()-_";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA;
          }

          function apenasNumeros() {
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            
            const caracteres = "0123456789";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA;
          }
          
          function apenassimenum() {
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            
            const caracteres = "!@#$%^&*()-_0123456789";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA;
          }

          function apenasminenum() {
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            
            const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA;
          }
          
        
          function apenasminesim() {
            const tamanhoInput = document.getElementById("tamanhoSenha");
            const tamanho = tamanhoInput.value;
          
            
            const caracteres = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_";
            let senhaA = "";
          
            for (let i = 0; i < tamanho; i++) {
              const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
              senhaA += caracteres.charAt(indiceAleatorio);
            }
          
            essasenha.innerHTML = senhaA;
          }


          function calma(){
            essasenha.innerHTML = "calma apressado";
          }

          function nivelS(){

            
            if(box1() === "sim" && box2() === "nao" && box3()==="nao" ){
                  aviso.innerHTML ="senha fraca"
           

            }
         
            
            if(box1() === "nao" && box2() === "sim" && box3()==="nao" ){
          aviso.innerHTML ="senha fraca"
          
            }
         
            
            if(box1() === "nao" && box2() === "nao" && box3()==="sim" ){
          aviso.innerHTML ="senha fraca"

            }
         
            
            if(box1() === "sim" && box2() === "sim" && box3()==="sim"){
          aviso.innerHTML ="senha forte"

            }

                   
            if(box1() === "nao" && box2() === "sim" && box3()==="sim"){
          aviso.innerHTML ="senha media"

            }

            if(box1() === "sim" && box2() === "sim" && box3()==="nao"){
        aviso.innerHTML ="senha media"

            }

            if(box1() === "sim" && box2() === "nao" && box3()==="sim"){
          aviso.innerHTML ="senha media"

            }

            if(box1() === "nao" && box2() === "nao" && box3()==="nao"){
              aviso.innerHTML =""
    
                }

          }
    nivelS()