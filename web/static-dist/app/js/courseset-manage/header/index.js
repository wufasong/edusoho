webpackJsonp(["app/js/courseset-manage/header/index"],{"227988cf7d09fe542431":function(e,s,a){"use strict";var t=a("48bb97626aecb1ede6bc"),i={title:"course_set.manage.publish_title",hint:"course_set.manage.publish_hint",success:"course_set.manage.publish_success_hint",fail:"course_set.manage.publish_fail_hint"},n=$(".js-origin-header"),c=$(".js-origin-header-content"),r=$(".js-new-header");$(".js-shrink-item").on("click",".js-shrink-courseset",function(e){$(e.currentTarget).addClass("hidden"),n.animate({height:"40px"},function(){c.animate({opacity:"0"},"fast"),r.removeClass("hidden").animate({opacity:"1"},"fast")})}),r.on("click",".js-show-courseset",function(e){$(e.currentTarget);n.animate({height:"122px"},function(){c.animate({opacity:"1"},"fast"),r.animate({opacity:"0"},"fast").addClass("hidden"),$(".js-shrink-courseset").removeClass("hidden")})}),(0,t.publish)(".js-courseset-publish-btn",i)}},["227988cf7d09fe542431"]);