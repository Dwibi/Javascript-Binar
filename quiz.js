const text = "nama saya adalah budi, saya bekerja sebagai frontend engineer";

const array = [1000, 20, 15, 18, 1, 9, 35];

const isObject = {
  nama_mobil: "ferrari",
  kecepatan: "6000 cc",
  harga: 20000000000,
  tipe: "tidak diketahui",
};
const arrayOf = [
  {
    nama_mobil: "lamborgini",
    kecepatan: "8000 cc",
    harga: 70000000000,
    tipe: "aventador",
  },
];

//1 . gunakan metode replaceAll() pada input variable text diatas:
//output: "nama saya adalah budi saya bekerja sebagai javascript engineer"
const updateText = text.replaceAll(",", "");
const newText = updateText.replaceAll("frontend", "javascript");
console.log(newText);

//2. gunakan metode substring() pada input variable text diatas:
// output : "saya bekerja sebagai frontend engineer"
const substringText = text.substring(23, text.length);
console.log(substringText);

//3. gunakan metode toUpperCase() pada input variable text diatas:
// output : "NAMA SAYA ADALAH BUDI, SAYA BEKERJA SEBAGAI FRONTEND ENGINEER"
const toUpperCaseText = text.toUpperCase();
console.log(toUpperCaseText);

//4. gunakan metode sorting berdasarkan descending dan ascending pada input variable array diatas:
// output : ascending :[1, 9, 15, 18, 20, 35, 1000]
// output : descending: [1000, 35, 20, 18, 15, 9, 1]
const ascending = array.sort((a, b) => a - b);
console.log(ascending);
const descending = array.sort((a, b) => b - a);
console.log(descending);

//5. gunakan metode indexOf() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" = (number of character)
const indexOfText = text.indexOf("frontend engineer");
console.log(indexOfText);

//7. gunakan metode includes() untuk pencarian nama pada input variable text diatas:
// output : temukan string "frontend engineer" : (boolean value)
const includesText = text.includes("frontend engineer");
console.log(includesText);

//5. gunakan metode indexOf() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 18 = [nilainya]
const indexOfArray = array.indexOf(18);
console.log(indexOfArray);

//7. gunakan metode includes() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai 2000 = false
const includesArray = array.includes(2000);
console.log(includesArray);

//8. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : hapus nilai selain 1000 = [35, 20, 18, 15, 9, 1]
const filterArray = array.filter((num) => num < 1000);
console.log(filterArray);

//9. gunakan metode filter() untuk pencarian nama pada input variable array diatas:
// output : temukan nilai sama dengan 1000 = [1000]
const newFilterArray = array.filter((num) => num >= 1000);
console.log(newFilterArray);

//10. gabungkan variable isObject kedalam variable arrayOf dengan menggunakan method push atau spread operator
/**
    output:
     const arrayOf = [{
        nama_mobil: "lamborgini",
        kecepatan: "8000 cc",
        harga: 70000000000,
        tipe: "aventador"
    },{
        nama_mobil: "ferrari",
        kecepatan: "6000 cc",
        harga: 20000000000,
        tipe: "tidak diketahui"
    }]
 * */
arrayOf.push({
  nama_mobil: "ferrari",
  kecepatan: "6000 cc",
  harga: 20000000000,
  tipe: "tidak diketahui",
});
console.log(arrayOf);

//11. Buat metode Function() dari sebuah  semua methode algorithma yg telah di kerjakan lalu return setiap kondisinya dan berikan nama function yg sesuai denga kebutuhan
/**
    output : 
        function(){
            // isilah metode tersebut kedalam function()///
            // berikan return valuenya
        } 
* */
console.log("/////////////////////////////////////////////////////////////////////////");
// 1
function replaceText() {
  const updateText = text.replaceAll(",", "");
  return updateText.replaceAll("frontend", "javascript");
}
console.log(replaceText(text));

// 2
function substringTextNew() {
  return text.substring(23, text.length);
}
console.log(substringTextNew(text));

// 3
function toUpperCaseTextNew() {
  return text.toUpperCase();
}
console.log(toUpperCaseTextNew(text));

// 4
function ascendingNew() {
  return array.sort((a, b) => a - b);
}
console.log(ascendingNew(array));

function descendingNew() {
  return array.sort((a, b) => b - a);
}
console.log(descendingNew(array));

// 5
function indexOfTextNew() {
  return text.indexOf("frontend engineer");
}
console.log(indexOfTextNew(text));

// 7
function includesTextNew() {
  return text.includes("frontend engineer");
}
console.log(includesTextNew(text));

// 5
function indexOfArrayNew() {
  return array.indexOf(18);
}
console.log(indexOfArrayNew(array));

// 7
function includesArrayNew() {
  return array.includes(2000);
}
console.log(includesArrayNew(array));

// 8
function filterArrayNew() {
  return array.filter((num) => num < 1000);
}
console.log(filterArrayNew(array));

// 9
function filterArrayBaru() {
  return array.filter((num) => num >= 1000);
}
console.log(filterArrayBaru(array));

// 10
function arrayPush() {
  console.log(arrayOf);
}
arrayPush();
