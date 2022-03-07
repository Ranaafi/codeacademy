// sleep debt calculator

function getSleepHours(day){

    if (day === 'Monday'){
      return 8;
    } else if (day === 'Tuesday') {
      return 9;
    } else if (day === 'Wednesday') {
      return 7;
    } else if (day === 'Thursday') {
      return 6;
    } else if (day === 'Friday') {
      return 10;
    }
  };
  
  const getActualSleepHours = () => {
   actual = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday');
  
   return actual;
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
  
      if (actualSleepHours === idealSleepHours) {
    console.log('the user got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(' the user got more sleep than needed.');
  } else {
    console.log('the user should get some rest.');
  }
  };
  
  calculateSleepDebt();