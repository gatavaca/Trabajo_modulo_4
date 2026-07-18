// Bienvenida al usuario
alert("¡Bienvenido al Portal Educativo (Herramienta para Profesores)!");
console.log("Iniciando el Portal Educativo en consola...");

// Objeto con propiedades y métodos 
const appConfig = {
    nombre: "Portal Educativo JS",
    version: "1.0.0",
    mostrarInfo: function () {
        console.log(`Ejecutando: ${this.nombre} - Versión: ${this.version}`);
    }
};
appConfig.mostrarInfo();

// Funciones para operaciones aritméticas
function sumar(a, b) { return a + b; }
function restar(a, b) { return a - b; }
function multiplicar(a, b) { return a * b; }
function dividir(a, b) {
    if (b === 0) return "Error: No se puede dividir por cero";
    return a / b;
}

// Llamar funciones dentro de otras para optimizar el código
function realizarOperacion(operacion, a, b) {
    // Uso de switch (Lección 2)
    switch (operacion) {
        case "+": return sumar(a, b);
        case "-": return restar(a, b);
        case "*": return multiplicar(a, b);
        case "/": return dividir(a, b);
        default: return "Operación no reconocida";
    }
}

// Arreglo de objetos
const alumnos = [
    { id: 1, nombre: "Ana García", curso: "JavaScript Básico", nota: 9 },
    { id: 2, nombre: "Juan Pérez", curso: "JavaScript Básico", nota: 5 },
    { id: 3, nombre: "María López", curso: "JavaScript Básico", nota: 7 },
    { id: 4, nombre: "Carlos Ruiz", curso: "JavaScript Básico", nota: 4 }
];

// Función que filtra elementos usando for
function filtrarPorNotaMinima(notaMin) {
    let resultados = [];
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nota >= notaMin) {
            resultados.push(alumnos[i]);
        }
    }
    return resultados;
}

// Función principal que contiene el ciclo del menú
function iniciarAplicacion() {
    let ejecutando = true;

    // Uso de while para repetir el menú 
    while (ejecutando) {
        let opcion = prompt(
            "==== PORTAL EDUCATIVO ====\n" +
            "1. Usar Calculadora (promedios, etc.)\n" +
            "2. Ver lista de alumnos y calificaciones\n" +
            "3. Filtrar alumnos por nota mínima\n" +
            "4. Salir\n" +
            "Elige una opción (1-4):"
        );

        // Uso de condicionales if, else if, else 
        if (opcion === "1") {
            // Uso de let, pedir datos y almacenarlos
            let num1Str = prompt("Ingresa el primer número:");
            let num2Str = prompt("Ingresa el segundo número:");

            // Validaciones de entrada
            let num1 = parseFloat(num1Str);
            let num2 = parseFloat(num2Str);

            if (isNaN(num1) || isNaN(num2)) {
                alert("Error: Debes ingresar valores numéricos válidos.");
                console.error("Entrada inválida en la calculadora.");
            } else {
                let op = prompt("Ingresa la operación (+, -, *, /):");
                let resultado = realizarOperacion(op, num1, num2);
                alert(`El resultado es: ${resultado}`);
                console.log(`Calculadora: ${num1} ${op} ${num2} = ${resultado}`);
            }

        } else if (opcion === "2") {
            console.log("\n--- Lista de Alumnos ---");
            // Recorrer el arreglo con forEach (Lección 5)
            alumnos.forEach(alumno => {
                console.log(`ID: ${alumno.id} | ${alumno.nombre} - Nota: ${alumno.nota} (${alumno.curso})`);
            });
            alert("La lista de alumnos se ha impreso en la consola del navegador.");

        } else if (opcion === "3") {
            let notaMinStr = prompt("Ingresa la nota mínima para filtrar (ej. 6 para aprobados):");
            let notaMin = parseFloat(notaMinStr);

            if (isNaN(notaMin)) {
                alert("Error: Ingresa una calificación válida.");
            } else {
                let filtrados = filtrarPorNotaMinima(notaMin);

                if (filtrados.length > 0) {
                    console.log(`\n--- Alumnos con nota >= ${notaMin} ---`);
                    // Usar map para transformar los datos (Lección 5)
                    let nombresFiltrados = filtrados.map(a => `${a.nombre} (Nota: ${a.nota})`);

                    alert(`Alumnos encontrados:\n- ${nombresFiltrados.join("\n- ")}`);
                    console.log(nombresFiltrados);
                } else {
                    alert("No se encontraron alumnos con esa calificación o superior.");
                    console.log(`Sin resultados para nota >= ${notaMin}`);
                }
            }

        } else if (opcion === "4") {
            ejecutando = false;
            alert("¡Gracias por utilizar el Portal Educativo!");
            console.log("Programa terminado por el usuario.");

        } else {
            alert("Opción no válida. Por favor, selecciona una opción entre 1 y 4.");
        }
    }
}

// Iniciar el programa
iniciarAplicacion();
