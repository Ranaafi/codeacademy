let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnerAge = 25;

if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly){
  console.log(`race time is 9:30am and race numder is ${raceNumber}`);
} else if (runnerAge > 18 && !registeredEarly){
  console.log(`race time is 11:00am and race numder is ${raceNumber}`);
} else if(runnerAge < 18){
  console.log('`race time is 11:30 and race numder is ${raceNumber}');
}