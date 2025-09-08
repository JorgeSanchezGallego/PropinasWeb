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
    }