import { students  } from "/model/modelStudents.js";
import { studentsViewList } from "/view/viewStudents.js";
import { insertTitleList } from "/view/viewStudents.js";


const buttonCall = document.getElementById("btnListar");

// Obtenido del modelo
const getListStudents = (students) => {
    let datos = [];
    for (let s of students){
        let datosTemplate = `${s.id} - ${s.name} - ${s.age} - ${s.grade}`;
        datos.push(datosTemplate);
    }
    return datos;
}
// Asociando el evento al boton

buttonCall.addEventListener("click", () => {
    btnListar.setAttribute("disabled", "disabled");
    const response = getListStudents(students);
    console.log(response);
    studentsViewList(response);
    insertTitleList();
});

