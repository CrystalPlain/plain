$(document).ready(function(){
    const urlParam = new URL(location.href).searchParams;
    const name_index = urlParam.get('index_name')
    console.log(name_index)
    $('#rt_name').html(name_index);


    
//     var pan_input = $('#pan').find('input').eq($(this.index))
//     console.log(pan_input)
//     $(pan_input).click(function(){

// console.log(1)
//         var radios = document.getElementsByName('pan_1');

//         var id = $('#pan').find('input').attr('id');
//         var value = $('#pan').find('input').val();

//         var id = $('input[type="radio"]:checked').attr('id');
//         var value = $('input[type="radio"]:checked').val();

//         var str = "";
//         $('input[type="radio"]:not(:checked)').each(function(){
//             var id = $(this).attr('id');
//             var value = $(this).val();
//             str += id + "/" + value + ",";
//         })
//     })

    $('#pan_pc input').on('change', function() {

        var list_var = $("input[name='pan_1']:checked").val();
        var list_var2 = $("input[name='pan_2']:checked").val();
        var list_var3 = $("input[name='pan_3']:checked").val();
        var list_var4 = $("input[name='pan_4']:checked").val();
        var list_var5 = $("input[name='pan_5']:checked").val();
        var list_var6 = $("input[name='pan_6']:checked").val();
        var list_var7 = $("input[name='pan_7']:checked").val();
        var list_var8 = $("input[name='pan_8']:checked").val();
        var list_var9 = $("input[name='pan_9']:checked").val();
        var list_var10 = $("input[name='pan_10']:checked").val();
        var list_var11 = $("input[name='pan_11']:checked").val();
        var list_var12 = $("input[name='pan_12']:checked").val();
        var list_var13 = $("input[name='pan_13']:checked").val();
        var list_var14 = $("input[name='pan_14']:checked").val();
        var list_var15 = $("input[name='pan_15']:checked").val();
        var list_var16 = $("input[name='pan_16']:checked").val();

        var list_var_plus = Number(list_var)+Number(list_var2)+Number(list_var3)+Number(list_var4)+Number(list_var5)+Number(list_var6)+Number(list_var7)+Number(list_var8)+Number(list_var9)+Number(list_var10)+Number(list_var11)+Number(list_var12)+Number(list_var13)+Number(list_var14)+Number(list_var15)+Number(list_var16)

        var percent = list_var_plus/17 *100
        $('input[name=total_v]').attr('value',percent.toFixed(1))
        console.log(percent.toFixed(1));
         
    })
})