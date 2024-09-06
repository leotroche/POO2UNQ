import type { Empleado } from "./Empleado";
import { ReciboHaberes } from "./ReciboHaberes";

export class Empresa {
	private nombre: string;
	private cuit: string;
	private empleados: Empleado[] = [];
	private registroHaberes: ReciboHaberes[] = [];

	constructor(nombre: string, cuit: string) {
		this.nombre = nombre;
		this.cuit = cuit;
	}

	// --------------------------------------------------------

	public registrarEmpleado(empleado: Empleado): void {
		this.empleados.push(empleado);
	}

	public getTotalSueldosBrutos(): number {
		return this.empleados.reduce((total, empleado) => total + empleado.getSueldoBruto(), 0);
	}

	public getTotalRetenciones(): number {
		return this.empleados.reduce((total, empleado) => total + empleado.getRetenciones(), 0);
	}

	public getTotalSueldosNetos(): number {
		return this.empleados.reduce((total, empleado) => total + empleado.getSueldoNeto(), 0);
	}

	public liquidarSueldos(): void {
		for (const empleado of this.empleados) {
			const reciboHaberes = new ReciboHaberes(empleado);
			this.registroHaberes.push(reciboHaberes);
		}
	}

	public getRegistroHaberes() {
		return this.registroHaberes;
	}
}
