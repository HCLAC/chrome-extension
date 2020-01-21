
function autoClick(){
    if ($("#videoPoint").css("display") == "none")
    {
        console.debug("not found test")
        return ;
    }
	if ($("#videoPointContent").length == 0){
        console.debug("not found videoPointContent");
        return ;
    }
    var answer = $("#PointQuestionAnswer").text();
    console.debug("answer: ", answer);
    if (answer.length  == 0) {
        $("[name=btn]").click();
        console.debug("not found PointQuestionAnswer");
        return;
    }
    var ctit = $(".ctit").text();
    console.debug("ctit: ", ctit);
    if (ctit == "多选题："){
        var ret = answer.match(/正确答案：([ABCD]*)。/)[1];
        console.debug(ret);
        $("[name=useranswer]").each(function () {
            if(ret.indexOf($(this).val())!=-1)
                $(this).prop( "checked", true )
        });
    } else if (ctit == "判断题："){
        var ret = answer.match(/正确答案：(.)。/)[1];
        console.debug(ret);
        if (ret == "对"){
            $("[name=useranswer]").each(function () {
                if($(this).val() == "Y")
                    $(this).prop( "checked", true )
            });
        } else {
            $("[name=useranswer]").each(function () {
                if($(this).val() == "N")
                    $(this).prop( "checked", true )
            });
        }
    } else {
        var ret = answer.match(/正确答案：([ABCD])。/)[1];
        console.debug(ret);
        $("[name=useranswer]").each(function () {
            if(ret.indexOf($(this).val())!=-1)
                $(this).prop( "checked", true )
        });
    }
    $("[name=btn]").click();
}
 
var interval=setInterval(autoClick,5000);