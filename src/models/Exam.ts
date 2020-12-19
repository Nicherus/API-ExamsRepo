
class Exam {
	id?: number;
	pdf: string;
	name: string;
    exams_types_id: number;
    disciplines_id: number;
    professors_id: number;

    constructor(
    	pdf: string,
    	name: string,
    	exams_types_id: number,
    	disciplines_id: number,
    	professors_id: number,
    ){
    	this.pdf = pdf;
    	this.name = name;
    	this.exams_types_id = exams_types_id;
    	this.disciplines_id = disciplines_id;
    	this.professors_id = professors_id;
    }
}

export default Exam;