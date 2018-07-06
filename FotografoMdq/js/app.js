
// Variables globales

var valor = 0;
var imagen ='';
var calidadSeleccionada = 0;
var tamanoSeleccionado = 0;
var marcoSeleccionado = 0;

var parametros = {
  calidad: {
    0: {'text':'baja', 'valor':100},
    1: {'text':'media', 'valor':300},
    2: {'text':'alta', 'valor':500}
  },
  tamano: {
    0: {'text':'s', 'valor':1},
    1: {'text':'m', 'valor':1.5},
    2: {'text':'l', 'valor':2}
  },
  marco:{
    0: 0,
    1: 600,
  }
};


//calculos
function setearTamano(valorTam){
  tamanoSeleccionado = valorTam;
  calcularValor();
};

function setearCalidad(valorCal){
  calidadSeleccionada = valorCal;
  calcularValor();
};

function setearMarco(valorMarco){
  marcoSeleccionado = valorMarco;
  calcularValor();
};

//seteos
function calcularValor(){
  console.log(calidadSeleccionada,tam);
  valor = (parametros.calidad[calidadSeleccionada].valor * parametros.tamano[tamanoSeleccionado].valor) + parametros.marco[marcoSeleccionado];
  actualizarValorEnPantalla();
};

// listener

document.addEventListener('DOMContentLoaded', function(event)
{
	actualizarValorEnPantalla();
  var tamano = document.getElementById('tam');
  tamano.addEventListener('change', function() {
    setearTamano(this.value);
  });

  var calidad = document.getElementById('cal');
  calidad.addEventListener('change', function() {
    setearCalidad(this.value);
  });

  var marco = document.getElementById('marco');
  marco.addEventListener('change', function() {
    if(this.checked){
      setearMarco(1);
    }
    else {
    setearMarco(0);
    }

  });
});


// actualiza el monto en pantalla
function actualizarValorEnPantalla() {
  document.getElementById('monto').innerHTML = '$' + valor;
}
