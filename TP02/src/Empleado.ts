export abstract class Empleado {
	private nombre: string;
	private direccion: string;
	private estadoCivil: string;
	private fechaNacimiento: Date;
	private sueldoBasico: number;

	constructor(
		nombre: string,
		direccion: string,
		estadoCivil: string,
		fechaNacimiento: Date,
		sueldoBasico: number
	) {
		this.nombre = nombre;
		this.direccion = direccion;
		this.estadoCivil = estadoCivil;
		this.fechaNacimiento = fechaNacimiento;
		this.sueldoBasico = sueldoBasico;
	}

	// --------------------------------------------------------

	public getEdad(): number {
		return new Date().getFullYear() - this.fechaNacimiento.getFullYear();
	}

	// Las clases que hereden de Empleado deben implementar estos métodos
	public abstract getSueldoBruto(): number;
	public abstract getRetenciones(): number;

	public getSueldoNeto(): number {
		return this.getSueldoBruto() - this.getRetenciones();
	}

	// Getters ------------------------------------------------

	public getNombre(): string {
		return this.nombre;
	}

	public getDireccion(): string {
		return this.direccion;
	}

	public getEstadoCivil(): string {
		return this.estadoCivil;
	}

	public getSueldoBasico(): number {
		return this.sueldoBasico;
	}
}
