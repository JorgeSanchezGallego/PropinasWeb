let personal = {};
    let totalPuntos = 0;

    function agregarTrabajador() {
      const input = document.getElementById("inputTrabajador").value.trim();
      const lista = document.getElementById("listaTrabajadores");

      if (input.includes(" ")) {
        const [nombre, horasStr] = input.split(" ");
        const horas = parseFloat(horasStr);
        if (!isNaN(horas)) {
          personal[nombre] = horas / 10;  
          const li = document.createElement("li");
          li.textContent = `${nombre} trabajó ${horas} horas`;
          lista.appendChild(li);
          document.getElementById("inputTrabajador").value = "";
        } else {
          alert("Las horas deben ser un número válido.");
        }
      } else {
        alert("Introduce el nombre y horas separados por un espacio (Ej: Juan 20)");
      }
    }

    function calcular() {
      const bote = parseFloat(document.getElementById("boteTotal").value);
      if (isNaN(bote) || bote <= 0) {
        alert("Introduce un bote válido.");
        return;
      }

      totalPuntos = 0;
      for (let horas of Object.values(personal)) {
        totalPuntos += horas;
      }

      if (totalPuntos === 0) {
        alert("No se han añadido trabajadores con horas.");
        return;
      }

      const valorPunto = bote / totalPuntos;
      let salida = `<h3>Resultados:</h3>`;
      for (let [nombre, puntos] of Object.entries(personal)) {
        const boteFinal = (puntos * valorPunto).toFixed(2);
        salida += `<p><strong>${nombre}</strong> tiene ${boteFinal} €</p>`;
      }

      document.getElementById("resultado").innerHTML = salida;
      
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = salida;

  // 👉 aquí le añades la clase extra
  resultadoDiv.classList.add("resultadoImagen");
    }

    const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");


acceptBtn.onclick = () => {
    document.cookie = "CookieBy=GeeksForGeeks; max-age=" + 60 * 60 * 24;
    if (document.cookie) {
        consentBox.classList.add("hide");
        setTimeout(() => {
            consentBox.classList.add("hidden");
        }, 300); 
    } else {
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
};


rejectBtn.onclick = () => {
    alert("Cookies rejected. Some functionality may be limited.");
    consentBox.classList.add("hide");
    setTimeout(() => {
        consentBox.classList.add("hidden");
    }, 300);
};


let checkCookie = document.cookie.indexOf("CookieBy=GeeksForGeeks");
if (checkCookie !== -1) {
    consentBox.classList.add("hidden");
}

const resetBtn = document.getElementById("resetConsent");

resetBtn.onclick = () => {
    // Borrar la cookie
    document.cookie = "CookieBy=GeeksForGeeks=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Recargar la página
    location.reload();
};