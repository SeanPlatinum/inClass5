// ADD NEW ITEM TO END OF LIST
var newItem = document.createElement('li'); //to add an item we gotta ad a new list item to the list,
var newTextForItem = document.createTextNode('cream'); //getting better with camel case...

newItem.appendChild(newTextForItem); //give the item the text 
document.querySelector('ul').appendChild(newItem);

// ADD NEW ITEM TO START OF LIST
var newStart = document.createElement('li');
var newText = document.createTextNode('kale');

newStart.appendChild(newText);
var list = document.querySelector('ul');
list.insertBefore(newStart, list.firstChild); //goated built in function "insert before" literally makes this possible

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li'); //select all the items 
for (var i = 0; i < listItems.length; i++) 
{
  listItems[i].className = 'cool'; //the cool class makes them all green and pretty
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var total = listItems.length;
var newSpan = document.createElement('span');
newSpan.textContent = total;
heading.appendChild(newSpan);

/*
First attempt, doesnt work because needs to be span to get the css properly
var heading = document.querySelector('h2');
heading.className
var total = listItems.length; //should be 6 now that we've added a few thangs
var newHead = "BUY GROCERIES" + ' (' + total + ' items)';
heading.innerHTML = newHead; */
