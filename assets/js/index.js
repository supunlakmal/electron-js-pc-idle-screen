 const electron = require('electron');
 const {
   app,
   BrowserWindow,
   ipcMain,
   remote
 } = electron;
 const $ = window.jQuery = require('jquery');

 function minimize() {
   remote.getCurrentWindow().setFullScreen(false);
   $(".hide_on_run").show();
   $("#run_animation_box").html('');
   //  remote.getCurrentWindow().minimize();
   $("body").removeClass("run_animation_body");
 }

 function fullScreen() {
   remote.getCurrentWindow().setFullScreen(true);
 }
 $(document).ready(function (r) {
   $(".run_animation").click(function () {
     let animation_id = $(this).attr("data-animation");
     $(".hide_on_run").hide();
     $("#run_animation_box").show();
     $("#run_animation_box").load('../animation/rain_animation/index.html');
     fullScreen();
   });
   $('body').on('click', '#run_animation_box', function (e) {
     minimize();
   });
 });