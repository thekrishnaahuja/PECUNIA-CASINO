const cardarray = [
    {
        name:"king",
        img :"king.jpg"
    },

    {
        name:"queen",
        img :"queen.png"
    },

    {
        name:"ace",
        img :"ace.png"
    },

    {
        name:"joker",
        img :"joker.jpg"
    },

    {
        name:"seven",
        img :"seven.png"
    },

    {
        name:"eigth",
        img :"eight.png"
    },
    // ////////////////////////
    {
        name:"king",
        img :"king.jpg"
    },

    {
        name:"queen",
        img :"queen.png"
    },

    {
        name:"ace",
        img :"ace.png"
    },

    {
        name:"joker",
        img :"joker.jpg"
    },

    {
        name:"seven",
        img :"seven.png"
    },

    {
        name:"eigth",
        img :"eight.png"
    },
    
]

cardarray.sort(() => 0.5 - Math.random())

console.log(cardarray);
let choosencard = [];
let choosencardids = [];
const cardsWon = [];

const gridDisplay  = document.querySelector('#grid')
// console.log(griddisplay)
document.getElementById("result").style.opacity = 0;
function checkMatch(){
    // let choosencard = [];
    // let choosencardids = [];
    const cards = document.querySelectorAll('img');
    const optionone = choosencardids[0];
    const optiontwo = choosencardids[1];
    // console.log(cards + "heyy")
    if(choosencard[0] === choosencard[1]){
        setTimeout(()=>{
            // box-shadow: 10px 10px 20px black;
            document.getElementById("grid").style.boxShadow = " 10px 10px 20px black"
        },1500)
        document.getElementById("grid").style.boxShadow = " 10px 10px 20px green"
        alert("you found a match!")

        setTimeout(()=>{
            cards[optionone].setAttribute('src','white.png') 
            cards[optiontwo].setAttribute('src','white.png') 
        },500)
        cards[optionone].removeEventListener('click',flipCard)
        cards[optiontwo].removeEventListener('click',flipCard)
        cardsWon.push(choosencard)

        
        
    }
    else{
        document.getElementById("grid").style.boxShadow = " 10px 10px 20px red"
        setTimeout(()=>{
            // box-shadow: 10px 10px 20px black;
            document.getElementById("grid").style.boxShadow = " 10px 10px 20px black"
        },1500)
        alert("hhaaa")
        cards[optionone].setAttribute('src','blank.png') 
        cards[optiontwo].setAttribute('src','blank.png') 
        
    }
        
        
    if(cardsWon.length === cardarray.length/2){
        alert("sid u are so beautiful!")
        document.getElementById("result").style.opacity = 1;
    }
    choosencard = [];
    choosencardids = [];                         
    
}
    
function createboard(){
    for (let i = 0 ; i < cardarray.length ; i ++){
        const card = document.createElement('img')
        card.setAttribute('src','blank.png')
        card.addEventListener('click',flipCard)
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)
    }
}
createboard();
function flipCard(){
    const cardId = this.getAttribute("data-id")
    console.log("clicked",cardId);
    choosencard.push(cardarray[cardId].name)
    choosencardids.push(cardId)
    this.setAttribute('src',cardarray[cardId].img)

    if(choosencard.length === 2){
        setTimeout(checkMatch(),500);
    }

}
