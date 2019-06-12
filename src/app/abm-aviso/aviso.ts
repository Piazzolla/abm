export class Aviso {

    public titulo: string;
    public cuerpo: string;
    public fecha_vencimiento: string;
    public fecha_alta: string;

	constructor(titulo, cuerpo, fecha_vencimiento, fecha_alta ) 
	{
		this.titulo = titulo;
		this.cuerpo = cuerpo;
		this.fecha_vencimiento = fecha_vencimiento;
		this.fecha_alta = fecha_alta;
	}
}
