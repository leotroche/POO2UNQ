import { EmpleadoContratado } from "./src/EmpleadoContratado";
import { EmpleadoPlantaPermanente } from "./src/EmpleadoPlantaPermanente";
import { EmpleadoPlantaTemporaria } from "./src/EmpleadoPlantaTemporaria";
import { Empresa } from "./src/Empresa";

// --------------------------------------------------
// Escenario 1
// --------------------------------------------------

const empleadoPermanente = new EmpleadoPlantaPermanente(
	"Juan Pérez",
	"Av. Siempre Viva 123",
	"Soltero",
	new Date("1990-01-01"),
	50000,
	2,
	5,
);

const empleadoTemporario = new EmpleadoPlantaTemporaria(
	"Ana López",
	"Av. Siempre Viva 456",
	"Casado",
	new Date("1995-01-01"),
	40000,
	new Date("2021-01-01"),
	2,
);

const empresa = new Empresa("Microsoft", "30-12345678-9");

empresa.registrarEmpleado(empleadoPermanente);
empresa.registrarEmpleado(empleadoTemporario);

// --------------------------------------------------
// Escenario 2
// --------------------------------------------------

const empleadoContratado = new EmpleadoContratado(
	"Carlos Gómez",
	"Av. Siempre Viva 789",
	"Divorciado",
	new Date("1980-01-01"),
	60000,
	3,
	"Transferencia",
);

empresa.registrarEmpleado(empleadoContratado);

// --------------------------------------------------
// Test
// --------------------------------------------------

console.log("Calculo del total de sueldos netos:");

console.table({
	"Total de sueldos netos": empresa.getTotalSueldosNetos(),
});

console.log("Liquidación de sueldos:");

empresa.liquidarSueldos();
const registroHaberes = empresa.getRegistroHaberes();

console.table(registroHaberes);
