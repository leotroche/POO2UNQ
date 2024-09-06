import { Empleado } from "./Empleado";

export class EmpleadoPlantaTemporaria extends Empleado {
	private fechaFinDesignacion: Date;
	private cantidadHorasExtra: number;

	constructor(
		nombre: string,
		direccion: string,
		estadoCivil: string,
		fechaNacimiento: Date,
		sueldoBasico: number,
		fechaFinDesignacion: Date,
		cantidadHorasExtra: number,
	) {
		super(nombre, direccion, estadoCivil, fechaNacimiento, sueldoBasico);

		this.fechaFinDesignacion = fechaFinDesignacion;
		this.cantidadHorasExtra = cantidadHorasExtra;
	}

	// --------------------------------------------------------

	public getSueldoBruto(): number {
		const asignacionPorHorasExtra = 40 * this.cantidadHorasExtra;
		return this.getSueldoBasico() + asignacionPorHorasExtra;
	}

	public getRetenciones(): number {
		const sueldoBruto = this.getSueldoBruto();

		const supera50Anios = this.getEdad() > 50;
		const asignacionPorEdad = supera50Anios ? 25 : 0;

		const obraSocial = 0.1 * sueldoBruto + asignacionPorEdad;
		const aportesJubilatorios = 0.1 * sueldoBruto + 5 * this.cantidadHorasExtra;

		return obraSocial + aportesJubilatorios;
	}
}
