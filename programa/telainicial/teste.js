var iframe ='<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/4ubJfvNBojgerF9oNtm95V?utm_source=generator&theme=0" width="100%" height="80vw" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';

function aparecerTexto() {""
    document.getElementById("div").innerHTML = iframe;
  }

var div = document.getElementById('TAWHC');
var texto = 'This Action Will Have Consequences...';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 200);
}

escrever(texto, div)

