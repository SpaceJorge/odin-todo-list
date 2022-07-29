/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
//test
console.log("The Maestruli sends his regards.");
//code
const projectFactory = (title, description,dueDate) =>{
    const projectTodoLists = [];
    let listID = 0;
    const addTodoList = (todoList) =>{
        projectTodoLists.push(listID,todoList);
        listID ++;
    }
    const removeTodoList = (id) =>{
        //search and take away from array
        for (let i = 0; i< projectTodoLists.length; i++){
            if (projectTodoLists[i].listID == id){
                projectTodoLists.splice(i,1);
                break;
            }
        }
    }
    const getProjectTodoLists = () =>{
        return projectTodoLists
    }
    return { title, description, dueDate, getProjectTodoLists, addTodoList, removeTodoList }
}

const defaultProject = projectFactory("Default Project", "This project is a placeholder", "01/01/2024");

const todoListFactory = (title, description, dueDate, priority) => {
    const checkList = [];
    //let setDate;
    let isComplete = false;
    let checkID = 0;
    /*const addDueDate = (dueDate) =>{
        let today = dateToday();
        if (dueDate <= today){
            //dont set?
            alert("Your date is before today");
        }
        setDate = dueDate;
    }*/

    const addCheckItem = (text, isChecked) =>{
        
        checkList.push({checkID, text, isChecked});
        checkID ++;
    }
    const removeCheckItem = (id) => {
        //search and take away from array
        for (let i = 0; i< checkList.length; i++){
            if (checkList[i].checkID == id){
                checkList.splice(i,1);
                break;
            }
        }
    }
    const getCheckList = () => {
        return checkList
    }
    const getComplete = () => {
        return isComplete
    }
    const toggleComplete = () =>{
        if (isComplete == false){
            isComplete = true;
        }else{
            isComplete = false;
        }
    }
    

    
    return{ title, description, dueDate, priority, getComplete,toggleComplete, getCheckList, addCheckItem, removeCheckItem}
}

const defaultList = todoListFactory( "Default List", "This list is a default list", "01/01/2023", 1);
console.table(defaultList);

defaultProject.addTodoList(defaultList);
console.table(defaultProject);
console.table(defaultProject.getProjectTodoLists);

const dateToday = () =>{
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}/${month}/${year}`;
    return currentDate
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0QkFBNEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSztBQUM5QztBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3Rlc3RcbmNvbnNvbGUubG9nKFwiVGhlIE1hZXN0cnVsaSBzZW5kcyBoaXMgcmVnYXJkcy5cIik7XG4vL2NvZGVcbmNvbnN0IHByb2plY3RGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbixkdWVEYXRlKSA9PntcbiAgICBjb25zdCBwcm9qZWN0VG9kb0xpc3RzID0gW107XG4gICAgbGV0IGxpc3RJRCA9IDA7XG4gICAgY29uc3QgYWRkVG9kb0xpc3QgPSAodG9kb0xpc3QpID0+e1xuICAgICAgICBwcm9qZWN0VG9kb0xpc3RzLnB1c2gobGlzdElELHRvZG9MaXN0KTtcbiAgICAgICAgbGlzdElEICsrO1xuICAgIH1cbiAgICBjb25zdCByZW1vdmVUb2RvTGlzdCA9IChpZCkgPT57XG4gICAgICAgIC8vc2VhcmNoIGFuZCB0YWtlIGF3YXkgZnJvbSBhcnJheVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTwgcHJvamVjdFRvZG9MaXN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAocHJvamVjdFRvZG9MaXN0c1tpXS5saXN0SUQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIHByb2plY3RUb2RvTGlzdHMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdFRvZG9MaXN0cyA9ICgpID0+e1xuICAgICAgICByZXR1cm4gcHJvamVjdFRvZG9MaXN0c1xuICAgIH1cbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGdldFByb2plY3RUb2RvTGlzdHMsIGFkZFRvZG9MaXN0LCByZW1vdmVUb2RvTGlzdCB9XG59XG5cbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXCJEZWZhdWx0IFByb2plY3RcIiwgXCJUaGlzIHByb2plY3QgaXMgYSBwbGFjZWhvbGRlclwiLCBcIjAxLzAxLzIwMjRcIik7XG5cbmNvbnN0IHRvZG9MaXN0RmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgY2hlY2tMaXN0ID0gW107XG4gICAgLy9sZXQgc2V0RGF0ZTtcbiAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIGxldCBjaGVja0lEID0gMDtcbiAgICAvKmNvbnN0IGFkZER1ZURhdGUgPSAoZHVlRGF0ZSkgPT57XG4gICAgICAgIGxldCB0b2RheSA9IGRhdGVUb2RheSgpO1xuICAgICAgICBpZiAoZHVlRGF0ZSA8PSB0b2RheSl7XG4gICAgICAgICAgICAvL2RvbnQgc2V0P1xuICAgICAgICAgICAgYWxlcnQoXCJZb3VyIGRhdGUgaXMgYmVmb3JlIHRvZGF5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHNldERhdGUgPSBkdWVEYXRlO1xuICAgIH0qL1xuXG4gICAgY29uc3QgYWRkQ2hlY2tJdGVtID0gKHRleHQsIGlzQ2hlY2tlZCkgPT57XG4gICAgICAgIFxuICAgICAgICBjaGVja0xpc3QucHVzaCh7Y2hlY2tJRCwgdGV4dCwgaXNDaGVja2VkfSk7XG4gICAgICAgIGNoZWNrSUQgKys7XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZUNoZWNrSXRlbSA9IChpZCkgPT4ge1xuICAgICAgICAvL3NlYXJjaCBhbmQgdGFrZSBhd2F5IGZyb20gYXJyYXlcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8IGNoZWNrTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAoY2hlY2tMaXN0W2ldLmNoZWNrSUQgPT0gaWQpe1xuICAgICAgICAgICAgICAgIGNoZWNrTGlzdC5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZXRDaGVja0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBjaGVja0xpc3RcbiAgICB9XG4gICAgY29uc3QgZ2V0Q29tcGxldGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBpc0NvbXBsZXRlXG4gICAgfVxuICAgIGNvbnN0IHRvZ2dsZUNvbXBsZXRlID0gKCkgPT57XG4gICAgICAgIGlmIChpc0NvbXBsZXRlID09IGZhbHNlKXtcbiAgICAgICAgICAgIGlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIFxuICAgIHJldHVybnsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZ2V0Q29tcGxldGUsdG9nZ2xlQ29tcGxldGUsIGdldENoZWNrTGlzdCwgYWRkQ2hlY2tJdGVtLCByZW1vdmVDaGVja0l0ZW19XG59XG5cbmNvbnN0IGRlZmF1bHRMaXN0ID0gdG9kb0xpc3RGYWN0b3J5KCBcIkRlZmF1bHQgTGlzdFwiLCBcIlRoaXMgbGlzdCBpcyBhIGRlZmF1bHQgbGlzdFwiLCBcIjAxLzAxLzIwMjNcIiwgMSk7XG5jb25zb2xlLnRhYmxlKGRlZmF1bHRMaXN0KTtcblxuZGVmYXVsdFByb2plY3QuYWRkVG9kb0xpc3QoZGVmYXVsdExpc3QpO1xuY29uc29sZS50YWJsZShkZWZhdWx0UHJvamVjdCk7XG5jb25zb2xlLnRhYmxlKGRlZmF1bHRQcm9qZWN0LmdldFByb2plY3RUb2RvTGlzdHMpO1xuXG5jb25zdCBkYXRlVG9kYXkgPSAoKSA9PntcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBkYXkgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7XG4gICAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgLy8gVGhpcyBhcnJhbmdlbWVudCBjYW4gYmUgYWx0ZXJlZCBiYXNlZCBvbiBob3cgd2Ugd2FudCB0aGUgZGF0ZSdzIGZvcm1hdCB0byBhcHBlYXIuXG4gICAgbGV0IGN1cnJlbnREYXRlID0gYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YDtcbiAgICByZXR1cm4gY3VycmVudERhdGVcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=