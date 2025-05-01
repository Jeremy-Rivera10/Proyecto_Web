document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioContacto');
  
    formulario.addEventListener('submit', function (e) {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value.trim();
      const apellidos = document.getElementById('apellidos').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();
  
      const nombreValido = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,40}$/.test(nombre);
      const apellidosValido = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{4,60}$/.test(apellidos);
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      const telefonoValido = /^\d{9}$/.test(telefono);
  
      if (!nombreValido) return alert('El nombre no es válido.');
      if (!apellidosValido) return alert('Los apellidos no son válidos.');
      if (!emailValido) return alert('El correo electrónico no es válido.');
      if (!telefonoValido) return alert('El teléfono debe tener 9 dígitos.');
  
      alert('Formulario enviado correctamente.');
      formulario.reset();
    });
  });