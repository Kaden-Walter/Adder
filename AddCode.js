var sum = 0;
var count = 0;

function clearIt()
{
  document.getElementById("output").innerhtml = " ";
}
function add(x)
{
  sum = sum + x;
  count = count + 1;
  printRes();
}
function printRes()
{
  document.getElementById("output").innerHTML = "Sum: " + sum + "<br>" + "Count: " + count;
}
