//problem 1
const filterEvenNumbers=(numbers:number[]):number[]=>{
    return numbers.filter((number)=>number%2===0);
};

//problem 2
const reverseString=(text:string):string=>{
    return text.split("").reverse().join("");
};

//problem 3
type StringOrNumber=string|number;

const checkType=(value:StringOrNumber):string=>{
    return typeof value==="string"?"String":"Number";
};

//problem 4
const getProperty=<T,K extends keyof T>(object:T,key:K):T[K]=>{
    return object[key];
};

//problem 5
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}
const toggleReadStatus=(book:Book):Book&{isRead:boolean}=>{
    return{
        ...book,
        isRead:true
    };
};

//problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person{
    grade: string;

    constructor(name:string,age:number,grade:string){
        super(name,age);
        this.grade = grade;
    }

    getDetails=():string=>{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    };
}

//problem 7
const getIntersection=(firstArray:number[],secondArray:number[]):number[]=>{
    return firstArray.filter((number)=>secondArray.includes(number));
};


