$(document).ready(function() {
    console.log(QUESTION[0][1].value.length)
    for(let i=0; i<16; i++) {
        let list = `<div class="q_list">
                        <div class="ql_question_box">
                            <span class="ql_q_num"><span>${QUESTION[0][i].item_no}</span></span>
                            <span class="ql_q_text">${QUESTION[0][i].title}</span>
                        </div>
                        
                        <div class="q_list_tab">`
                        for(let j=0; j<QUESTION[0][i].question.length; j++) {
                list +=`    <label for="pan_${QUESTION[0][i].num[j]}">
                                <input type="radio" name="pan_${QUESTION[0][i].item_no}" id="pan_${QUESTION[0][i].num[j]}" value="${QUESTION[0][i].value[j]}">
                                ${QUESTION[0][i].question[j]}
                            </label>`
                        }
                list +=`</div>
                    </div>`

        $('#pan').append(list);
    }
})




// $(document).ready(function() {
//     console.log(QUESTION[0][1].value.length)
//     for(let i=0; i<9; i++) {
//         let list = `
//             <div id="q_${QUESTION[0][i].item_no}" class="ql_box">
//                 <div class="ql_question_box">
//                     <span class="ql_q_num"><span>${QUESTION[0][i].item_no}</span></span>
//                     <span class="ql_q_text">${QUESTION[0][i].title}</span>
//                 </div>
//                 <div class="ql_answer_box">`
//                 for(let j=0; j<QUESTION[0][i].value.length; j++) {
//         list +=` <input type="radio" name="q_${QUESTION[0][i].item_no} ${QUESTION[0][i].id}" id="${QUESTION[0][i].value[j]}" value="${QUESTION[0][i].value[j]}">`
//                 }

//                 for(let k=0; k<QUESTION[0][i].question.length; k++) {
//         list +=`<label for="${QUESTION[0][i].value[k]}"><div class="ql_a_text ql_text${QUESTION[0][i].item_no}">${QUESTION[0][i].question[k]}</div></label>`
//                 }
//         list += `</div>
//             </div>`;

//         $('.q_list_box').append(list);
//     }
// })



        //문제 question의 버튼들을 누르면 색칠 되는 기능
        $('.ql_a_text').click((function(){
            alert(1)
        }))
        
$(document).on('click', '#page1', function(){
    $('.position_r').css({height: '280vh'})
})
$(document).on('click', '#page2', function(){
    $('.position_r').css({height: '600px'})
    $('#pan').css({display: 'none'})
})
$(document).on('click', '#page3', function(){
    $('.position_r').css({height: '600px'})
})

const urlParams = new URL(location.href).searchParams;
const name = urlParams.get('name');
console.log(name)
$('#id_name').html(name)
$('input[name=index_name]').attr('value', name);


$('.prev_page').click(function(){
    $('.prev_page').css({opacity: '1', zIndex: '99'})
    $('.next_page1').css({right: '0'})
    $('.next_page2').css({
        opacity: '0',
        zIndex: '9',
        bottom: '-100px',
    })
    $('.next_page1').html('다음')
})
$('.next_page1').click(function(){
    $('.prev_page').css({opacity: '0', zIndex: '9', display: 'none'})
    $('.next_page1').css({right: '90px', zIndex: '9', opacity: '0'})
    $('.next_page2').css({
        opacity: '1',
        zIndex: '99',
        bottom: '0px',
    })
})
$('.next_page2').click(function(){
    $('.prev_page').css({opacity: '0', zIndex: '9'})
    $('.next_page1').css({right: '90px', zIndex: '99', opacity: '0', display: 'none'})
    $('.next_page2').css({
        opacity: '0',
        zIndex: '9',
        bottom: '0px',
        right: '90px',
    })
    $('.next_page2').html('이전')
    $('.pre_next').css({opacity:'1', zIndex: '8'})
})




