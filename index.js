const JSONObj = [
    {
        correctAnswer: 'Three',
        options: ['Two', 'Three', 'Four', 'Five'],
        question:"How many pieces of bun are in Mcdonald's Big Mac ?",
    },
    {
        correctAnswer: 'Giraffe',
        options:['Elephant','Giraffe','lion','Blue Whale'],
        question:'What is the tallest land animal in the world?',
    },
    {
        correctAnswer: 'Pacific Ocean',
        options:['Pacific Ocean','Atlantic Ocean','Indian Ocean','Arctic Ocean'],
        question:' In 1768, Captain James Cook set out to explore which ocean?',
    },
    {
        correctAnswer: 'FBI',
        options:['FIFA','NATO','ASEAN','FBI'],
        question:'Which of the following is not an international organisation?',
    },
    {
        correctAnswer: '1,200 km/h',
        options:['120 km/h','1,200 km/h','400 km/h','700 km/h'],
        question:'What is the speed of sound?',
    }
]
let score=0;
let currentQuestion =0;
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
function showQuestion(){
    //destructuring the object
    const {correctAnswer, options, question} = JSONObj[currentQuestion];
    //setting question text content
    questionEl.textContent = question;
    //calling of shuffled options
    let shuffled = shuffleOptions(options);
    shuffled.forEach((opt)=>{
        const btn = document.createElement("button");
        btn.textContent = opt;
        optionEl.appendChild(btn);
        btn.addEventListener('click', ()=>{
            if(opt === correctAnswer){
                score++;
            }
            else{
                score-=0.25;
            }
            scoreEl.textContent = `Score: ${score}/${JSONObj.length}`;
            optionEl.textContent = ''
            nextQuestion();
        });
    });
}
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click',()=>{
    optionEl.textContent = '';
    scoreEl.textContent = `Score: ${score}/${JSONObj.length}`;
    nextQuestion();
});

function nextQuestion(){
    currentQuestion++;
    if(currentQuestion>=JSONObj.length){
        questionEl.textContent = 'Quiz Completed!!';
        optionEl.textContent = '';
    }
    else{
        showQuestion();
    }
}
showQuestion();
function shuffleOptions(options){
    for(let i = options.length-1;i>=0;i--){
        let j = Math.floor(Math.random()*options.length);
        [options[i],options[j]] = [options[j], options[i]];
    }
    return options;
}
