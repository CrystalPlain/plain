$(document).ready(function(){
    const searchParams = new URLSearchParams(location.search);

    for (const param of searchParams) {
        if(param[0] == 'pc_total_v') {
            $('.m_ins_pc').html(param[1])
            var pc_param_v = param[1]
            $('.bar_line2').css({left: pc_param_v +'%'})
            $('.bar_line_per2').css({left: pc_param_v +'%'})
            $('.bar_line_per2').html(pc_param_v +'%')
            $('.orange').css({width: param_v + '%'})

            if (pc_param_v >100) {
                $('.bar_line_per2').css({left: '100%'})
            } else if (pc_param_v <=100) {
                $('.bar_line_per2').css({left: pc_param_v +'%'})
            }

            var pc_num = Number(param[1])  // param[1] = 23.5  Number(param[1])

            if (pc_num <=24) {
                $('.bar_t_dan').html('정상')
                $('div').remove('.r_t_text')
            }
            else if (pc_num <=49) {
                $('.bar_t_dan').html('위험(저)')
                $('.r_t_text').html('5년 안으로 검사 받아야 합니다')
            }
            else if(pc_num <=74) {
                $('.bar_t_dan').html('위험(중)')
                $('.r_t_text').html('3년 안으로 검사 받아야 합니다')
            }
            else {
                $('.bar_t_dan').html('위험(고)')
                $('.pc_my_r').html('위험')
                $('.rt_dis_ins_pc').addClass('dangerous_text')
                $('.r_t_text').html('1년 안으로 검사 받아야 합니다')
            }
        }
        else if(param[0] == 'p_total_v') {
            $('.m_ins_pan').html(param[1])
            var param_v = param[1]
            $('.bar_line1').css({left: param_v +'%'})
            $('.bar_line_per1').html(param_v +'%')
            $('.yellow').css({width: param_v + '%'})

            if (param_v >100) {
                $('.bar_line_per1').css({left: '100%'})
            } else if (param_v <=100) {
                $('.bar_line_per1').css({left: param_v +'%'})
            }

            var p_num = Number(param[1])  // param[1] = 23.5  Number(param[1])


            if (p_num <=24) {
                $('.bar_t_dan').html('정상')
            }
            else if (p_num <=49) {
                $('.bar_t_dan').html('위험(저)')
            }
            else if(p_num <=74) {
                $('.bar_t_dan').html('위험(중)')
            }
            else {
                $('.bar_t_dan').html('위험(고)')
                $('.p_my_r').html('위험')
                $('.rt_dis_ins_p').addClass('dangerous_text')
            }
        }
        // else if (param[0] == 'p_pro_v') {
        //     var param_v = param[1]
        //     console.log(param[1])
        //     $('.bar_line1').css({left: param_v +'%'})
        //     $('.bar_line_per1').css({left: param_v +'%'})
        //     $('.bar_line_per1').html(param_v +'%')
        //     $('.yellow').css({width: param_v + '%'})
        // }
        // else if(param[0] == 'pc_pro_v') {
        //     console.log(param[1])
        //     var pc_param_v = param[1]
        //     $('.bar_line2').css({left: pc_param_v +'%'})
        //     $('.bar_line_per2').css({left: pc_param_v +'%'})
        //     $('.bar_line_per2').html(pc_param_v +'%')
        //     $('.orange').css({width: param_v + '%'})
        // }
        else {
            console.log(0)
        }
    } 

    $('.on_shar_btn').click(function(){
        $('.on_shar_btn_box').toggleClass('on_s_active')
        
    })
    $('.test_shar_btn').click(function(){
        $('.test_shar_btn_box').toggleClass('test_s_active')
        
    })
    // $('.test_shar_btn').click(function((){
    //     $(window).resize(function(){
    //         var width = window.innerWidth;
    //         if(width <1002){
    //             $('.test_shar_btn').css({marginBottom: '40px'})
    //         }
    //             else {$('.test_shar_btn').css({marginBottom: '0'})}
    //     }).resize();
    // });
})




// $("input[type=radio]:checked").each(function(i, elements) {
//     index = $(elements).index("input:checked[type=radio]");
//     console.log($("input:checked[type=radio]").eq(index).attr("id"));
//     console.log($("input:checked[type=radio]").eq(index).val())
// })

