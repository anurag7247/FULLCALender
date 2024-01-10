var resouces= []

// var events= [
//   {
//     title: 'Anish',
//     start: '2023-12-29T10:00:00',
//     end: '2023-12-29T14:30:00',
//     description: 'Lecture',
//     resourceId:'b'
//   },
//   {
//     title: 'Anish',
//     start: '2023-12-29T10:00:00',
//     end: '2023-12-29T14:30:00',
//     description: 'Lecture',
//     resourceId:'a',

//   }
  
// ]
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        start: 'dayGridMonth,timeGridWeek,timeGridDay',
        center: 'title',
        end: 'prevYear,prev,next,nextYear'
      },
      resources:resouces,
      allDaySlot:false,
    //   events:events,
      editable:true,
      eventOverlap:true,
      eventBackgroundColor:'grey',
      eventTextColor:'white',
      eventBorderColor:'black',
     
    });
  
    calendar.render();
    $("#submit").click((a) => {
        alert();
        var drId = $("#drId").val();
        var drName = $("#drName").val();
      
        var drobj = {
          id: drId,
          title: drName,
        };
      
        calendar.addResource(drobj); 
        
      });
