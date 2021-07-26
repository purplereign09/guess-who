console.log('Here are all the available people:', people);

$(document).ready(onReady);

let randomNum = 0;

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

function personClicked() {
    let randomNum = randomNum(1, people.length);
    if(randomNum === $(this).data('index')) {
        console.log('MATCH');
    }
    console.log( 'our random num' );
    console.log('clicked ', this);
}
/**
 * Rand Number
 * returns a random number
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}