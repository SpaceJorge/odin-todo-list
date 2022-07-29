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