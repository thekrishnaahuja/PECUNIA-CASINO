function start(){
    setTimeout(swing,800);
}

let count = 0;

function swing(){
    let game_pic_1=document.getElementById("game-screen-divisions-1")
    let game_pic_2=document.getElementById("game-screen-divisions-2")
    let game_pic_3=document.getElementById("game-screen-divisions-3")
    let pull_chamber = document.getElementById("pull-chamber")
    let welcome = document.getElementById("welcome-child")
    document.getElementById("img-pull").src = "IMG_20230501_201458.jpg"
    let cash_audio = new Audio("cash-register-141427.mp3")
    let atm_audio = new Audio("8-bit-blast-63035.mp3")

    let opps_sound = new Audio("wahwahwahwaaaahahahahahaha-94669.mp3")

    // document.body.style.backgroundImage = "" //(initaial)
    setTimeout(() => {
        atm_audio.play();
    },0 );
    
    count++;
    let result_array = [];
    switch(count){
        case 1:
            // to generate a random number
            setTimeout(()=>{
                let number1 = Math.floor(((Math.random()*3)))
            switch (number1){
                case 0:
                game_pic_1.style.backgroundImage= "url('king.png')";
                break;
        
                case 1:
                game_pic_1.style.backgroundImage="url('seven.jpg')"
                break;
        
                case 2:
                game_pic_1.style.backgroundImage = "url('aofs.jpg')"    
                break;

                default :
                alert("something went wrong");
            }
            count++;
            console.log(number1)
            result_array.push(number1)
            },700)
            

        case 2:
            setTimeout(() => {
                // to generate a random number
            let number2 = Math.floor(((Math.random()*3)))
            switch (number2){
                case 0:
                game_pic_2.style.backgroundImage= "url('king.png')";
                break;
        
                case 1:
                game_pic_2.style.backgroundImage="url('seven.jpg')"
                break;
        
                case 2:
                game_pic_2.style.backgroundImage = "url('aofs.jpg')"    
                break;
                default :
                alert("something went wrong");
            } 
            count++;
            console.log(number2)
            result_array.push(number2)
            }, 1400);
            
            
        case 3:
            setTimeout(() => {
                // to generate a random number
            let number3 = Math.floor(((Math.random()*3)))
            switch (number3){
                case 0:
                game_pic_3.style.backgroundImage= "url('king.png')";
                break;
        
                case 1:
                game_pic_3.style.backgroundImage="url('seven.jpg')"
                break;
        
                case 2:
                game_pic_3.style.backgroundImage = "url('aofs.jpg')"    
                break;
                default :
                alert("something went wrong");
            }
            console.log(number3)
            result_array.push(number3)
            }, 2100);
            
        }
    for (i = 0; i < 3;i++){
        console.log(`this is val of arr[i] :${result_array[i]}`)
    }
     // using tempalate strings
    setTimeout(() => {
        if(result_array[0]=== result_array[1] && result_array[0]===result_array[2]){
            document.getElementById("won").innerText = "WINNER";
            //final bg-img set-up
            document.body.style.backgroundImage = "url('casino-img.jpg')" // imp#
            // document.body.style.backgroundRepeat ="no-repeat"
            document.body.style.backgroundSize = "cover" // imp#
            // document.body.style.position = "center"
            // /////////////
            document.getElementById("full-web").style.backgroundColor = "transparent"
            // ////////////
            welcome.style.opacity = "0"
            atm_audio.pause();
            setTimeout(() => {
                cash_audio.play()
            },0);
            
            setTimeout(()=>{
                document.location.reload();
            },8000)
            
            
        }
        else{
            opps_sound.play();
            document.getElementById("won").innerText = "NXT TIME";
            setTimeout(() => {
                
                document.location.reload();
                
            },4000)

            atm_audio.pause();

            
        }
    }, 2100);
}
// ///////////////////////////////////////////////////////////