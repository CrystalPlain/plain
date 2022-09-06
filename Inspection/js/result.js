const searchParams = new URLSearchParams(location.search);
for (const param of searchParams) {
    // var total = total + params.legth;
        if(param[0].split(" ")[1] == 'p') {
            if(param[1] == 'true'){
                var p_t = param[1] = 1
                
                p_t++
                console.log(p_t++)
            }
    
            else {
                var p_f = param[1] = 0
                console.log("p_f",p_f)
    
                var p_f_total = p_f * $(p_f).length;
                console.log('p_f_total', p_f_total)
            }
        }
        else if(param[0].split(" ")[1] == 'pc') {
            if(param[1] == 'true'){
                var pc_t = param[1] = 1
                console.log("pc_t",pc_t)
    
                var pc_t_total = pc_t * $(pc_t).length;
                console.log('pc_t_total', pc_t_total)
            }
    
            else {
                var pc_f = param[1] = 0
                console.log("pc_f",pc_f)
    
                var pc_f_total = pc_f * $(pc_f).length;
                console.log('pc_f_total', pc_f_total)
            }
        }
        else {
            console.log('나머지들임')
        }
    
}

// $("input[type=radio]:checked").each(function(i, elements) {
//     index = $(elements).index("input:checked[type=radio]");
//     console.log($("input:checked[type=radio]").eq(index).attr("id"));
//     console.log($("input:checked[type=radio]").eq(index).val())
// })

