let input = document.getElementsByTagName('input')[0];
var ul = document.getElementsByTagName('ul')[0];


document.getElementsByTagName('button')[0]
.addEventListener('click', function() {
    if(input.value.length > 0) {
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.innerHTML = 'Delete';
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(button);
        ul.appendChild(li);
        input.value = '';
        button.addEventListener('click', deleteList);
        function deleteList() {
        this.parentElement.remove();
    }   
    }
})



input.addEventListener('keypress', event => {
    if(event.keyCode === 13 &&
       input.value.length > 0 ) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }
});




var list = document.getElementsByTagName('li');
for(var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', doneAction)
};
function doneAction() {
    this.classList.toggle('done');
}