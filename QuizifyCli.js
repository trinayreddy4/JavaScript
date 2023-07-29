const s=require("readline-sync");
const kuler=require("kuler");
let res=0;
//DataBase for the Question

const database={
    data:[
        {
            Question:`let a={} , b={}
    console.log(a==b)
    console.log(a===b)`,
            options:{
                a:`false false`,
                b:`false true`,
                c: `true false`,
                d: `true true`
            },
            correctAnswer:`a`
        },
        {
            Question:`Object.assign(target,source) creates which type of copy?`,
            options:{
                a:`Deep Copy`,
                b:`Shallow Copy`,
                c:`Nested Copy`,
                d:`Creates a New Reference`
            },
            correctAnswer:`b`
        },
        {
            Question:`Is method Chaining possible forEach?`,
            options:{
                a:`yes`,
                b:`no`
            },
            correctAnswer:`b`
        }

    ]
}

const scoreBoard={
    data:[
        {
            name:`Trinay`,
            score:3
        },
        {
            name:`Madhu`,
            score:2
        },     
        {
            name:`Reddy`,
            score:1
        }
    ]
}
let userName;
function playGame()
{
    userName=s.question("What is Your Name?\n");
    console.log(kuler(`Welcome to the Game ${userName}.........!!`,`#fbbf24`));
    showQuestionsAndAnswers();
}

function highScorer(scoreBoard)
{
    scoreBoard.data.push({name:userName,score:res});
    let sortedScoreCard=scoreBoard.data.sort((a,b)=>b.score-a.score);
    let t=1;
    console.log("\n");
    for(let key of sortedScoreCard)
    {
        console.log(`Rank-${t} Name-${key.name} Score-${key.score}`);
        t++;
    }
}

const showQuestionsAndAnswers=()=>{

    for(let i=0;i<database.data.length;i++)
    {
        console.log(`\nQ${i+1} - ${database.data[i].Question}\n`);
        for(let j in database.data[i].options)
        {
            console.log(`\t${j}: ${database.data[i].options[j]}`);
        }
        let userAnswer=s.question(`\n\tEnter Your Answer -(a/b/c/d) -`).toLowerCase();
        let correctOption=database.data[i].correctAnswer;
        if(userAnswer=='a'||userAnswer=='b'||userAnswer=='c'||userAnswer=='d')
        {
            if(userAnswer==correctOption)
            {
                res++;
                console.log(kuler(`\tCorrect Answer Kudos....`,`#84cc16`));
            }
            else
            {
                console.log(kuler(`\tInvalid answer\n`,`#b91c1c`),kuler(`\t Correct Option:${correctOption}`,`#fafaf9`));
            }
        }
        else
        {
            console.log(kuler("\tSelected Invalid Option.........",`#dc2626`));
        }
    }

    console.log(`\n\nResult: ${res} Correct Answers`);
    highScorer(scoreBoard);    
}
playGame();
