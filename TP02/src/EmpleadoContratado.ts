import { Empleado } from "./Empleado";

export class EmpleadoContratado extends Empleado {
	private numeroContrato: number;
	private medioPago: string;

	constructor(
		nombre: string,
		direccion: string,
		estadoCivil: string,
		fechaNacimiento: Date,
		sueldoBasico: number,
		numeroContrato: number,
		medioPago: string,
	) {
		super(nombre, direccion, estadoCivil, fechaNacimiento, sueldoBasico);

		this.numeroContrato = numeroContrato;
		this.medioPago = medioPago;
	}

	// --------------------------------------------------------

	public getSueldoBruto(): number {
		return this.getSueldoBasico();
	}

	public getRetenciones(): number {
		return 50; // Gastos Administrativos Contractuales
	}
}
