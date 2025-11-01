const botons = document.querySelectorAll('[kuku="bookNowButton"]');
botons.forEach(boton => {
    boton.addEventListener('click', () =>{
        verificarEstado();
    });
  });

  
function verificarEstado() {
  const activo = true;
  if (activo) {
    alert("El boton funciona");
  } else {
    alert("El boton no funciona");
  }
}
