const fs = require("fs/promises");
const path = require("path");
const os = require('os');

async function  readFile() {
  const file = 'users.txt';
  try {
    const data = await fs.readFile(file, { encoding: 'utf8' })
    let row = ''
    const lines = []
    let counter = 0
    data.split(/\r\n|\n\r|\n|\r/).forEach(line =>  {
      if(line.trim() === '') {
        counter += 1
        lines.push(row)
        row = ''
        // console.log(`Line from file: ${line}`);
      } else {
        row +=  line + " ";
      }
    });
    console.log(counter)
    console.log(lines.length)
    
    let totalUsers = 0;
    const validUsers = [];
    lines.forEach((row) => {
      if (row.includes("usr:") 
        && row.includes("eme:") 
        && row.includes("psw:") 
        && row.includes("age:") 
        && row.includes("loc:") 
        && row.includes("fll:")) {
          totalUsers += 1;
          validUsers.push(row);
        }
    })
    
    const lastUser = validUsers[validUsers.length-1].split(' ');
    const finalUser = lastUser.filter(item => item.includes("usr:"))
    // console.log(finalUser);
    const res = finalUser[0].split(":")

    console.log(`Answer: number of correct users -> ${totalUsers} the name of the last valid user -> ${res[1]}`)


  } catch (err) {
    console.error(err);
  }  
}

readFile();