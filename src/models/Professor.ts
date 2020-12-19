
class Professor {
	id: number;
	name: string;
	disciplines: number[];

	constructor(
		id: number,
		name: string,
		disciplines: number[],
	){
		this.id = id;
		this.name = name;
		this.disciplines = disciplines;
	}
}

export default Professor;