const correct = ['A', 'A', 'B', 'C'];

const form = document.querySelector('.quiz-form');
const reveal = document.querySelector('.user-score');
let score = 0;

form.addEventListener('submit', e => {
    e.preventDefault();
    let userScore = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userScore.forEach((answers, index) => {
        if (answers === correct[index]) {
            score += 25;
        };
        
    });
    scrollTo(0,0);
    console.log(score);
    reveal.classList.remove('d-none');
    let output = 0 ;
    const timer = setInterval(()=>{
        reveal.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output ++;
        };
    },10);

});





