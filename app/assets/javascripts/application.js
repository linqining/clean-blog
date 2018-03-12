// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require tether
//= require js/bootstrap
//= require dataTables/jquery.dataTables
//= require dataTables/bootstrap/3/jquery.dataTables.bootstrap
//= require dataTables/jquery.dataTables
//= require dataTables/extras/dataTables.responsive
//= require bootstrap-wysihtml5
//= require clean-blog.min
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
  $('.datatable').DataTable({
    responsive: true
    // ajax: ...,
    // autoWidth: false,
    // pagingType: 'full_numbers',
    // processing: true,
    // serverSide: true,

    // Optional, if you want full pagination controls.
    // Check dataTables documentation to learn more about available options.
    // http://datatables.net/reference/option/pagingType
  });
  $('.wysihtml5').each(function(i, elem) {
    $(elem).wysihtml5();
  });
});
