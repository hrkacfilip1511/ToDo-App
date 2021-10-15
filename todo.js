var btn = document.getElementById('add');
var input = document.getElementById('todo');
var mainList = document.querySelector('ul');
var allItems = document.querySelectorAll('li')



for(var x = 0; x < allItems.length; x++){
   allItems[x].addEventListener('click', myList); 
}

function myList() {
    var temp = this.classList.toggle('toggle');
    if(temp){
        var span = document.createElement('span');
        span.textContent = ' X ';
        span.addEventListener('click', () => {
            span.parentElement.remove();
        })
        this.appendChild(span);
    }
    else{
        this.getElementsByTagName('span')[0].remove();
    }
}

btn.addEventListener('click', makeNew);

function makeNew() {
    var li = document.createElement('li');
    li.addEventListener('click', myList);
    var textVal = input.value;
    var tempNode = document.createTextNode(textVal);
    li.appendChild(tempNode);
    mainList.appendChild(li);
    input.value = "";
}