const searchParams = new URLSearchParams(location.search);
for (const param of searchParams) {
    var params = param[0].split(" ")
    // var total = total + params.legth;
    // console.log(param[0].split(" "));

    if(params[1] == 'a') {
        var ch = params[1] = Number(1)
        console.log("a",ch)
    }
    else if(params[1] == 'b') {
        var da = params[1] = 1
        console.log("b",da)
    }
    else {
        var both = params[1] = Number(1)
        console.log("c",both)
    }

    var ch_total = ch + both
    console.log("ch + both", ch + both)
    $('.my_inspection_ch').html(params)
}
