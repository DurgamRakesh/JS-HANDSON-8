let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                        {name: 'Baba', id: 101, marks : 23 },
                        {name: 'yaga', id: 200, marks : 45 },
                        {name: 'Wick', id: 115, marks : 75 } ] 
// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']"

// let newarr = studentRecords.map((e)=>{
//     let count = ''
//     return count += e.name.toLocaleUpperCase()
//    })
//  console.log(newarr);

                
                // (or)

const namecaps = studentRecords.map(a => a.name.toLocaleUpperCase())
console.log(namecaps);

// <----------------------------------------------------------------------------------------------------->

//  "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

const marksabove = studentRecords.filter(e => e.marks > 50);
console.log(marksabove);

// <----------------------------------------------------------------------------------------------------->
  
// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

const idabove = studentRecords.filter(e => e.marks > 50 && e.id > 120);
console.log(idabove);

// <----------------------------------------------------------------------------------------------------->

// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

const sum = studentRecords.reduce((a, b) => a + b.marks,0);

console.log(sum);

        //   (or)

// let summ = 0;
// for(let i = 0; i < studentRecords.length; i++){
//     summ += studentRecords[i].marks
// }
// console.log(summ);

// <----------------------------------------------------------------------------------------------------->

// Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above

const sabove = studentRecords.filter(e => e.marks > 50 ).map(i => i.name);
console.log(sabove);

// <----------------------------------------------------------------------------------------------------->

// Question 6: This time we are required to print the sum of marks of the students with id > 120.

const sumof120 = studentRecords.filter(e => e.id > 120).reduce((a,b) => a + b.marks,0)
console.log(sumof120);

// <----------------------------------------------------------------------------------------------------->

// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.


const newmarks1 = studentRecords.filter(e =>e.marks < 50  ).map(i => i.marks + 15);
const newmarks2 = studentRecords.filter(e =>e.marks > 50  ).map(i => i.marks );
const totalmarks = newmarks1.concat(newmarks2).reduce((a,b) => a + b,0);

console.log(totalmarks);

// <----------------------------------------------------------------------------------------------------->

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

let studentsdetails = [];

function Student(name,classname,rollno){
        this.stuname = name,
        this.stuclassname = classname,
        this.sturollno = rollno

}

let student1 = new Student('Vishnu','10th',9)
let student2 = new Student('Santosh','9th',10)
let student3 = new Student('Anser','8th',25)
let student4 = new Student('Naveen','7th',30)
let student5 = new Student('Sravan','6th',16)
let student6 = new Student('Srikanth','5th',40)

studentsdetails.push(student1)
studentsdetails.push(student2)
studentsdetails.push(student3)
studentsdetails.push(student4)
studentsdetails.push(student5)
studentsdetails.push(student6)

console.log(studentsdetails);