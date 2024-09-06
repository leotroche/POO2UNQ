import { Empleado } from "./Empleado";

export class EmpleadoPlantaPermanente extends Empleado {
	private cantidadHijos: number;
	private antiguedad: number;

	constructor(
		nombre: string,
		direccion: string,
		estadoCivil: string,
		fechaNacimiento: Date,
		sueldoBasico: number,
		cantidadHijos: number,
		antiguedad: number,
	) {
		super(nombre, direccion, estadoCivil, fechaNacimiento, sueldoBasico);

		this.cantidadHijos = cantidadHijos;
		this.antiguedad = antiguedad;
	}

	// --------------------------------------------------------

	public getSueldoBruto(): number {
		const asignacionPorHijo = 150 * this.cantidadHijos;
		const asignacionPorConyuge = this.getEstadoCivil() === "Casado" ? 100 : 0;
		const asignacionPorAntiguedad = 50 * this.antiguedad;

		const salarioFamiliar = asignacionPorHijo + asignacionPorConyuge + asignacionPorAntiguedad;

		return this.getSueldoBasico() + salarioFamiliar;
	}

	public getRetenciones(): number {
		const sueldoBruto = this.getSueldoBruto();

		const obraSocial = 0.1 * sueldoBruto + 20 * this.cantidadHijos;
		const aportesJubilatorios = 0.15 * sueldoBruto;

		return obraSocial + aportesJubilatorios;
	}
}
