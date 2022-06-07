/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */



for (var i = 1; i <= 12; i++) {
  let urlImg = prompt('Por favor, ingrese una url de una imagen de su ciudad de preferencia.');
  let cityName = prompt('Por favor, ingrese el nombre de la ciudad que eligió para la imagen.');

  let buscImagen = document.getElementById(`imagen${i}`);
  let crearImg = document.createElement('img');
  buscImagen.appendChild(crearImg);
  crearImg.setAttribute('src', urlImg);
  crearImg.classList.add('img-tarjetas');
  crearImg.setAttribute('alt', cityName);

  let buscNomCiudad = document.getElementById(`nombreCiudad${i}`);
  buscNomCiudad.textContent = cityName;
}
