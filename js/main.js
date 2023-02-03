class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showInformation(){
        alert("Nombre: "+ this.name + "\nEdad: " + this.age)
    }
}
class Student{
    name;
   notes = [];
   setName(name){
       this.name = name;
   }
   addNote(note){
    this.notes.push(parseInt(note))
   }
   calculateFinalNote(){
       let finalNote = 0;
       this.notes.forEach((note)=>{
           finalNote+=note;
       })
       return finalNote
   }
}
function menu(option) {

    switch (option) {

        case 1:
            let persons =[];
            let total = 0;
            let option1;
            let older = 0;
            let olderName = "";
            do {
                option1 = prompt("1- Agregar persona" +
                    "\n2- Mostrar personas agregadas" +
                    "\n3- Mostrar personas mayores de" +
                    "\n4- Buscar personas por nombre" +
                    "\nSalir- Para mostrar el resulta y volver al menu principal");
                switch (option1) {
                    case "1":
                        let name = prompt("Ingrese nombre")
                        let age = parseInt(prompt("Ingrese edad"));
                        persons.push(new Person(name, age))
                        total += age;
                        if (age > older) {
                            older = age;
                            olderName = name;
                        }
                        break;
                    case "2":
                        if(persons.length == 0){
                            alert("No hay personas agregadas")
                        }else{
                            persons.forEach((person ) =>{person.showInformation()})
                        }
                        break;
                    case "3":
                        let ageMayor = parseInt(prompt("Mostrar personas mayores de: "));
                        let personsAgeMayor =persons.filter((person) =>
                            person.age> ageMayor
                        )
                        personsAgeMayor.forEach((person) =>{
                            person.showInformation();
                        })

                    break;
                    case "4":
                        let nameFind = prompt("Ingrese el nombre a buscar")
                       let person = persons.find((person) =>person.name=== nameFind);
                        person.showInformation();

                        break;
                }
            } while (option1 != "Salir");
            if(persons.length == 0){
                alert("No hay personas")
            }else{
                alert("La edad promedio es: " + total / persons.length);
                alert("La persona mayor es: " + olderName + " y su edad es: " + older)
            }

            break;
        case 2:
           let student = new Student;
            let option2
            let name = prompt("Ingrese su nombre")
            student.setName(name)
            do {
                let note = parseInt(prompt("Ingrese nota"));
                student.addNote(note);
                option2 = prompt("1- Para agregar otra nota\n" + "Salir- Para calcular nota final de un alumno y volver al menu principal\n");
            } while (option2 != "Salir");
            alert("La nota final de " + student.name + " es: " + student.calculateFinalNote() / student.notes.length);
            break;
        case 0:
            break;
        default:
            alert("Ingrese una opción válida");
            break;
    }
}

let option;
do {
    option = parseInt(prompt("1- Calcular edad promedio \n" +
        "2- Calcular nota final de un alumno \n" +
        "0- Para salir \n" +
        "Ingrese una opción"));
    menu(option);
} while (option != 0);