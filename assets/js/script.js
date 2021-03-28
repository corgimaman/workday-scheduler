let hourly = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

// a for loop to create the rows
for (let i = 0; i < hourly.length; i++) {
    let rows = $("<div>").addClass("row");
    let timeCol = $("<text-area>").text(hourly[i]).addClass("hour col-1");
    let nestRow = $("<div>").addClass("row");
    let inputArea = $("<input>").attr("placeholder", "Enter task here").addClass("form-control textarea toDo-input time-block col");
    let saveBtn = $("<button>").addClass("btn btn-primary saveBtn col-1").html('<i class="fas fa-save"></i>');
    $(rows).append(timeCol).append(nestRow).append(inputArea).append(saveBtn);
    $("#schedule").append(rows)
}