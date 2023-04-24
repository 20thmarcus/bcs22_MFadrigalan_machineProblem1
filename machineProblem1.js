/*
	Program: Computation of Grades using Function
	Programmer: Marcus Jurvy Fadrigalan
	Section: BCS22
	Start Date: April 17, 2023
	End Date: April 25, 2023
*/
function studentGrades (){

let Grade = [];

var name, eA1, eA2, eA3, eA4, eA5, sA1, sA2, sA3
var majorexamGrade, classParticipation, summativeassessmentFinal
var letterGrade, letter;


for (let i = 0; i < 5; i++){
	name = prompt("Enter the name of the student: ");
	eA1 = parseInt(prompt("Enter enabling assessment 1: "));
	eA2 = parseInt(prompt("Enter enabling assessment 2: "));
	eA3 = parseInt(prompt("Enter enabling assessment 3: "));
	eA4 = parseInt(prompt("Enter enabling assessment 4: "));
	eA5 = parseInt(prompt("Enter enabling assessment 5: "));
	sA1 = parseInt(prompt("Enter summative assessment 1: "));
	sA2 = parseInt(prompt("Enter summative assessment 2: "));
	sA3 = parseInt(prompt("Enter summative assessment 3: "));
	majorexamGrade = parseInt(prompt("Enter major exam grade: "));

	classParticipation = Math.round((eA1 + eA2 + eA3 + eA4 + eA5) / 5);

	summativeassessmentFinal = Math.round((sA1 + sA2 + sA3) / 3);

	letterGrade = Math.round((classParticipation * 0.3) + (summativeassessmentFinal * 0.3) + (majorexamGrade * 0.4));

	if (letterGrade >= 90) {
		letter = "A";
	} else if (letterGrade >= 80) {
		letter = "B";
	} else if (letterGrade >= 70) {
		letter = "C";
	} else if (letterGrade >= 60) {
		letter = "D";
	} else {
		letter = "F";
	};

	Grade[i] = {
		Student_Name: name,
		Class_Participation: classParticipation,
		Summative_Assessment: summativeassessmentFinal,
		Exam_Grade: majorexamGrade,
		Grade_Score: majorexamGrade,
		Letter_Grade: letter
	};
};

console.table(Grade);
}
for (m = 1; m<=5; m++) {
	studentGrades()
}