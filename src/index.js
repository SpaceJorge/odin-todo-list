//test
console.log("The Maestruli sends his regards.");
//code

const todoListFactory = (title, description, dueDate, priority, isComplete) => {
    let checkList = [];
    let setDate;
    const addDueDate = (dueDate) =>{
        let today = dateToday();
        if (dueDate <= today){
            //dont set?
            alert("Your date is before today");
        }
        setDate = dueDate;
    }

    const addCheckItem = (item, isChecked){
        checkList.push({item, isChecked});
    }

    
    

    
    return{ title, description, checkList, setDate, priority, isComplete, addCheckItem}
}

const defaultList = todoListFactory( "Vacation", "What a time to be alive", ["bla","blabla","bla"], "01/01/2023", "red", false);
console.table(defaultList);

const projectFactory = (title, description) =>{

}

const dateToday = (){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}/${month}/${year}`;
    return currentDate
}