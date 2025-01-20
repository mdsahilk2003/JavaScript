// toDoApp...

let todo = [];
let req = prompt("Enter your request !");
while(true){
    if(req == "quit"){
        console.log("Quiting the app");
        break;
    }
    if (req == "list"){
        console.log("_______________");
       for(let i=0; i<todo.length; i++){
        console.log(i, todo[i]);
       } 
        console.log("_______________");
    }else if(req == "add"){
        let task = prompt("Please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }else if (req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx, 1);
        console.log("Task deleted !");
    }else{
        console.log("Wrong request !");
    }
    req = prompt("Enter your request !");
}