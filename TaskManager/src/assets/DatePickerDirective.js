$( function() {
  var dateFormat = "mm/dd/yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 2
      })
      .on("change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 2
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    })
    ;

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }

    return date;
  }
} );

$( function() {
  var tooltip = $('<div id="tooltip" />').css({
   position: 'absolute',
   top: -25,
   left: -3
}).hide();
  
$( "#slider-horizontal" ).slider({
     orientation: "horizontal",
     range: "min",
     min: 1,
     max: 6,
     value: 1,
     slide: function( event, ui ) {
       $( "#vPriority" ).val( ui.value );
          tooltip.text(ui.value);
     },
      change: function(event, ui) {}
   }).find(".ui-slider-handle").append(tooltip).hover(function() {
   tooltip.show()
}, function() {
   tooltip.hide()
});
   $( "#vPriority" ).val( $( "#slider-horizontal" ).slider( "value" ) );
 } );

$( function() {
 $('#vPriority').change( function() {  
    var vl=$('#vPriority').val();
   $("#slider-horizontal").slider('value',vl);
})  
 } );



// $("#TextBox1").datepicker({
//   minDate: 0,
//   maxDate: '+1Y+6M',
//   onSelect: function (dateStr) {
//       var min = $(this).datepicker('getDate'); // Get selected date
//       $("#TextBox2").datepicker('option', 'minDate', min || '0'); // Set other min, default to today
//   }
// });

// $("#TextBox2").datepicker({
//   minDate: '0',
//   maxDate: '+1Y+6M',
//   onSelect: function (dateStr) {
//       var max = $(this).datepicker('getDate'); // Get selected date
//       $('#datepicker').datepicker('option', 'maxDate', max || '+1Y+6M'); // Set other max, default to +18 months
//   }
// });