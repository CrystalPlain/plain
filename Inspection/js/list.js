$(document).ready(function() {
    console.log(QUESTION[0][1].value.length)
    for(let i=0; i<9; i++) {
        let list = `
            <div id="q_${QUESTION[0][i].item_no}" class="ql_box">
                <div class="ql_question_box">
                    <span class="ql_q_num"><span>${QUESTION[0][i].item_no}</span></span>
                    <span class="ql_q_text">${QUESTION[0][i].title}</span>
                </div>
                <div class="ql_answer_box">`
                for(let j=0; j<QUESTION[0][i].value.length; j++) {
        list +=` <input type="radio" name="q_${QUESTION[0][i].item_no} ${QUESTION[0][i].id}" id="${QUESTION[0][i].value[j]}" value="${QUESTION[0][i].value[j]}">`
                }

                for(let k=0; k<QUESTION[0][i].question.length; k++) {
        list +=`<label for="${QUESTION[0][i].value[k]}"><div class="ql_a_text ql_text${QUESTION[0][i].item_no}">${QUESTION[0][i].question[k]}</div></label>`
                }
        list += `</div>
            </div>`;

        $('.q_list_box').append(list);
    }
})



        //문제 question의 버튼들을 누르면 색칠 되는 기능
        $('.ql_a_text').click((function(){
            alert(1)
        }))

const urlParams = new URL(location.href).searchParams;
const name = urlParams.get('name');
console.log(name)
$('#id_name').html(name)


