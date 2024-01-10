var resouces= []
var events= []
var drArray=[]
var calendarEl = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'resourceTimeGridDay',
    resources:resouces,
    allDaySlot:false,
    events:events,
    editable:true,
    eventOverlap:true,
    slotMinTime:"10:00:00",
    slotMaxTime:"23:00:00",
    eventBackgroundColor:'grey',
    eventTextColor:'white',
    eventBorderColor:'black',
    displayEventTime:true,

    
  });
  
  calendar.render();
$("#submit").click((a) => {
  alert();
  var drId = $("#drId").val();
  var drName = $("#drName").val();

  drArray.push(drId);

  var drobj = {
    id: drId,
    title: drName,
  };

  calendar.addResource(drobj); 
  $("#drId").val("");
  $("#drName").val("");
  var drpush="";
  drArray.forEach((e) => {
    
    drpush+=`<option>${e}</option> `

  });
 
  $("#dmenu").html(drpush);
  
});



$("#pSubmit").click((a)=>{
  var pName=$('#pName').val();
  var STime=$('#STime').val();
  var ETime=$('#ETime').val();
  var Eprob=$('#Eprob').val();
  var Edoc=$('#Edoc').val();

  var pObj = {
    title: pName,
    start: STime,
    end: ETime,
    description: Eprob,
    resourceId: Edoc,

  }
  calendar.addEvent(pObj);
   $('#pName, #STime, #ETime, #Eprob, #Edoc').val("");
})

