var ArrayPerguntas = new Array();
var ArrayRespostas = new Array();
var Amarelo = 0, Vermelho = 0, Verde = 0, Azul = 0;

function Fila() {
  this.fila = new Array();

  this.Enfileira = function(pergunta) {
    this.fila[this.fila.length] = "" + pergunta;
  }

  this.Desenfileira = function() {
    if (this.fila.length > 0) {
      var obj = this.fila[0];
      this.fila.splice(0, 1);
      document.getElementById("Pergunta").innerHTML = obj;
    } else {
      Resultados();
    }
  }
}

function ListaEncadeada(){

    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    let lenght = 0;
    let head = null;    


    this.append = function(element){
        let node = new Node(element),
        current;

        if (head === null) {
            head = node;
        } else {
            current = head;
            while(current.next) {
                current = current.next
            }
            current.next = node;
        }
        lenght++;
    }; 

    this.insert = function(position,element){
        if (position >= 0 && position <= lenght) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;
            if(position === 0) {
                node.next = current;
                head = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
                lenght++;
                return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(position){
      if(position > -1 && position < lenght) {
      let current = head,
      previous,
      index = 0;
      if (position === 0) {
          head = current.next;
      } else {
          while (index++ < position) {
              previous = current;
              current = current.next;
          }
          previous.next = current.next;
      }
      lenght--;
      return current.element;
      } else {
          return null;
      }
    };

    this.listarAlternativas = function(){
        let current = head;

        for (var i = 0; i < 5; i++) {          
            document.getElementById("Alternativa" + (i + 1)).innerHTML = current.element;
            current = current.next;
            alternativas.removeAt(0);
        }
    };
}

function Pilha() {
  this.stack = new Array();

  this.Adicionar = function(obj) {
    this.stack[this.stack.length] = obj;
  }

  this.Remover = function() {
    if (this.stack.length > 0) {
      var obj = this.stack[this.stack.length - 1];
      this.stack.splice(this.stack.length - 1, 1);

      if(obj == "Amarelo"){
        Amarelo++;
      }
      if(obj == "Vermelho"){
        Vermelho++;
      }
      if(obj == "Verde"){
        Verde++;
      }
      if(obj == "Azul"){
        Azul++;
      }

      return obj;
    } else {
      alert("Theres no objects in the stack");
    }
  }

  this.Qtd = function(){
    return this.stack.length;
  }

  this.Listar = function(){
    document.getElementById("Doces").innerHTML = "";
    for (var i = 0; i < this.stack.length; i++) {
      document.getElementById("Doces").innerHTML += "<img src='img/" + this.stack[i] + ".png' width='35' height='35'/>";
    }
  }
}

function GravarPerguntas(){
  perguntas.Enfileira("1 - Em que dia, mês e ano o Brasil foi descoberto?");
  alternativas.append("A - 24 de outubro de 1497");
  alternativas.append("B - 21 de maio de 1501");
  alternativas.append("C - 22 de abril de 1500"); //CERTA
  alternativas.append("D - 31 de fevereiro de 1499");
  alternativas.append("E - 18 de março de 1502");

  perguntas.Enfileira("2 - Quantas regiões tem o Brasil?");
  alternativas.append("A - 5"); //CERTA
  alternativas.append("B - 27");
  alternativas.append("C - 6");
  alternativas.append("D - 18");
  alternativas.append("E - 28");

  perguntas.Enfileira("3 - E quantos estados (contando com o Distrito Federal) tem o Brasil?");
  alternativas.append("A - 29");
  alternativas.append("B - 27"); //CERTA
  alternativas.append("C - 26");
  alternativas.append("D - 28");
  alternativas.append("E - 30");

  perguntas.Enfileira("4 - Qual é a capital do Brasil?");
  alternativas.append("A - Lebon Régis");
  alternativas.append("B - São Paulo");
  alternativas.append("C - Brasília"); //CERTA
  alternativas.append("D - Fraiburgo");
  alternativas.append("E - Crackolandia");

  perguntas.Enfileira("5 - Em qual governo foi implantado o Plano Real?");
  alternativas.append("A - Governo de José Sarney");
  alternativas.append("B - Governo de Dilma");
  alternativas.append("C - Governo de Itamar Franco"); //CERTA
  alternativas.append("D - Governo de Osama Binladen");
  alternativas.append("E - Governo de Fernando Collor");

  perguntas.Enfileira("6 - Em qual cidade brasileira se encontra uma das sete maravilhas do mundo?");
  alternativas.append("A - Fraiburgo");
  alternativas.append("B - Rio de Janeiro"); //CERTA
  alternativas.append("C - Belo Horizonte");
  alternativas.append("D - Porto Alegre");
  alternativas.append("E - Nenhuma");

  perguntas.Enfileira("7 - Marina Silva teve seu companheiro de chapa morto na queda de um avião. Que político era esse?");
  alternativas.append("A - Eduardo Cunha");
  alternativas.append("B - Willian Zanol");
  alternativas.append("C - Eduardo Paes");
  alternativas.append("D - Eduardo Campos"); //CERTA
  alternativas.append("E - Danrlei Correa");

  perguntas.Enfileira("8 - A capital do estado da Bahia é?");
  alternativas.append("A - Recife");
  alternativas.append("B - Boa Vista");
  alternativas.append("C - Videira");
  alternativas.append("D - Salvador"); //CERTA
  alternativas.append("E - Monte Carlo");

  perguntas.Enfileira("9 - Qual das alternativas indica a capital do estado do Acre?");
  alternativas.append("A - Palmas");
  alternativas.append("B - Aplausos");
  alternativas.append("C - Boa Vista");
  alternativas.append("D - Vista Ruim");
  alternativas.append("E - Rio Branco"); //CERTA

  perguntas.Enfileira("10 - Onde fica o Lago Paranoá?");
  alternativas.append("A - Brasília"); //CERTA
  alternativas.append("B - Curitiba");
  alternativas.append("C - Acre");
  alternativas.append("D - Florianópolis");
  alternativas.append("E - Disney");

  ProximaPergunta();
}

function ProximaPergunta(){
  perguntas.Desenfileira();
  alternativas.listarAlternativas();
}

function Marcar(Pergunta, Resposta){
  var RespostaSub = Resposta.substr(0,1);
  if(Pergunta.substr(0,2) == "10"){
    var PerguntaSub = Pergunta.substr(0,2);
  }else{
    var PerguntaSub = Pergunta.substr(0,1);
  }

  ArrayPerguntas[PerguntaSub] = Pergunta;
  ArrayRespostas[PerguntaSub] = Resposta;

  if((PerguntaSub == 1 && RespostaSub == "C") || (PerguntaSub == 2 && RespostaSub == "A") || (PerguntaSub == 3 && RespostaSub == "B")
     || (PerguntaSub == 4 && RespostaSub == "C") || (PerguntaSub == 5 && RespostaSub == "C") || (PerguntaSub == 6 && RespostaSub == "B")
      || (PerguntaSub == 7 && RespostaSub == "D") || (PerguntaSub == 8 && RespostaSub == "D") || (PerguntaSub == 9 && RespostaSub == "E")
       || (PerguntaSub == 10 && RespostaSub == "A")){
    SortearDoces();
  }else{
    recompensas.Adicionar("Errou");
    recompensas.Listar();
    ProximaPergunta();
  }
}

function SortearDoces(){
  var result = (Math.random() * 100);
  if(result <= 22){
    recompensas.Adicionar("Amarelo");
  }else if(result >= 23 && result <= 45){
    recompensas.Adicionar("Vermelho");
  }else if(result > 45 && result <= 67){
    recompensas.Adicionar("Verde");
  }else{
    recompensas.Adicionar("Azul");
  }
  recompensas.Listar();
  ProximaPergunta();
} 

function Resultados(){
  for (var i = recompensas.Qtd() - 1; i >= 0; i--) {
    recompensas.Remover();
  }

  var fraseResultado;
  if(Amarelo > Vermelho && Amarelo > Verde && Amarelo > Azul){
    fraseResultado = "EXTRATERRESTRE";
  }else if(Vermelho > Amarelo && Vermelho > Verde && Vermelho > Azul){
    fraseResultado = "GALÁTICO";
  }else if(Verde > Amarelo && Verde > Vermelho && Verde > Azul){
    fraseResultado = "BLASTER";
  }else if(Azul > Amarelo && Azul > Vermelho && Azul > Verde){
    fraseResultado = "BICHO VÉIO";
  }else{
    fraseResultado = "";
  }

  var acertos = Amarelo + Vermelho + Verde + Azul;
  var fraseAnalise, resultado;
  if(acertos == 0){
    fraseAnalise = "Nenhuma rapaz ? Só tem uma definição para o que acabou de acontecer: DECEPÇÃO!";
    imagemResultado = "decepcao";
  }else if(acertos <= 3){
    fraseAnalise = "Pode ser muito difícil saber tudo sobre o nosso país, porém você foi mal hein, ta precisando da aquele estudada sobre a nossa nação.";
    imagemResultado = "ruim";
  }else if(acertos <= 6){
    fraseAnalise = "Pode se dizer que você até que foi bem, mas da pra melhorar esse resultado ai, da uma pesquisada sobre o querido Brasil.";
    imagemResultado = "maomeno";
  }else if(acertos <= 9){
    fraseAnalise = "Quase um crânio! Acertou boa parte das perguntas, ta de parabéns em fera, mais um pouquinho você ganhava o leitão";imagemResultado = "maomeno";
    imagemResultado = "top";
  }else{
    fraseAnalise = "Alá bixo, o cara é fera! Fiquei até sem palavras";
    imagemResultado = "parabens";
  }

  document.getElementById("quiz").innerHTML = "<center><h2>" + fraseResultado + "<br>" + acertos +"/10</h1><h3>" + fraseAnalise + "</h3><br><img src='img/" + imagemResultado + ".gif'></center></div>";
  document.getElementById("Pergunta").innerHTML = "Resultado";
  document.getElementById("respostas").innerHTML = "  <br><div class='modal-content'><div class='modal-header'><h3>O que você respondeu</h3></div><div class='modal-body'><div id='pergResp'></div></div></div>";
  var pergResp = "<table class='table table-striped'><thead><tr><th scope='col'>Pergunta</th><th scope='col'>Resposta</th></tr></thead><tbody>";
  for (var i = 1; i <= ArrayPerguntas.length - 1; i++) {
    pergResp += "<tr><td>" + ArrayPerguntas[i] + "</td><td>" + ArrayRespostas[i] + "</td></tr>";
  }
  document.getElementById("pergResp").innerHTML = pergResp + "</tbody></table>";
  document.getElementById("refazerQuiz").innerHTML = "<label onclick='window.location.reload()' class='element-animation1 btn btn-lg btn-primary btn-block'><span class='btn-label'></span> Refazer o Quiz</label>";
}

$(function(){
    var loading = $('#loadbar').hide();
    $(document)
    .ajaxStart(function () {
        loading.show();
    }).ajaxStop(function () {
        loading.hide();
    });
    
    $("label.btn").on('click',function () {
        $('#loadbar').show();
        $('#quiz').fadeOut();
        setTimeout(function(){
            $('#quiz').show();
            $('#loadbar').fadeOut();
        }, 500);
    });
});