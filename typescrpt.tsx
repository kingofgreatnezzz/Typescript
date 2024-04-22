let testNumner : string | number

testNumner = "heloo"

testNumner = 23

//ARRAY

 let names = ["john", "amaka"]

 names.push("mike")

  let numbers = [11,44,333]

  numbers = [34]



  let stringArray : string[]

  stringArray = ["helo"]

  let numberArr: number[]

  let teststring : (string| number)[]

  let user = {
    username: "john",
    age: 22,
    isAdmin:false
  }

  user.username = "jane"

  user.isAdmin = true 

  //user.phone = "7843590448439"


  let userObj : {
    username: string;
    age: number;
    isAdmin: boolean;
  };


  let userObj2 : {
    username: string;
    age: number;
    isAdmin: boolean;
    phone?: string
  };

  userObj2 = {
    username: "jane",
    age: 43,
    isAdmin:false,
  }

  let testAny:any;
  testAny = 12
  testAny = "hellow"
  testAny = true

  let testAnyArray : any[]

  testAnyArray = [1, "fg", []]


  //functionis 
let sayHi = () =>{
    console.log("Hi , welcme")
}

let funcReturnString = (): string=>{
    console.log("hi")
    return"lmamamd"

}

let mutiple = (num :number): number  =>{
    return num * 2;
}

let mutiple2 = (num :number): void  =>{
    //return num * 2;
    //do smth but dont return 
}

let sum = (num1:number , num2:number, another?: number) => {
    return num1 + num2
};

sum (2,3)


let  func = (user:{username:string, age:number, phone?:string}) =>{
    console.log(user.username)
}

//type aliases 
type UserType = {
    username : string,
    age: number,
    phone?: string,
};

let betterFun = (user:UserType)=>{
    console.log(user.username)
}

type myFunc = (a:number , b:string) => void

let write : myFunc = (num,str) => {
    console.log(num + "times" + str)
}

type User2 = {
    username: string,
    age: number,
    phone?: number,
    theme: "Dark" | "Light"
};

const userWithTheme : User2 = {
    username:"jane",
    age:45,
    theme:"Dark"
}