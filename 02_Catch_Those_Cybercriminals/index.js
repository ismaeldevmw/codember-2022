const fs = require('fs/promises');

async function decodeMessage() {
  try {
    const data = await fs.readFile('./encrypted.txt', { encoding: 'utf8' })

    const splitString = data.split(" ");
    const words = []
    
    splitString.forEach((element) => {
      
      let codes = []
      while (element.length > 0) {
        if(element.startsWith(9)) {
          codes.push(element.slice(0,2))
          element = element.slice(2)
        } else {
          codes.push(element.slice(0,3))
          element = element.slice(3)
        }
      }
      
      // console.log(codes)
      // console.log(String.fromCharCode(...codes))
      words.push(String.fromCharCode(...codes))
    });

    return words.join(" ");

  } catch (err) {
    console.error(err)
  }
}

async function run() {
  console.log(await decodeMessage()); // this does
}

run();

// 116 104 97 110 107 115 thanks
// 102 111 114 for
// 1121 08 97 121 105 110 103 playing
// 99 111 100 101 109 98 101 114 codember
// 112 108 101 97 115 101 please
// 115 104 97 114 101 share