// 以下TypeScript公式チュートリアル(https://www.typescriptlang.org/docs/tutorial.html)から引用
import Student from './class/student'

function greeter(person: Student) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.title = greeter(user);
