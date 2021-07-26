console.log('Here are all the available people:', people);

$(document).ready(onReady);

let randomNum = randomNumber(0, people.length - 1);
console.log(randomNum);

function onReady(){
    renderPeople();
    $(document).on('click', '.person', personClicked);
}

/**
 * Render People
 * Renders people objects to dom
 */
function renderPeople() {
    // DO SOMETHING
    let index = 0;
    for (person of people) {
        console.log(person);
        $('#people').append(
            `<div data-person="${person.name}" class="person">
                <img data-index="${index}" src='${person.img}'></img>
            </div>`
        );
        index++
    }
}

/**
 * Person Clicked
 * 
 */
function personClicked() {
    // console.log(randomNum);
    // console.log(Number($(this).data('index')));
    // console.log($(this).children().data('index'));
    // console.log($(this).data('person'));
    if(randomNum === Number($(this).children().data('index'))) {
        alert("Yeah! That's right");
        // Reload the page
        location.reload();
    } else {
        alert('Nope... try again');
    }
}

/**
 * Rand Number
 * returns a random number
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}