function startGame(){
   let picchange1 = document.getElementById("pic_change-1")
   let picchange2 = document.getElementById("pic_change-2")
   let picchange3 = document.getElementById("pic_change-3")

   let card2 = document.getElementById("cards-2")
   let card3 = document.getElementById("cards-3")

   let card_tobe_display_1 = document.getElementById("card-display-1")
   let card_tobe_display_2 = document.getElementById("card-display-2")
   let card_tobe_display_3 = document.getElementById("card-display-3")

   let scores = document.getElementById("scores")

   let result_board_info = document.getElementById("result_board_info")

   
   
   // creating an array of 11 elements with their image paths
   let array=[]
   array[0] = "aofs.jpg"
   array[1] = "spades-2.jpg"
   array[2] = "spades-3.png"
   array[3] = "spades-4.png"
   array[4] = "spades-5.jpg"
   array[5] = "spades-6.jpg"
   array[6] = "spades-7.jpg"
   array[7] = "spades-8.png"
   array[8] = "spades-9.png"
   array[9] = "spades-10.png"
   array[10] = "spades-11.png"
   // picchange2.src = array[0]
   picchange1.style.width = "225px"
   picchange1.style.height = "225px"

   let result_array= [];

   let count = 0;

  
   
switch(count){
   case 0:
      setTimeout(() => {
         let number = Math.floor(Math.random()*11)
      result_array.push(number)
   switch(number){
      case 0:
         picchange1.src = array[0];
         card_tobe_display_1.src = array[0]
         break;
      case 1:
         picchange1.src = array[1];
         card_tobe_display_1.src = array[1]
         break;

      case 2:
         picchange1.src = array[2];
         card_tobe_display_1.src = array[2]
         break;
         
      case 3:
         picchange1.src = array[3];
         card_tobe_display_1.src = array[3]
         break;

      case 4:
         picchange1.src = array[4];
         card_tobe_display_1.src = array[4]
         break;

      case 5 :
         picchange1.src = array[5];
         card_tobe_display_1.src = array[5]
         break;

      case 6:
         picchange1.src = array[6];
         card_tobe_display_1.src = array[6]
         break;

      case 7:
         picchange1.src = array[7];
         card_tobe_display_1.src = array[7]
         break;

      case 8:
         picchange1.src = array[8];
         card_tobe_display_1.src = array[8]
         break;

      case 9:
         picchange1.src = array[9];
         card_tobe_display_1.src = array[9]
         break;

      case 10:
         picchange1.src = array[10];
         card_tobe_display_1.src = array[10]
         break;

      default:
         window.alert("something went wrong!")
         break;
         // necessary to fit the image inside the cards box
         picchange1.style.width = "225px"
         picchange1.style.height = "225px"
        count++;
      }
      }, 800);
      
      // //////////////////////////////////////////////////////////
   
      case 1 :
      setTimeout(() => {
      let number2 = Math.floor(Math.random()*11)
      result_array.push(number2)
   switch(number2){
      case 0:
         picchange2.src = array[0];
         card_tobe_display_2.src = array[0]
         
         break;
      case 1:
         picchange2.src = array[1];
         card_tobe_display_2.src = array[1]
         break;

      case 2:
         picchange2.src = array[2];
         card_tobe_display_2.src = array[2]
         break;
         
      case 3:
         picchange2.src = array[3];
         card_tobe_display_2.src = array[3]
         break;

      case 4:
         picchange2.src = array[4];
         card_tobe_display_2.src = array[4]
         break;

      case 5 :
         picchange2.src = array[5];
         card_tobe_display_2.src = array[5]
         break;

      case 6:
         picchange2.src = array[6];
         card_tobe_display_2.src = array[6]
         break;

      case 7:
         picchange2.src = array[7];
         card_tobe_display_2.src = array[7]
         break;

      case 8:
         picchange2.src = array[8];
         card_tobe_display_2.src = array[8]
         break;

      case 9:
         picchange2.src = array[9];
         card_tobe_display_2.src = array[9]
         break;

      case 10:
         picchange2.src = array[10];
         card_tobe_display_2.src = array[10]
         break;

      default:
         window.alert("something went wrong!")
         break;
   }
   // necessary to fit the image inside the cards box
   picchange2.style.width = "225px"
         picchange2.style.height = "225px"
         count++;
   }, 1600);

   case 2:
      setTimeout(() => {
         if(result_array[0] + result_array[1] != 21){
            let number3 = Math.floor(Math.random()*11)
            result_array.push(number3)
         switch(number3){
            case 0:
               picchange3.src = array[0];
               card_tobe_display_3.src = array[0]
               
               break;
            case 1:
               picchange3.src = array[1];
               card_tobe_display_3.src = array[1]
               break;
      
            case 2:
               picchange3.src = array[2];
               card_tobe_display_3.src = array[2]
               break;
               
            case 3:
               picchange3.src = array[3];
               card_tobe_display_3.src = array[3]
               break;
      
            case 4:
               picchange3.src = array[4];
               card_tobe_display_3.src = array[4]
               break;
      
            case 5 :
               picchange3.src = array[5];
               card_tobe_display_3.src = array[5]
               break;
      
            case 6:
               picchange3.src = array[6];
               card_tobe_display_3.src = array[6]
               break;
      
            case 7:
               picchange3.src = array[7];
               card_tobe_display_3.src = array[7]
               break;
      
            case 8:
               picchange3.src = array[8];
               card_tobe_display_3.src = array[8]
               break;
      
            case 9:
               picchange3.src = array[9];
               card_tobe_display_3.src = array[9]
               break;
      
            case 10:
               picchange3.src = array[10];
               card_tobe_display_3.src = array[10]
               break;
      
            default:
               window.alert("something went wrong!")
               break;
      
         }
         // necessary to fit the image inside the cards box
         picchange3.style.width = "225px"
         picchange3.style.height = "225px"
         count++;
            
       }
       console.log(result_array)

         let result = 0;
         for(i = 0 ; i < 3 ;i++){
         result = result + result_array[i];
         }
         scores.innerText = result + 3; // will update the score_board
         console.log(result)

         setTimeout(() => {
            if((result + 3) == 21){ // i made a mistake here!
               console.log("you won")
               result_board_info.innerHTML = "hooryay! U WON"
               document.getElementById("result_board").style.boxShadow = "5px 5px 10px green"
            }
            else{
               console.log("you lost");
               result_board_info.innerHTML = "oops! u lost"
               document.getElementById("result_board").style.boxShadow = "5px 5px 10px red"
            }
         }, -1500);
         
         setTimeout(() => {
            document.location.reload();
         }, 5000);
      }, 2400);
   
}



}

   
   