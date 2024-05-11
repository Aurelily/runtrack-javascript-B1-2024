$(document).ready(function(){

    const final = new Audio("sounds/finalroundfight.mp3");
    final.play();
    
    //FUNCTIONS    
    
    //shuffle function
    function shuffle(array) 
    {
        let currentIndex = array.length,  randomIndex;
    
        // While there remain elements to shuffle...
        while (currentIndex != 0) 
        {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
    
        return array;
    }

    //img appending function
    function appendImg(arrImg){
        for (let i = 0; i< arrImg.length; i++){
            let temp = arrImg;
            $('#melangees').append(temp[i]);
        }
    }

    //DATA

    //weird bug, if i shuffle my const array and set it in an another variable,
    //it shuffles my const array nevertheless
    const sortedImgs = [    '<img src="imgs/arc1.png" class="images">',
                            '<img src="imgs/arc2.png" class="images">',
                            '<img src="imgs/arc3.png" class="images">',
                            '<img src="imgs/arc4.png" class="images">',
                            '<img src="imgs/arc5.png" class="images">',
                            '<img src="imgs/arc6.png" class="images">'];

    let arrayToSort = [    '<img src="imgs/arc1.png" class="images">',
                            '<img src="imgs/arc2.png" class="images">',
                            '<img src="imgs/arc3.png" class="images">',
                            '<img src="imgs/arc4.png" class="images">',
                            '<img src="imgs/arc5.png" class="images">',
                            '<img src="imgs/arc6.png" class="images">'];
                            
    let imgArray = shuffle(arrayToSort);
    let tempArr = [];
    let count = 0
    appendImg(imgArray); 

    //JQUERY

    //button click resert
    $("#button").click(function(){
        location.reload();
    });


    //img click change div
    $('.images').click(function() {
        const select = new Audio("sounds/select.mp3");
        select.play();
        //set the clicked .image display to none
        $(this).css("display","none");

        //stock the src to use it
        let src = $(this).attr('src');

        //create variable with img tag and src
        let img = '<img src="'+src+'" class="images">';

        //append new div with stocked src
        $('#rangees').append(img);
        tempArr.push(img);
        

        if ( tempArr.length === 6) 
        {
            console.table(tempArr);

            for ( let i = 0 ; i < tempArr.length ; i++) 
            {
                console.log(sortedImgs[i]+" | "+ tempArr[i])
                if (sortedImgs[i] == tempArr[i]) {
                    count++;
                    console.log(count);
                }

                
            }

            if (count === 6){
                const win = new Audio("sounds/youwin.mp3");
                win.play();
                $('#rangees').after('<img src="imgs/win.gif" class="images">');
            }else {
                const lose = new Audio("sounds/youlose.mp3");
                lose.play();
                $('#rangees').after('<img src="imgs/lose.gif" class="images">');
            }


        }

      
    })
    
    
});


