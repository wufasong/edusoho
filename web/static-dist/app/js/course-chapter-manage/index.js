webpackJsonp(["app/js/course-chapter-manage/index"],{0:function(e,t){e.exports=jQuery},"13b789154dc03b9f8710":function(e,t,a){"use strict";var c=a("b334fd7e4c5a19234db2"),i=(function(e){e&&e.__esModule}(c),$("#sortable-list"));$("#chapter-title-field").on("keypress",function(e){13===(e.keyCode||e.which)&&e.preventDefault()}),$("#course-chapter-btn").on("click",function(){var e=$(this),t=$("#course-chapter-form"),a=t.data("chapterId");t.validate({ajax:!0,currentDom:e,submitSuccess:function(e){var c=t.find("#chapter-title-field").val(),n=c?"：":"";$(".modal").modal("hide"),$(".js-task-empty").addClass("hidden"),a>0?($("#chapter-"+a).find(".title").text(c),$("#chapter-"+a).find(".colon").text(n)):i.trigger("addItem",e)}})})}},["13b789154dc03b9f8710"]);