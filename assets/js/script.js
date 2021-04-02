let hourly = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

// a for loop to create the rows
for (let i = 0; i < hourly.length; i++) {
    let rows = $("<div>").addClass("row");
    let timeCol = $("<div>").text(hourly[i]).addClass("hour col-2").attr("id", "hour"+[i]);

    var timeClass = backgroundColor(hourly[i])
    let inputArea = $("<textarea>").attr({placeholder: "Enter task here", id: "input"+[i]}).addClass("form-control textarea toDo-input time-block col-8 " + timeClass );

    if (localStorage.getItem(hourly[i])) {
        inputArea.text(localStorage.getItem(hourly[i]))
    }
    let saveBtn = $("<button>").attr("id", "save"+[i]).addClass("btn btn-primary saveBtn col-2").html('<i class="fas fa-save"></i>');
    $(rows).append(timeCol).append(inputArea).append(saveBtn);
    $("#schedule").append(rows)
}

$(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".form-control").val().trim();
    hourSpan = $(this).siblings(".hour").text().trim();
    localStorage.setItem(hourSpan, userInput);
  })

  $("#resetBtn").on("click", function(){
    localStorage.clear();
    location.reload();
  })