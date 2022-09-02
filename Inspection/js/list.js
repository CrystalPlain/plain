let cate = get_url_info("cate");
for(let i=0; i<QUESTION[cate_no].length; i++) {
    let list = `
    <div class="q_list_box">
        <div id="q_${QUESTION[cate_no].item_no}" class="ql_box">
            <div class="ql_question_box">
                <span class="ql_q_num"><span>${QUESTION[cate_no][i].item_no}</span></span>
                <span class="ql_q_text">${QUESTION[cate_no][i].title}</span>
            </div>
            <div class="ql_answer_box">`
            for(let j=0; j<QUESTION[cate_no][i].value.lenght; j++) {
               list +=` <input type="radio" name="question_${QUESTION[cate_no][i].item_no}" id="${QUESTION[cate_no][i].value[j]}" value="${QUESTION[cate_no][i].value[j]}">`
            }

            for(let k=0; k<QUESTION[cate_no][i].quetion.lenght; k++) {
                list +=`<label for="weight_X"><div class="ql_a_text ql_text${QUESTION[cate_no][i].item_no}">${QUESTION[cate_no][i].quetion[j]}</div></label>`
            }
            list += `</div>
        </div>
    </div>`;

    $('.q_list_box').append(list);
}