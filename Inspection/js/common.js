// let url = decodeURI(location.href);
// url = url.split("?");

// console.log(url)  //0: "file:///E:/Inspection/result.html" 1: "question_1=weight2kg_under&question_2=weight2kg_up2"

// if(url.length > 1) {
//     url = url[1];
//     url = url.split("&");

// console.log(url) // 0: "question_1=weight2kg_under"  1: "question_2=weight2kg_up2"

//     for(let i=0; i<url.length; i++) {
//         let tmp_url = url[i].split("=")

// console.log(tmp_url)   // 0: "question_1" 1: "weight2kg_under" // 0: "question_2"  1: "weight2kg_up2"
//         if(tmp_url == 'rg_c') {
//             rg_c = 'rg_c'
//         }console.log(tmp_url)
//     }
// }

const searchParams = new URLSearchParams(location.search);

for (const param of searchParams) {
  console.log(param);
}

const urlParams = new URL(location.href).searchParams;
const rg_c = urlParams.get('rg_c');
console.log(rg_c)

const name = urlParams.get('name');
console.log(name)
$('#rt_name').html(name)