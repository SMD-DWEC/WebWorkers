/**
 * Autor: Sergio Matamoros Delgado
 */

this.onmessage = function(e) {
    fetch("https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new")
    .then(res => res.text())
    .then(res => {
        //console.log(e);
        this.postMessage(res);
    });
  };