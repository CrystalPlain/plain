$(document).ready(function(){
    const searchParams = new URLSearchParams(location.search);

    for (const param of searchParams) {
        if(param[0] == 'total_v') {
            $('.m_ins_pc').html(param[1])
            var param_v = param[1]
            $('.bar_line2').css({left: param_v +'%'})

            var p_num = Number(param[1])  // param[1] = 23.5  Number(param[1])

            if (p_num <= 24) {
                $('.my_result').html('없음')
                $('div').remove('.r_t_text')
            }
            else if (p_num <= 49) {
                $('.my_result').html('저')
                $('.r_t_text').html('5년 안으로 검사 받아야 합니다')
            }
            else if(p_num <= 74) {
                $('.my_result').html('중')
                $('.r_t_text').html('3년 안으로 검사 받아야 합니다')
            }
            else {
                $('.rt_dis_ins').html('위험')
                $('.my_result').html('고')
                $('.rt_dis_ins').addClass('dangerous_text')
                $('.r_t_text').html('1년 안으로 검사 받아야 합니다')
            }
        }
        // if((param[0] == 'total_v') && (param[0] == 'total_v')) {
        //     var pan = param[1] == 'total_v'
        //     var pan_pc = param[1] == 'total_v'
        //     $('.m_ins_pc').html(param[1])
        //     var param_v = param[1]
        //     $('.bar_line2').css({left: param_v +'%'})

        //     var p_num = Number(param[1])  // param[1] = 23.5  Number(param[1])

        //     if (p_num <= 24) {
        //         $('.my_result').html('없음')
        //         $('div').remove('.r_t_text')
        //     }
        //     else if (p_num <= 49) {
        //         $('.my_result').html('저')
        //         $('.r_t_text').html('5년 안으로 검사 받아야 합니다')
        //     }
        //     else if(p_num <= 74) {
        //         $('.my_result').html('중')
        //         $('.r_t_text').html('3년 안으로 검사 받아야 합니다')
        //     }
        //     else {
        //         $('.rt_dis_ins').html('위험')
        //         $('.my_result').html('고')
        //         $('.rt_dis_ins').addClass('dangerous_text')
        //         $('.r_t_text').html('1년 안으로 검사 받아야 합니다')
        //     }
        // }
        else {
            console.log(0)
        }
    }
})




// $("input[type=radio]:checked").each(function(i, elements) {
//     index = $(elements).index("input:checked[type=radio]");
//     console.log($("input:checked[type=radio]").eq(index).attr("id"));
//     console.log($("input:checked[type=radio]").eq(index).val())
// })

