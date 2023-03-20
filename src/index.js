import inquirer from 'inquirer';

inquirer
  .prompt([
    {
        type:"input",
        name:"players",
        message:"Enter number of players",
        

    }
  ])
  .then((answers) => {
    let numberr = answers.players
    let participants=[]

    for(let i=1;i<=numberr;i++){
        participants.push(i)
    }
    
    const roundRobin = (participants) => {
        if(participants.length%2!=0){
            participants.push(null)
        }
        const tournament = [];
      
        const half = Math.ceil(participants.length / 2);
        const groupA = participants.slice(0, half);
        const groupB = participants.slice(half, participants.length);
        groupB.reverse();
      
        tournament.push(getRound(groupA, groupB));
      
      
        for(let i=1; i < participants.length - 1; i ++) {
          groupA.splice(1, 0, groupB.shift());
          groupB.push(groupA.pop())
          tournament.push(getRound(groupA, groupB));
        }
      
        console.log(tournament)
        console.log("Number of Rounds:", tournament.length)
        return tournament;
      }
      
      const getRound = (groupA, groupB) => {
        const total = [];
        groupA.forEach((p, i) => {
          total.push([groupA[i], groupB[i]]);
        });
        return total.filter(x=>x.indexOf(null)==-1);
      }
      roundRobin(participants)

  })
  .catch((error) => {
    if (error.isTtyError) {
        console.log(error)
    } else {
      console.log(error)
    }
  });

   
 
