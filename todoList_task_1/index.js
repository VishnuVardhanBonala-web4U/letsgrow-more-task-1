let id = 0;
function add()
{
  var activitiesDiv = document.getElementById( "activities" );
  var task = document.getElementById( "addTask" );
  var taskContent = task.value;
  if ( task.value != "" )
  {

    var closebtn = document.createElement( "button" );
    closebtn.className = "close-btn";
    closebtn.setAttribute( "id", "closeBtn_" + id );
    closebtn.textContent = "Remove";
    closebtn.addEventListener( "click", closeTask );
    var content = document.createElement( "div" );
    content.className = "task-content";
    content.textContent = taskContent;
    var activityDiv = document.createElement( "div" );
    activityDiv.className = "todo";
    activityDiv.appendChild( content );
    activityDiv.appendChild( closebtn );
    activitiesDiv.appendChild( activityDiv );
    task.value = "";
    id = id + 1;
  }
  else
  {
    alert( "Please Enter Task" )
  }
}
function closeTask( event )
{
  var button = event.target;
  var parentDiv = button.parentNode;
  parentDiv.remove();
}
function handleKeyPress( event )
{
  // Check if the pressed key is the "Enter" key (keyCode 13)
  if ( event.keyCode === 13 )
  {
    add(); // Call the add function when "Enter" is pressed
  }
}

document.getElementById( "addTask" ).addEventListener( "keydown", handleKeyPress );
