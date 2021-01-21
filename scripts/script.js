const left = document.querySelector('.btn-left');
const right = document.querySelector('.btn-right');

const img = document.querySelector('.image_person');
const quote = document.querySelector('.quote_text');
const persons_name = document.querySelector('.name');
const persons_job = document.querySelector('.job');


const John = {
    quote: "If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."
    , name: "John Tarkpor",
    job: "Junior Front-end Developer"
}

const Tanya = {
    quote: "I’ve been interested in coding for a while but never taken the jump, until nowI couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."
    , name: "Tanya Sinclair",
    job: "UX Engineer"
}


right.addEventListener('click', loadNext);
left.addEventListener('click', loadNext);

let john = true;
function loadNext() {

    if (john == true) {
        // Load Tanya.
        img.src = "images/image-tanya.jpg"
        quote.innerText = Tanya.quote;
        persons_name.innerHTML = Tanya.name;
        persons_job.innerHTML = Tanya.job
        john = false;
    } else {
        // Load john  
        img.src = "images/image-john.jpg"
        quote.innerText = John.quote;
        persons_name.innerHTML = John.name;
        persons_job.innerHTML = John.job
        john = true;
    }
}