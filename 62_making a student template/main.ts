//making an interface for student information
interface Student{
    name:string;
    age:number;
    courses:string[]
}
let student : Student = {
    name:"Hashir",
    age:20,
    courses:["Sonography","Information Technology","Biochemistry"]
};
console.log(student);