// Crear la vista del getListStudents
// viewStudents.js
const studentsViewList = (resp) => {
    const listado = document.getElementById('listStudents');
    const fragment = document.createDocumentFragment(); // Corregido
    const tem = document.getElementById('templateList').content;
    
    resp.forEach(element => {
        const clon = tem.cloneNode(true); // Clonamos primero
        clon.querySelector('li').textContent = element; // Luego actualizamos el texto
        fragment.appendChild(clon);
    });
    
    listado.appendChild(fragment);
}


const insertTitleList = () => {
    const listado = document.getElementById('listDataStudent');
    const title = document.createElement('h2');
    title.innerHTML = "<strong>Lista de estudiantes</strong>";
    listado.insertAdjacentElement('afterbegin', title);
}

export {  studentsViewList, insertTitleList };