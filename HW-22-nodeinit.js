const fileSystem = require('fs');

const myData = JSON.stringify({
  firstName: "Hasmik",
  lastName: "Gevorgyan",
  age: 38,
  city: "Yerevan",
  email: "gevorgyan.icml@gmail.com",
  education: "Yerevan State College of Informatics "
}, null , 4);

const myData_ = myData.replace(/[{}]/g, '');
fileSystem.writeFile('./file', myData_, 'utf-8', (err, data)=>{
  if (err) console.log(err);
  console.log('file written');
});
fileSystem.writeFileSync('./file1', myData_, 'utf-8');
fileSystem.readFile('./file', 'utf-8', (err, data) =>{
  if (err) console.log(err);
  console.log(data);
});
const data1 = fileSystem.readFileSync('./file1', 'utf-8');
console.log(data1);