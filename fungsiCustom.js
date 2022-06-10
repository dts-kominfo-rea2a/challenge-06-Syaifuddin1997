// TODO: import module bila dibutuhkan di sini


// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (err, data) => {

  const fs = require('fs');

  fs.readFile(file1, "utf8", (err, data1) => {

    if(err) {
      return console.log(err);
    } 
  
    fs.readFile(file2,"utf8", (err, data2)=> {
      if(err) {
        return console.log(err);
      } 
  
      fs.readFile(file3, "utf8", (err, data3)=> {
        if(err) {
          return console.log(err);
        } 
    
        let fileJson1 = JSON.parse(data1);
        let fileJson2 = JSON.parse(data2);
        let fileJson3 = JSON.parse(data3);
    
        let dataJson1 = (fileJson1.message.slice(5));
        let dataJson2 = (fileJson2[0].message.slice(5));
        let dataJson3 = (fileJson3[0].data.message.slice(5));
    
        return console.log(dataJson1 + ", " + dataJson2 + " ," + dataJson3);
      });
    });
  });
}





// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
