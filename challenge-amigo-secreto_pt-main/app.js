//array para receber os nomes 
let amigos=[];
 
//função para adicionar amigos
//se o campo digite o nome conter algum valor 
//o array amigos vai receber o valor 
//o campo do input será limpo
//Senão exibe uma mensagem de erro
function adicionarAmigo(){
    let nomeDoAmigo=document.getElementById('amigo').value;
  
   if(nomeDoAmigo){
    amigos.push(nomeDoAmigo);
    console.log(amigos);
    document.getElementById('amigo').value = '';
    listaDeAmigos();
   }else{
    alert('ERRO:Por favor, insira um nome.')
   }

} //A função cria elementos de lista (<li>) 
// para cada amigo no array e os adiciona ao elemento HTML listaAmigos.
function listaDeAmigos(){
    let lista=document.getElementById('listaAmigos');
    lista.innerHTML="";
    for(let i=0;i<amigos.length;i++){
        let li =document.createElement('li')
        li.textContent=amigos[i];
        lista.appendChild(li);

    }
}// função para sortear um amigo
//Verificação  para que haja amigos na lista antes de tentar sortear.

function sortearAmigo(){
    
    if(amigos.length>0){
        let sorteandoAmigo=Math.floor(Math.random()*amigos.length);
        console.log(sorteandoAmigo);
        
        let resultadoDoSorteio=document.getElementById('resultado');
        resultadoDoSorteio.innerHTML=` O amigo sorteado foi ${amigos[sorteandoAmigo]} !`;
    }
}
