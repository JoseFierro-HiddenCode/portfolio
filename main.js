document.addEventListener("DOMContentLoaded", () => {
  // === ANIMACIÓN CÍRCULOS DE HABILIDADES ===
  const circles = document.querySelectorAll(".skill-bar");

  circles.forEach(circle => {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = circle.dataset.percent;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }, 300);
  });

  // === ANIMACIÓN FRASE FINAL ===
  const text = `(<span class="string">"Si se puede soñar, se puede programar 💻"</span>);\n}`;
  const target = document.getElementById("typing-line");
  let i = 0;

  function typeHTML() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeHTML, 20);
    }
  }

  if (target) {
    target.innerHTML = "";
    typeHTML();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const circles = document.querySelectorAll(".skill-bar");

  circles.forEach(circle => {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const percent = circle.dataset.percent;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    setTimeout(() => {
      const offset = circumference - (percent / 100) * circumference;
      circle.style.strokeDashoffset = offset;
    }, 300);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const cmdInput = document.getElementById("terminal-cmd");
  const output = document.getElementById("terminal-output");

  const commands = {
    help: [
      "> Comandos disponibles:",
      "  contact --email     → Mostrar correo",
      "  contact --github    → Mostrar GitHub",
      "  contact --phone     → Mostrar número",
      "  whoami              → Acerca de mí",
      "  clear               → Limpiar pantalla"
    ],
    "contact --email": "📧 jfcris1010@gmail.com",
    "contact --github": "🔗 github.com/JoseFierro-HiddenCode",
    "contact --phone": "📱 +51 944 884 315",
    "whoami": "👨‍💻 José Fierro - Desarrollador apasionado por el backend y automatización.",
  };

  cmdInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const command = cmdInput.value.trim();
      appendLine("> " + command);

      if (command === "clear") {
        output.innerHTML = "";
        appendLine("> escribe help para comenzar");
      } else if (commands[command]) {
        const response = commands[command];
        if (Array.isArray(response)) {
          response.forEach(line => appendLine(line));
        } else {
          appendLine(response);
        }
      } else {
        appendLine("❌ Comando no reconocido. Escribe 'help' para ver opciones.");
      }

      cmdInput.value = "";
    }
  });

  function appendLine(text) {
    const p = document.createElement("p");
    p.textContent = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
  }

  // Mostrar mensaje inicial
  
});

