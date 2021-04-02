# 📝 Workday Scheduler

This is a simple workday scheduler to be used on a local device to save notes/tasks for every work hour of the day.

Link: [Workday Scheduler](https://corgimaman.github.io/workday-scheduler/)

## How to Use:
![Workday Scheduler Animation](./assets/images/demo.gif)

All you need to do is select the time block you want to make a note on and push the save button to keep your note! If you refresh the page, your note will stay. If you need to clear the schedule, just press the reset schedule button.

The gray time blocks are in the past, the red time block is the current time, and the green time block is future.

### What did I learn:
In doing this project, I learned how to incorporate different third party APIs to build a functioning website program. I used Bootstrap, jQuery, and Moment.js to enhance the website on top of HTML, CSS, and JavaScript. I used JavaScript to loop through each hour that I wanted to make a task box for to create the element on the page. I used a for loop to save and pull the data from local storage. I created a function to compare the current hour vs the hour on the time block to apply a color to determine if the time block is in the past, present, or future to help keep track of tasks. This one was really challenging because I wanted to use JavaScript to do all the work for me and keep my code DRY, but it was so satisfying when I got it completed!