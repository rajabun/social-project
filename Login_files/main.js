!function(t,a,i){var s={_jquery_cdn:"//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",_jquery_local:path.js+"jquery.min.js",_fastclick:path.js+"fastclick.min.js",_translate:"//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",_slick:path.js+"slick.min.js",_equalize:path.js+"equalheight.min.js",_validate:path.js+"jquery.validate.min.js",_autoNum:path.js+"autoNumeric.min.js",_datepicker:[path.js+"bootstrap-datepicker.min.js",path.css+"datepicker.css"],_chosen:[path.js+"chosen.jquery.min.js",path.css+"chosen.css"],_autocomplete:path.js+"jquery.autocomplete.min.js",_redactor:[path.js+"redactor.min.js",path.js+"video.min.js",path.css+"redactor.css"]},o={init:function(){o.fastClick(),o.enableActiveStateMobile(),o.WPViewportFix(),o.equalize(),o.mainHeight(),o.headerOpt(),o.userDropdown(),o.slider(),o.slideTab(),o.selectNav(),o.yesNo(),o.cloneTitle(),o.videoFluid(),o.coverProject(),o.fillImg(),o.readStory(),o.autoThousand(),o.chooseReward(),o.stepNav(),o.contributorEntry(),o.validateLanding(),o.validateProject(),o.validateConfirm(),o.notif(),o.tabNav(),o.tabNavWrapper(),o.scrollToElement(),o.radioNav(),o.datePicker(),o.listInterest(),o.autoComplete(),o.customRadio(),o.chosen(),o.sitePaging(),o.floatLabel(),o.zoneWhite(),o.togglePost(),o.textEditor(),o.removeReward()},fastClick:function(){Modernizr.load({load:s._fastclick,complete:function(){FastClick.attach(a.body)}})},enableActiveStateMobile:function(){a.addEventListener&&a.addEventListener("touchstart",function(){},!0)},WPViewportFix:function(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var e=a.createElement("style"),t=a.createTextNode("@-ms-viewport{width:auto!important}");e.appendChild(t),a.getElementsByTagName("head")[0].appendChild(e)}},mainHeight:function(){var e=$(".site-header").height(),a=$(".site-footer").height();$(".site-main").css("min-height",$(t).height()-e-a-100),$(".site-entrance").css("min-height",$(t).height()-e-a-20)},headerOpt:function(){var e=$(".overlay"),t=$(".option-trigger"),a=$(".site-header"),i=$(".header-option");t.click(function(t){$(this).toggleClass("active"),e.toggleClass("active"),i.toggleClass("active"),a.toggleClass("active"),$("body").toggleClass("no-scroll"),t.preventDefault()}),e.click(function(){$(this).removeClass("active"),t.removeClass("active"),i.removeClass("active"),a.removeClass("active"),$("body").removeClass("no-scroll")}),$(".main-slider").length&&($(".site-header").addClass("has-slider"),$(".site-main").addClass("has-slider"),$(".notif-area").addClass("has-slider"))},userDropdown:function(){var e=$("#js-header-actions__dropdown"),t=$(".header-actions__dropdown__items"),i="header-actions__dropdown__items--is-active";e.on("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().find(t).toggleClass(i)}),$(a).on("click",function(){t.removeClass(i)})},slider:function(){var e=$(".home-slider"),t=$(".home-project-slide"),a=$(".partner-slider"),i=$(".how-it-works"),o=$(".testi-slider");Modernizr.load({load:s._slick,complete:function(){e.slick({dots:!0}),$(".notif-area").length||e.addClass("no-notif"),t.on("afterChange",function(e,t,a,i){equalheight(dataEqual)}),t.slick({infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,arrows:!1}}]}),a.slick({infinite:!1,speed:300,slidesToShow:6,slidesToScroll:6,responsive:[{breakpoint:1024,settings:{slidesToShow:6,slidesToScroll:6,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,arrows:!1}}]}),i.slick({infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),o.slick({infinite:!1,speed:300,slidesToShow:3,slidesToScroll:3,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),o.on("afterChange",function(e,t,a,i){equalheight(dataEqual)})}})},slideTab:function(){{var e=$(".slide-tab-nav__item"),t=$(".slide-tab-content__item"),i="active-tab",s="current-tab",o=$(".slide-nav-trigger"),n=$(".slide-nav-trigger .btn-text"),l=o.next();$(".slide-tab-nav__item a")}$(".slide-tab-nav__item > a").on("click",function(a){a.preventDefault(),e.removeClass(s),t.removeClass(i),$(this).parent().addClass(s),$target=$(this).attr("href"),$($target).addClass(i);var o=$(this).attr("data-nav");n.text(o),equalheight("[data-equal]")}),$(a).click(function(){o.hasClass("is-active")&&(l.removeClass("is-open"),o.removeClass("is-active"))}),o.click(function(e){e.preventDefault(),e.stopPropagation();var t=$(this).next();t.hasClass("is-open")?($(this).removeClass("is-active"),t.removeClass("is-open")):($(this).addClass("is-active"),t.addClass("is-open"))})},selectNav:function(){{var e=$(".select-nav .nav-trigger"),t=$(".select-nav__item a");t.parent("li")}e.click(function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().hasClass("is-active")?($(this).parent().removeClass("is-active"),$("body").removeClass("no-scroll")):($(this).parent().addClass("is-active"),$("body").addClass("no-scroll"))}),t.click(function(e){var t=$(this).attr("data-nav");$(this).parent().siblings("li").removeClass("current"),$(this).closest("ul").prev(".nav-trigger").children(".btn-text").text(t),$(this).parent().addClass("current")}),$(a).click(function(){e.parent().hasClass("is-active")&&(e.parent().removeClass("is-active"),$("body").removeClass("no-scroll"))})},yesNo:function(){var e=$(".question-nav");$question_st=$(".list-question li:first-child"),$question_ls=$(".list-question li:last-child"),$btn_no=$(".btn-no"),$btn_yes=$(".btn-yes"),$(".list-question li:gt(0)").removeClass("show"),$question_st.addClass("show"),$btn_no.click(function(){{var t=".no-answer",a=$(".list-question li:first-child");$(".list-question li:last-child")}$(".last-question").hasClass("show")?($(".action-submit").addClass("active"),e.slideUp()):a.removeClass("show").next().addClass("show").end().appendTo(t)}),$btn_yes.click(function(){$(".action-submit").addClass("active"),e.slideUp()})},equalize:function(){var e="[data-equal]";equalheight(".equal-height"),t.onload=function(){equalheight(".equal-height")},$(t).resize(function(){equalheight(".equal-height")}),equalheight('[class^="equal-type"], [class*=" equal-type"]'),t.onload=function(){equalheight('[class^="equal-type"], [class*=" equal-type"]')},$(t).resize(function(){equalheight('[class^="equal-type"], [class*=" equal-type"]')}),equalheight(e),t.onload=function(){equalheight(e)},$(t).resize(function(){equalheight(e)}),$(a).ajaxComplete(function(){equalheight(e)}),Modernizr.load({complete:function(){equalheight(e)}})},cloneTitle:function(){var e=$(".project-header"),t=".project-header--top";e.clone().appendTo(t)},videoFluid:function(){var e=$(".iframe-video iframe"),a=e.parent();e.each(function(){$(this).data("aspectRatio",this.height/this.width).removeAttr("height").removeAttr("width")}),$(t).resize(function(){var t=a.width()+1;e.each(function(){var e=$(this);e.width(t).height(t*e.data("aspectRatio"))})}).resize()},coverProject:function(){var e=$(".project-cover"),a=$(".project-cover img"),i=e.width();e.css("min-height",9*i/16),$(t).resize(function(){e.css("min-height",9*i/16)}),$(t).on("orientationchange",function(){e.css("min-height",9*i/16)}),a.each(function(){var e=$(this).width()/$(this).height(),t=16/9;$(this).data("aspect-ratio",e),$(this).css(e>t?{width:"auto",height:"100%"}:t>e?{width:"100%",height:"auto"}:{width:"100%",height:"auto"})})},fillImg:function(){$(".fill-img").each(function(){var e=$(this).width()/$(this).height(),t=16/9;$(this).data("aspect-ratio",e),$(this).css(e>t?{width:"100%",height:"auto"}:t>e?{width:"auto",height:"100%"}:{width:"100%",height:"auto"})}),$(".fit-img").each(function(){var e=$(this).width()/$(this).height(),t=16/9;$(this).data("aspect-ratio",e),$(this).css(e>t?{width:"auto",height:"105%"}:t>e?{width:"105%",height:"auto"}:{width:"105%",height:"auto"})})},readStory:function(){var e=$(".btn-read-more"),t=$(".btn-story-close"),a=$(".project-detail");e.click(function(e){t.addClass("is-active"),a.addClass("is-active"),$("body").addClass("no-scroll"),e.preventDefault()}),t.click(function(e){$(this).removeClass("is-active"),a.removeClass("is-active"),$("body").removeClass("no-scroll")})},stepNav:function(){$(".contribute-step-nav .current").prevAll().addClass("passed");var e=$(".step-nav-trigger"),t=$(".step-nav-trigger .btn-text"),i=$(".step-nav");$stepNavLink=$(".step-nav__item a"),e.click(function(e){e.preventDefault(),e.stopPropagation(),$(this).hasClass("is-open")?($(this).removeClass("is-open"),i.removeClass("is-open")):($(this).addClass("is-open"),i.addClass("is-open"))}),$(a).click(function(){e.hasClass("is-open")&&(e.removeClass("is-open"),i.removeClass("is-open"))}),$stepNavLink.click(function(){var e=$(this).parent().attr("data-val");$stepNavLink.parent().removeClass("current"),$(this).parent().hasClass("current")?(t.text(""),$stepNavLink.parent().removeClass("current")):(t.text(e),$(this).parent().addClass("current"))}),$(".step-nav__item").each(function(){if($(this).hasClass("current")){var e=$(this).attr("data-val");t.text(e)}})},tabNav:function(){var e=$(".tab__item"),t=$(".tab__panel"),a="is-active";e.first().addClass(a),t.first().addClass(a),$(".tab__item > a").on("click",function(i){i.preventDefault(),e.removeClass(a),t.removeClass(a),$(this).parent().addClass(a),$target=$(this).attr("href"),$($target).addClass(a),equalheight("[data-equal]")})},tabNavWrapper:function(){var e=$(".tab-nav-wrapper"),a=e.height(),i=$(".tab-detail"),s=$(t),o="is-active";if(e.length){var n=e.offset().top;s.scroll(function(){s.scrollTop()>n?(e.addClass("fixed"),i.addClass(o).css("padding-top",a)):(e.removeClass("fixed"),i.removeClass(o).css("padding-top","0"))})}},btnContribute:function(){var e=$(t),a=$(".contribution"),i=(a.offset.bottom,$(".btn-contribute"));e.scroll(function(){e.scrollTop()>100?i.addClass("is-visible"):i.removeClass("is-visible")})},addContribution:function(){var e=$(".btn-contribute"),a=$(".contribute-box"),i=$(".overlay"),s=$(".overlay, .btn-cancel"),o=$(".project-action"),n=$("body"),l=$(t);e.on("click",function(e){a.addClass("active"),i.addClass("active"),n.addClass("active"),e.preventDefault()}),s.on("click",function(e){a.removeClass("active"),n.removeClass("active"),i.removeClass("active"),$(this).closest("form").find("input").val(""),e.preventDefault()}),l.scroll(function(){l.scrollTop()>60?o.addClass("visible"):o.removeClass("visible")})},readToggle:function(){var e=$(".project-desc"),t=$(".btn-more"),a=$(".btn-less");t.on("click",function(t){$(this).hide(),a.show(),e.addClass("active"),t.preventDefault()}),a.on("click",function(a){$(this).hide(),t.show(),e.removeClass("active"),a.preventDefault()})},contributorEntry:function(){var e=$(".btn-counter"),t=$(".contributor-entry");e.on("click",function(e){$(this).toggleClass("active"),t.slideToggle()})},autoThousand:function(){function e(){var e=a.autoNumeric("get");return e}var t=$(".auto-num"),a=$(".auto-num-input"),i=a.data("min");t.length&&(a.autoNumeric({aSep:".",aDec:","}),a.on("keyup paste",function(){var t=e();a.data("value",t),(i>t||0>t)&&a.parsley("validate")}),t.on("submit",function(){a.val(a.autoNumeric("get"))}))},chooseReward:function(){{var e=$(".input-target"),a=$(".input-target--grand span"),i=($(".input-trigger input"),$('.reward-list__item input[disabled="disabled"]')),s=$(".reward-list__item input"),o=$(".reward-list__item"),n=$(".form-action-wrapper"),l=$(".bottom-line"),r=$(".reward-amount"),c=$(t);s.attr("data-input")}e.length&&a.length&&(r.each(function(){$(this).autoNumeric({aSep:".",aDec:","})}),i.parent().addClass("is-disabled"),s.hasClass("less")?$(this).parent().addClass("is-disabled"):$(this).parent().removeClass("is-disabled"),e.bind("keyup paste",function(){{var e=l.offset().top-c.height()+40,i=($(t).innerHeight(),$(this).val()),i=i.replace(/\./g,""),o=parseInt(i);Math.floor($(".reward-list__item input").val())}a.text($(this).val()).autoNumeric("init",{aSep:".",aDec:","}),n.addClass("floated"),$(".your-value").attr("value",o),s.each(function(){Math.floor($(this).attr("data-input"))>o?($(this).addClass("less"),$(this).attr("disabled","disabled"),$(this).parent().addClass("is-disabled")):($(this).removeClass("less"),$(this).removeAttr("disabled","disabled"),$(this).parent().removeClass("is-disabled"))}),c.scroll(function(){c.scrollTop()>e?n.removeClass("floated"):n.addClass("floated")})}),e.change(function(){var e=$(this).val();a.text(e).autoNumeric("init",{aSep:".",aDec:","})}),s.change(function(){o.removeClass("selected"),$(this).is(":checked")?$(this).parent().addClass("selected"):$(this).parent().removeClass("selected")}))},validateLanding:function(){Modernizr.load({load:s._validate,complete:function(){var e=$("#setupProject");e.length&&e.validate({rules:{name:{required:!0,maxlength:100},email:{required:!0,email:!0,maxlength:255},title:{required:!0,minlength:4,maxlength:100},description:{required:!0,minlength:10},subdomain:{required:!0,minlength:4,maxlength:10}},messages:{name:"Masukkan nama anda",email:"Masukkan alamat email anda",title:"Masukkan Judul Proyek",description:"Isikan deskripsi proyek (minimum 10 huruf)",subdomain:"Pilih subdomain yang diinginkan (4 s/d 10 huruf)"}})}})},validateProject:function(){Modernizr.load({load:s._validate,complete:function(){var e=$("#donateProject"),t=$(".overlay, .btn-cancel");if(e.length){var a=e.validate({rules:{name:"required",email:{required:!0,email:!0},donasi:{required:!0,number:!0},agree:"required"},messages:{name:"Please enter your firstname",email:"Please enter a valid email address",agree:"Please accept our policy"}});t.on("click",function(e){a.resetForm()})}}})},validateConfirm:function(){Modernizr.load({load:s._validate,complete:function(){var e=$("#confirmation");e.length&&e.validate({rules:{dates:{required:!0,date:!0},bank:"required",email:{required:!0,email:!0},donation:{required:!0,minlength:5,number:!0},agree:"required"},messages:{name:"Please enter your firstname",email:"Please enter a valid email address",agree:"Please accept our policy"}})}})},scrollToElement:function(){var e=a.querySelectorAll("[data-scrollto]");if(e.length)for(var t=function(e){e.preventDefault();var t=this.getAttribute("data-scrollto"),i=a.querySelector(t),s=$(i),o=s.offset().top;$("html, body").animate({scrollTop:o},1e3)},i=e.length-1;i>=0;i--)e[i].addEventListener("click",t,"false")},notif:function(){var e=($(".notif"),$(".notif-close")),a=$(".notif-area"),i=(a.height()-40,$(".site-main"),$(t));if(e.on("click",function(e){$(this).closest(".notif-area").slideUp(function(){$(this).remove()}),$(this).fadeOut(500),e.preventDefault()}),a.length){var s=a.offset().top;i.scroll(function(){a.length&&(i.scrollTop()>s?a.addClass("fixed"):a.removeClass("fixed"))})}},radioNav:function(){var e=$('.radio-nav__item input[type="radio"]');e.each(function(){$(this).is(":checked")&&$(this).parent().addClass("selected")}),e.change(function(){$(this).is(":checked")&&(e.parent().removeClass("selected"),$(this).parent().addClass("selected"))})},datePicker:function(){var e=$(".date-picker");e.length&&Modernizr.load({load:s._datepicker,complete:function(){e.datepicker({autoclose:!0,todayBtn:!0,todayHighlight:!0})}})},listInterest:function(){var e=$(".input-interest");e.change(function(){$(this).is(":checked")?$(this).parent().addClass("checked"):$(this).parent().removeClass("checked")})},autoComplete:function(){$("#autocity").length&&Modernizr.load({load:s._autocomplete,complete:function(){var e=$.map(countries,function(e,t){return{value:e,data:t}});$("#autocity").autocomplete({lookup:e,autoFocus:!0})}})},customRadio:function(){var e=$(".cust-radio");e.each(function(){$(this).is(":checked")?$(this).parent().addClass("radio-check"):$(this).parent().removeClass("radio-check")}),e.change(function(){$(this).is(":checked")?(e.parent().removeClass("radio-check"),$(this).parent().addClass("radio-check")):$(this).parent().removeClass("radio-check")})},chosen:function(){var e=$(".chosen-select");e.length&&Modernizr.load({load:s._chosen,complete:function(){e.chosen()}})},sitePaging:function(){{var t=$(".paging-btn");$(".paging-number")}t.each(function(){$(this).click(function(){e.preventDefault(),e.stopPropagation(),$(this).hasClass("clicked")?($(this).parent().removeClass("active"),$(this).removeClass("clicked"),$(this).next().removeClass("is-open")):($(this).parent().addClass("active"),$(this).addClass("clicked"),$(this).next().addClass("is-open"))})})},floatLabel:function(){var e=$(".float-label input");e.each(function(){var e=$(this).prev("label").width(),t=$(this).parent().width(),a=t-e-10;$(this).css("width",a)})},zoneWhite:function(){$(".zone-white")},togglePost:function(){var e=$(".btn-detail-post");e.click(function(e){e.preventDefault(),$(this).hasClass("is-active")?$(this).removeClass("is-active").next().removeClass("is-active"):$(this).addClass("is-active").next().addClass("is-active")})},textEditor:function(){var e=$(".redactor");e.length&&Modernizr.load({load:s._redactor,complete:function(){var t=e.data("upload");console.log(t),e.redactor({focus:!0,imageUpload:t,plugins:["video"]})}})},removeReward:function(){$("body").on("click",".btn-remove-field",function(e){e.preventDefault();var t=$(".remove-msg").data("msg");confirm(t)&&$(this).closest(".rewards-list__item").slideUp(function(){$(this).remove()})})}},n=function(){o.init()},l=function(){Modernizr.load([{test:t.jQuery,nope:s._jquery_local,complete:n}])};Modernizr.load([{load:s._jquery_local},{load:s._equalize},{load:s._autoNum,complete:l}]),t.Site=o}(window,document);