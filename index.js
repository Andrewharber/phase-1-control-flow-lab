function scuberGreetingForFeet(feet){
   if (feet <= "400") 
    return 'This one is on me!'
    else if (feet >= "401" && feet <= "2000") 
      return 'That will be twenty bucks.'
    else if (feet >= "2001" && feet <= "2500")
       return 'I will gladly take your thirty bucks.'
    else if (feet >= "2500")
        return 'No can do.'
   
}

function ternaryCheckCity(city){
let NYC;  
return city === "NYC" ? "Ok, sounds good." : "No go."

}


function switchOnCharmFromTip(tip){
let message = "Bye.";
  switch (tip) {
    case 'generous':
    message = 'Thank you so much.'
    break;
    case 'not as generous':
    message = 'Thank you.'
    break;
    default:
    console.log('Bye.');
    break;
  }

  return message;
}