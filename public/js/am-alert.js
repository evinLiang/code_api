;(function ( $, window, document, undefined ){
	$.amAlert = {

		//弹出提示框
        toast: function (req) {

        	//判断toast是否已经显示,防止二次点击再次生成
        	if($(".am-alert-toast").is(":visible")){
        		return
        	}
            var content = req.content || "我是一个toast",	//toast内容
            duration = req.duration || 2500,				//toast显示时间,默认2秒
            theme = req.theme || 'default';              //颜色，success、warning、danger、secondary
            var ldialogDiv ='<div class="am-alert-panel am-alert-toast"><div class="am-alert am-alert-'+theme+'" data-am-alert><button type="button" class="am-close">&times;</button><p>'+content+'</p></div></div>';
            $("body").append(ldialogDiv);	//显示toast

            //显示后关闭toast
            setTimeout(function(){
            	$(".am-alert-toast").remove();
            },duration)
        }
	}
})(jQuery, window,document);
