var ReadlineSync=require("readline-sync")
var Username=ReadlineSync.question("what's ur name?  ");
var score=0;
console.log("welcome " +Username+ "  To Friends_Quiz")
function Quiz(question,answer)
{
  useranswer=ReadlineSync.question(question);
  if(useranswer.toUpperCase()==answer.toUpperCase())
  {
    console.log("You're Right")
    score+=1;
  }
  else
  {
    console.log("You're wrong")
  }
  
}
questions=[
 {
   question:"What was rachel's middle name?\na.Karen\nb.garen\n",
   answer:"a"
              
   },
   {
   question:"What was phoebe's sister name?\na.ursula\nb.mersula\n",
   answer:"a"
              
   },
   {
   question:"What was ross profession?\na.palientologist\nb.surgeon\n",
   answer:"a"
              
   },
   {
   question:"What was monica's proffession?\na.sales-executive\nb.chef\n",
   answer:"b"
              
   },
   {
   question:"What was chandlers father name?\na.gabriel\nb.muriel\n",
   answer:"b"
              
   },
   {
   question:"What was name of joey's show where he was doctor?\na.days of our lives\nb.mac n cheese\n",
   answer:"a"
              
   },
   {
   question:"What was name of rachel's daughter?\na.eva\nb.emma\n",
   answer:"b"
    },
    {
   question:"What was name of joey's manager?\na.estelle\nb.erica\n",
   answer:"a"
    },
    {
   question:"What was name of show which joey-chandler loves the most?\na.Baywatch\nb.Startrek\n",
   answer:"a"
    },
    {
   question:"What was phoebe's scientist Boyfriend name was?\na.mike\nb.David\n",
   answer:"b"
    }
    ]
for(var i=0;i<questions.length;i++)
{
  current_question=questions[i];
  Quiz(current_question.question,current_question.answer)
}
console.log("yay "+Username+" your score is",+score)
