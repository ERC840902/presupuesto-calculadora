let history = [];

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("budget-form");
  const resultDiv = document.getElementById("result");
  const historyDiv = document.getElementById("history");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById("income").value);
    const expense = parseFloat(document.getElementById("expense").value);

    if (isNaN(income) || isNaN(expense)) {
      alert("Por favor, ingrese valores válidos para ingreso y gasto.");
      return;
    }

    const result = income - expense;
    history.push({ income, expense, result });

    resultDiv.innerText = `Presupuesto restante: ${result}`;
    resultDiv.classList.add("show");  // Añadir la clase para la animación
    updateHistory(historyDiv);
  });
});

function updateHistory(div) {
  div.innerHTML = "<h2>Historial</h2>";
  history.forEach((entry, index) => {
    div.innerHTML += `<p>Calculo ${index + 1}: Ingreso ${entry.income}, Gasto ${entry.expense}, Restante ${entry.result}</p>`;
  });
}

// Inicializar particles.js
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80
    },
    "size": {
      "value": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      }
    }
  }
});
