import type { Empleado } from "./Empleado";

export class ReciboHaberes {
	private nombre: string;
	private direccion: string;
	private fechaEmision: Date;
	private sueldoBruto: number;
	private sueldoNeto: number;
	private desgloceConceptos: string;

	constructor(empleado: Empleado) {
		this.nombre = empleado.getNombre();
		this.direccion = empleado.getDireccion();
		this.fechaEmision = new Date();
		this.sueldoBruto = empleado.getSueldoBruto();
		this.sueldoNeto = empleado.getSueldoNeto();

		this.desgloceConceptos = 
		`Sueldo Bruto: ${
			this.sueldoBruto
		} | Retenciones: ${
			empleado.getRetenciones()
		} | Sueldo Neto: ${
			this.sueldoNeto
		}`;
	}

	// --------------------------------------------------------

	public getDesgloseConceptos(): string {
		return this.desgloceConceptos;
	}
}
