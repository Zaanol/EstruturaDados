function Fila() {
  this.fila = new Array();
  var Tocar = true;

  this.Enfileira = function(obj, titulo) {
    this.fila[this.fila.length] = "" + obj + titulo;
  }

  this.Desenfileira = function() {
    if (this.fila.length > 0) {
      var obj = this.fila[0];
      this.fila.splice(0, 1);
      return obj;
    } else {
      player = '';
      this.Tocar = true;
      alert("Sua playlist está vazia");
    }
  }

  this.Listar = function(){
    document.getElementById("proximosVideos").innerHTML = "<h4>Próximo</h4>";
    for (var i = 0; i <= this.fila.length - 1; i++) {
      var divAnterior = document.getElementById("proximosVideos").innerHTML;
      var printTitulo = this.fila[i].substr(11);
      document.getElementById("proximosVideos").innerHTML = divAnterior + "<p><img src='http://img.youtube.com/vi/" + this.fila[i].substr(0, 11) + "/1.jpg'> " + (printTitulo.substr(0, (printTitulo.length - 9))).substr(0,40) + "</p><hr>";
    }
  }
}

function playInArea(videoId) {
  player = '';
  videoId = videoId.substr(0,11);
  var playerArea = document.getElementById('playerArea');
  playerArea.innerHTML = '';
  var iFrame = document.createElement('iframe');
  iFrame.setAttribute('id','player');
  iFrame.setAttribute('width',768);
  iFrame.setAttribute('height',432);
  iFrame.setAttribute('src',
    'http://www.youtube.com/embed/'+
    videoId +
    "?autoplay=1&enablejsapi=1&rel=0");
  iFrame.setAttribute('frameborder',0);
  playerArea.appendChild(iFrame);

  player = new YT.Player( 'player', {
    events: { 'onStateChange': onPlayerStateChange, 'onReady': onPlayerReady}
  });
}

function getLink(videoId, titulo) {
    var linka = document.getElementById('link');
    if (linka.value == ""){
      alert("Por favor insira o link do vídeo ou um termo de busca");
    }else{
      playlist.Enfileira(videoId, titulo);
      playlist.Listar();
      $('#resultados').html("");
    }
}

function tocaOSomDJ(){
  var tira = playlist.Desenfileira();
  playInArea(tira);
  playlist.Listar();
}

function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo(); 
}

function onPlayerStateChange(event) {
  switch(event.data) {
      case 0:
          tocaOSomDJ();
          break;
  }
}

function getRequest(searchTerm) {
    url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyCyxh4C7YY-pH3-ORxw3M2aVxZWRPsTCQc',
        type: 'video',
        videoEmbeddable: 'true',
        maxResults: '5',
        q: searchTerm
    };
  
    $.getJSON(url, params, function (searchTerm) {
        showResults(searchTerm);
    });
}

function showResults(results) {
    var html = "";
    var entries = results.items;
    
    $.each(entries, function (index, value) {
        var title = value.snippet.title;
        var thumbnail = value.snippet.thumbnails.default.url;
        var videoId = "getLink('" + thumbnail.substr(23, 11);
        var titulo = "" + title + "')";
        html += '<p>' + title.substr(0,40) + '</p>';
        html += '<img src="' + thumbnail + '">';
        html += '<button class="button" onclick="' + videoId + titulo + '">+</button><Br>';
    }); 
    
    $('#resultados').html(html);
}

function buscar(){
  var searchTerm = $('#link').val();
  getRequest(searchTerm);
}

document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
      buscar()
});