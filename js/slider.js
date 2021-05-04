(function(){

// Propiedades Slider
var propSlider = {
    slider: document.getElementsByClassName('slider'),
    primerSlider: null,
   }
   
   // Metodo Slider
   var metSlider = {
       inicio: function(){
           setInterval(metSlider.moverSilder, 3000);
       },
       moverSilder: function(){
           for(var i = 0; i < propSlider.slider.length; i++){
               propSlider.slider[i].style.transition = 'all 1s ease';
               propSlider.slider[i].style.marginLeft = '-100%';
            }
            setTimeout(function(){
                propSlider.primerSlider = propSlider.slider[0].firstElementChild;
                propSlider.slider[0].appendChild(propSlider.primerSlider);
                propSlider.slider[0].style.transition = 'unset'
                propSlider.slider[0].style.marginLeft = '0';
                propSlider.primerSlider = propSlider.slider[1].firstElementChild;
                propSlider.slider[1].appendChild(propSlider.primerSlider);
                propSlider.slider[1].style.transition = 'unset'
                propSlider.slider[1].style.marginLeft = '0';
            }, 1000);
       }
   
   }
   metSlider.inicio();

}())

