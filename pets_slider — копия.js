var pets = document.getElementsByClassName('pets_nav_item');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var items = document.getElementsByClassName('slider_item');
for (var i = 0; i < pets.length; i++) {
    pets[i].style.cursor = 'default';
    pets[i].addEventListener('click', change);
}

function change() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    }
    else {
        for (var i = 0; i < pets.length; i++) {
            pets[i].classList.remove('active');
        }
        this.classList.add('active');
        if (this === pets[0]) {
            for (var j = 0; j < items.length; j++) {
                items[j].classList.remove('active2', 'active3');
            }
            item1.classList.add('active1');
            item2.classList.add('active1');
            item3.classList.add('active1');
        }
        else if (this === pets[1]) {
            for (var j = 0; j < items.length; j++) {
                items[j].classList.remove('active1', 'active3');
            }
            item1.classList.add('active2');
            item2.classList.add('active2');
            item3.classList.add('active2');
        }
        else {
            for (var j = 0; j < items.length; j++) {
                items[j].classList.remove('active2', 'active1');
            }
            item1.classList.add('active3');
            item2.classList.add('active3');
            item3.classList.add('active3');
        }
    }
}
