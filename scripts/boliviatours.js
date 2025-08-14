const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');
const headerTitle = document.querySelector('header h1');
const headerlogo = document.querySelector('header img.logo');


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	headerTitle.classList.toggle('hide-title');
    headerlogo.classList.toggle('hide-logo');
});

const destinations = [
  { value: "La-paz", text: "La Paz" },
  { value: "Santa-cruz", text: "Santa Cruz" },
  { value: "Cochabamba", text: "Cochabamba" },
  { value: "Oruro", text: "Oruro" },
  { value: "Potosi", text: "Potosi" },
  { value: "Chuquisaca", text: "Chuquisaca" },
  { value: "Tarija", text: "Tarija" },
  { value: "Beni", text: "Beni" },
  { value: "Pando", text: "Pando" }

];

const selectElement = document.getElementById("destination");

destinations.forEach(dest => {
  const option = document.createElement("option");
  option.value = dest.value;
  option.textContent = dest.text;
  selectElement.appendChild(option);
});

document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener datos del formulario
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;

    // Actualizar contador
    let count = parseInt(localStorage.getItem("bookingCount")) || 0;
    count++;
    localStorage.setItem("bookingCount", count);

    // Guardar detalles de la última reserva
    const lastBooking = {
        destination: destination,
        date: date
    };
    localStorage.setItem("lastBooking", JSON.stringify(lastBooking));

    // Redirigir a página de confirmación
    window.location.href = "confirmation.html";
});