$(document).ready(function(){
    const urlParam = new URL(location.href).searchParams;
    const name_index = urlParam.get('index_name')
    console.log(name_index)
    $('#rt_name').html(name_index);




    $('.q_form').on('change', function() {

        var list_var = $("input[name='pan_pc_1']:checked").val();
        var list_var2 = $("input[name='pan_pc_2']:checked").val();
        var list_var3 = $("input[name='pan_pc_3']:checked").val();
        var list_var4 = $("input[name='pan_pc_4']:checked").val();
        var list_var5 = $("input[name='pan_pc_5']:checked").val();
        var list_var6 = $("input[name='pan_pc_6']:checked").val();
        var list_var7 = $("input[name='pan_pc_7']:checked").val();
        var list_var8 = $("input[name='pan_pc_8']:checked").val();
        var list_var9 = $("input[name='pan_pc_9']:checked").val();
        var list_var10 = $("input[name='pan_pc_10']:checked").val();
        var list_var11 = $("input[name='pan_pc_11']:checked").val();
        var list_var12 = $("input[name='pc_12']:checked").val();
        var list_var13 = $("input[name='pc_13']:checked").val();
        var list_var14 = $("input[name='pc_14']:checked").val();
        var list_var15 = $("input[name='pc_15']:checked").val();
        var list_var16 = $("input[name='pc_16']:checked").val();
        var list_var17 = $("input[name='pc_17']:checked").val();
        var list_var18 = $("input[name='pc_18']:checked").val();
        var list_var19 = $("input[name='pc_19']:checked").val();
        var list_var20 = $("input[name='pc_20']:checked").val();
        var list_var21 = $("input[name='pc_21']:checked").val();
        var list_var22 = $("input[name='pc_22']:checked").val();
        var list_var23 = $("input[name='pan_23']:checked").val();
        var list_var24 = $("input[name='pan_24']:checked").val();
        var list_var25 = $("input[name='pan_25']:checked").val();
        var list_var26 = $("input[name='pan_26']:checked").val();
        var list_var27 = $("input[name='pan_27']:checked").val();
        var list_var28 = $("input[name='pan_28']:checked").val();
        var list_var29 = $("input[name='pan_29']:checked").val();
        var list_var30 = $("input[name='pan_30']:checked").val();
        var list_var31 = $("input[name='pan_31']:checked").val();
        var list_var32 = $("input[name='pan_32']:checked").val();
        var list_var33 = $("input[name='pan_33']:checked").val();

        var pan_list_plus = 
            Number(list_var)+
            Number(list_var2)+
            Number(list_var3)+
            Number(list_var4)+
            Number(list_var5)+
            Number(list_var6)+
            Number(list_var7)+
            Number(list_var8)+
            Number(list_var9)+
            Number(list_var10)+
            Number(list_var11)+
            Number(list_var12)+
            Number(list_var13)+
            Number(list_var14)+
            Number(list_var15)+
            Number(list_var16)+
            Number(list_var17)+
            Number(list_var18)+
            Number(list_var19)+
            Number(list_var20)+
            Number(list_var21)+
            Number(list_var22)+
            Number(list_var25)+
            Number(list_var26)+
            Number(list_var27)+
            Number(list_var28)+
            Number(list_var29)+
            Number(list_var30)+
            Number(list_var31)+
            Number(list_var32)+
            Number(list_var33)

        var pc_list_plus = 
            Number(list_var)+
            Number(list_var2)+
            Number(list_var3)+
            Number(list_var4)+
            Number(list_var5)+
            Number(list_var6)+
            Number(list_var7)+
            Number(list_var8)+
            Number(list_var9)+
            Number(list_var10)+
            Number(list_var11)+
            Number(list_var12)+
            Number(list_var13)+
            Number(list_var14)+
            Number(list_var15)+
            Number(list_var16)+
            Number(list_var17)+
            Number(list_var18)+
            Number(list_var19)+
            Number(list_var20)+
            Number(list_var21)+
            Number(list_var22)+
            Number(list_var23)+
            Number(list_var24)+
            Number(list_var25)+
            Number(list_var26)+
            Number(list_var27)+
            Number(list_var28)+
            Number(list_var29)+
            Number(list_var30)+
            Number(list_var31)+
            Number(list_var32)+
            Number(list_var33)

        var p_percent = pan_list_plus/31 *100
        $('input[name=p_total_v]').attr('value',p_percent.toFixed(1))
        console.log('p_percent' ,p_percent.toFixed(1));

        var pc_percent = pc_list_plus/33 *100
        $('input[name=pc_total_v]').attr('value',pc_percent.toFixed(1))
        console.log('pc_percent' ,pc_percent.toFixed(1))
         
    })

    

    const searchParams = new URLSearchParams(location.search);
    for (const param of searchParams) {
        if(param[1] == 'women') {
            $("#pan_pc_Sex1").prop('checked',true);
        } else if (param[1] == 'men') {
            $("#pan_pc_Sex2").prop('checked',true);
        } else if (param[0] == 'age') {
            var param_n = Number(param[1])
            if(param_n < 55) {
                $("#pan_pc_Age1").prop('checked',true);
            } 
            else{
                $("#pan_pc_Age2").prop('checked',true);
            }
        } else if (param[0] == 'bmi') {
            var param_bmi = Number(param[1])
            if(param_bmi < 25) {
                $("#pan_pc_Obesity1").prop('checked',true);
            } else if(param_bmi <= 29) {
                $("#pan_pc_Obesity2").prop('checked',true);
            } else if (param_bmi <= 30) {
                $("#pan_pc_Obesity3").prop('checked',true);
            } else if (param_bmi <= 35) {
                $("#pan_pc_Obesity4").prop('checked',true);
            }
        }
        else if (param[0] == 'b_type') {
            if(param[1] == 'O_type' ) {
                $("#pan_pc_Blood2").prop('checked',true);
            } else {
                $("#pan_pc_Blood1").prop('checked',true);
            }
        }
    }
    $('#year, #month, #day').change(function(){
        var year = $('#year').val();
        var month = $('#month').val();
        var day = $('#day').val();
        var age = Number(year+month+day);

        var date = new Date();
        var t_year = String(date.getFullYear());
        var t_month = String(date.getMonth()+1);
        var t_day = String(date.getDate());
        var t_date = Number(t_year+t_month+t_day)

        var t_age = (t_year - year) +1
        $('#age').attr('value', t_age)
    })

    $('#height, #weight').change(function(){
        var height = $('#height').val();
        var weight = $('#weight').val();

        var bmi_t = weight/ (height/100 * height/100)
        var bsa_t = Math.sqrt((height * weight) / 3600)

        $('.bmi_in').html(bmi_t.toFixed(2))
        $('#bmi').attr('value', bmi_t.toFixed(2))

        $('.bsa_in').html(bsa_t.toFixed(2))
        $('#bsa').attr('value', bsa_t.toFixed(2))

        console.log(bmi_t,bsa_t)
    })

    $('.bmi').click(function(){
        var height = $('#height').val()
        var weight = $('#weight').val()
        
        var bmi_t = weight/ (height/100 * height/100)
        $('.bmi_in').html(bmi_t.toFixed(2))
        $('#bmi').attr('value', bmi_t.toFixed(2))
    })

    $('.bsa').click(function(){
        var height = $('#height').val()
        var weight = $('#weight').val()

        var bsa_t = Math.sqrt((height * weight) / 3600)
        $('.bsa_in').html(bsa_t.toFixed(2))
        $('#bsa').attr('value', bsa_t.toFixed(2))
    })

})