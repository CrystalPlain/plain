const urlParam = new URL(location.href).searchParams;
const name_index = urlParam.get('index_name')
console.log(name_index)
$('#rt_name').html(name_index);


var radios = document.getElementsByName('pan_1');

for (var i =0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
        console.log('radios', radios[i].value);
        break;
    }
}