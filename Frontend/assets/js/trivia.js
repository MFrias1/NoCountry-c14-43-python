let preguntas_aleatorias = true;
let mostrar_pantalla_juego_términado = true;
let reiniciar_puntos_al_reiniciar_el_juego = true;
let temporizador;
let puntosTotales = 0;
let tiempoRestante = 10; // Variable para almacenar el tiempo restante

function iniciarTemporizador() {
  tiempoRestante = 10; // Reiniciar el tiempo a 10 segundos
  temporizador = setInterval(actualizarTemporizador, 1000); // Llama a la función cada segundo (1000 ms)
}

function actualizarTemporizador() {
  tiempoRestante--;
  if (tiempoRestante < 0) {
    clearInterval(temporizador); // Limpiar el temporizador
    reiniciar(); // Llama a la función para cambiar a la siguiente pregunta
  } else {
    // Actualiza el contador de tiempo en tu interfaz de usuario (si es necesario)
    // Por ejemplo:
    select_id("contador_tiempo").textContent = tiempoRestante;
    // select_id("tiempo_restante").innerHTML = tiempoRestante;
  }
}

function reiniciarTemporizador() {
  clearInterval(temporizador); // Limpia el temporizador actual
  iniciarTemporizador(); // Vuelve a empezar el temporizador para la siguiente pregunta
}


window.onload = function () {
  base_preguntas = readText("./assets/js/base-preguntas.json");
  interprete_bp = JSON.parse(base_preguntas);
  escogerPreguntaAleatoria();
};

let pregunta;
let posibles_respuestas;
btn_correspondiente = [
  select_id("btn1"),
  select_id("btn2"),
  select_id("btn3"),
  select_id("btn4")
];
let npreguntas = [];

let preguntas_hechas = 0;
let preguntas_correctas = 0;

function escogerPreguntaAleatoria() {
  // Restablece el temporizador si ya estaba en funcionamiento
  if (temporizador) {
    clearTimeout(temporizador);
  }

  let n;
  if (preguntas_aleatorias) {
    n = Math.floor(Math.random() * interprete_bp.length);
  } else {
    n = 0;
  }

  while (npreguntas.includes(n)) {
    n++;
    if (n >= interprete_bp.length) {
      n = 0;
    }
    if (npreguntas.length == interprete_bp.length) {
      // Aquí es donde el juego se reinicia
      if (mostrar_pantalla_juego_términado) {
        swal.fire({
          title: "Juego finalizado",
          text:
            "Puntuación: " + preguntas_correctas + "/" + (preguntas_hechas - 1),
          icon: "success"
        });
      }
      if (reiniciar_puntos_al_reiniciar_el_juego) {
        preguntas_correctas = 0;
        preguntas_hechas = 0;
      }
      npreguntas = [];
    }
  }
  npreguntas.push(n);
  preguntas_hechas++;

  escogerPregunta(n);

  // Iniciar el temporizador de 10 segundos
  temporizador = setTimeout(() => {
    // Aquí puedes manejar lo que sucede cuando se agota el tiempo (cambiar de pregunta, etc.)
    // Por ejemplo, puedes llamar a la función reiniciar para pasar a la siguiente pregunta.
    reiniciar();
  }, 10000); // 10 segundos en milisegundos
}

function escogerPregunta(n) {
  pregunta = interprete_bp[n];
  // select_id("categoria").innerHTML = pregunta.categoria;
  select_id("pregunta").innerHTML = pregunta.pregunta;
  select_id("numero").innerHTML = n;
  let pc = preguntas_correctas;
  if (preguntas_hechas > 1) {
    select_id("puntaje").innerHTML = pc + "/" + (preguntas_hechas - 1);
  } else {
    select_id("puntaje").innerHTML = "";
  }

  style("imagen").objectFit = pregunta.objectFit;
  desordenarRespuestas(pregunta);
  if (pregunta.imagen) {
    select_id("imagen").setAttribute("src", pregunta.imagen);
    style("imagen").height = "200px";
    style("imagen").width = "100%";
  } else {
    style("imagen").height = "0px";
    style("imagen").width = "0px";
    setTimeout(() => {
      select_id("imagen").setAttribute("src", "");
    }, 500);
  }
  if (npreguntas.length == interprete_bp.length) {
    // Aquí es donde el juego se reinicia
    if (mostrar_pantalla_juego_términado) {
      swal.fire({
        title: "Juego finalizado",
        html:
          "Preguntas correctas: " + preguntas_correctas + "<br>Puntos totales: " + puntosTotales,
        icon: "success"
      });
    }
    if (reiniciar_puntos_al_reiniciar_el_juego) {
      preguntas_correctas = 0;
      preguntas_hechas = 0;
      puntosTotales = 0; // Reiniciar los puntos al reiniciar el juego
    }
    npreguntas = [];
  }
}

function desordenarRespuestas(pregunta) {
  posibles_respuestas = [
    pregunta.respuesta,
    pregunta.incorrecta1,
    pregunta.incorrecta2,
    pregunta.incorrecta3,
  ];
  posibles_respuestas.sort(() => Math.random() - 0.5);

  select_id("btn1").innerHTML = posibles_respuestas[0];
  select_id("btn2").innerHTML = posibles_respuestas[1];
  select_id("btn3").innerHTML = posibles_respuestas[2];
  select_id("btn4").innerHTML = posibles_respuestas[3];
}

let suspender_botones = false;

function oprimir_btn(i) {
  if (suspender_botones) {
    return;
  }
  suspender_botones = true;
  if (posibles_respuestas[i] == pregunta.respuesta) {
    puntosTotales += 100;
    preguntas_correctas++;
    btn_correspondiente[i].style.background = "lightgreen";
  } else {
    btn_correspondiente[i].style.background = "pink";
  }
  for (let j = 0; j < 4; j++) {
    if (posibles_respuestas[j] == pregunta.respuesta) {
      btn_correspondiente[j].style.background = "lightgreen";
      break;
    }
  }
  setTimeout(() => {
    reiniciar();
    suspender_botones = false;
    reiniciarTemporizador(); // Reinicia el temporizador después de responder
  }, 3000);
}

function reiniciar() {
  for (const btn of btn_correspondiente) {
    btn.style.background = "white";
  }
  escogerPreguntaAleatoria();
  reiniciarTemporizador(); // Reinicia el temporizador al cambiar de pregunta
}

function select_id(id) {
  return document.getElementById(id);
}

function style(id) {
  return select_id(id).style;
}

function readText(ruta_local) {
  var texto = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", ruta_local, false);
  xmlhttp.send();
  if (xmlhttp.status == 200) {
    texto = xmlhttp.responseText;
  }
  return texto;
}
