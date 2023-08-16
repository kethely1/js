function enviar(){
    var kethy = document.getElementById("nomeid");
    if(kethy !=''){
    }
}

    {

        function limpa_formulario_cep(){
            //essa funçao limpa o formulario e deixa ele sem nada 
            //escrito substituindo po vazio("")


        document.getElementById('cep').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        }
        function meu_callback(conteudo){
            if(! ("erro")in conteudo){
            //casp não de nenhum erro,os campos serão preenchidos com informações
            //referente ao cep informado.

            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.cidade);
            document.getElementById('uf').value=(conteudo.uf);
            }
   else{
       limpa_formulario_cep();
       alert("cep não encontrado")

   }
}
   function pesquisacep(valor){
    //nova variavel"cep"somente com digitos.
    var cep = valor.replace(/\D/g,'');
     
     if(cep !=""){
        //Expressão regular para validar CEP.
        var validacep =/^[0-9] {8}&/;
        if(validacep.test.(cep)){
       
        if(validacep.test(cep)){
         document.getElementById('rua').value='...';
         document.getElementById('bairro').value='...';
         document.getElementById('cidade').value='...';
         document.getElementById('uf').value='...';
         
         //cria um elemento javascript,ele que vai ser usado oara acessar 
         //o servidor dos correios(Viacep)
         var scripit=document.createElement('scripit');

         scripit.src = 'https://viacep.com.br/ws/'+cep'/json/?callback-meu_calback'/;
         

   }



    




