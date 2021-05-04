//
var propMouseMoves = {
    iconos: document.querySelectorAll('#portada .overlay i'),
}
//
metMouseMoves = {
    inicio: function(){
        document.addEventListener('mousemove', metMouseMoves.parallaxPointer);
    },
    parallaxPointer: function(e){
        propMouseMoves.iconos.forEach( icono => {
            const speed = icono.getAttribute('data-speed')
            const x = (window.innerWidth - e.pageX*speed)/100
            const y = (window.innerHeight - e.pageY*speed)/100
            icono.style.transform = `translateX(${x}px) translateY(${y}px) `
        });
    }
}
metMouseMoves.inicio();