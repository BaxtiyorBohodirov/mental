
$(document).ready(function(){

    let currnetNumber=0;
    let myInterval;
    let numbers=[
        [7,-2,3,-7,1,5,-1,2,-7,1],[7,-2,4,-1,-7,2,-3,7,2,-3],[7,2,-1,-7,5,-6,6,2,-3,2],[2,7,-5,-1,-3,4,-1,-2,7,-2],[7,-2,1,3,-7,1,-2,7,-3,2],[7,-2,1,-5,7,-1,-2,4,-3,1],
        [4,5,-1,-7,6,1,-3,2,-7,5],[7,-2,1,-5,7,-2,-1,-5,7,-1],[7,-1,-6,7,-1,-6,7,-1,-5,2],[7,-5,-1,3,5,-7,-2,1,7,-2]
];
    let javoblar=[];
    let examples="";
    
    function changeExampleText()
    {
        let index=0;
        for (const i of examples) {
              let son=numbers[index][currnetNumber];
              $(i).children('h1').text(son)
              if(currnetNumber===0)
              {
                 let j={
                    misol:[son],
                 }
                 javoblar.push(j);
              }
              else
              {
                  javoblar[index].misol.push(son)
              }
            index++;
        }
        currnetNumber++;
        if(currnetNumber===10)
        {
            clearInterval(myInterval);
            inputs();
        }
    }

    function inputs()
    {
        for (const item of examples) {
            $(item).children('h1').remove();
            $(item).append('<input class="inputAnswer" type="number">')
        }
        console.log(javoblar);
    }
    $('.btn.select').click(function(){
        let number=parseInt($('#playersNumber').val());
        let elem ='<div class="example"><h1>0</h1></div>';
        for (let index = 0; index < number; index++) {
            $('.examples').append(elem)
        }
        $('.oyinchi_son').css('display','none')
        examples=$('.example');
    })
    $('.btn.start').click(function(){
        myInterval=setInterval(changeExampleText,1000)
        $('.btn.start').css('display','none');
        $('.btn.check').css('display','inline');
        
    })
   $('.btn.check').click(function(){
        let inputs=$('.inputAnswer');
        let index=0;
        for (const input of inputs) {
            let javob=$(input).val();
            let togriJavob=javoblar[index].misol.reduce((partialSum, a) => partialSum + a, 0);
            $(input).remove();
            let elem="";
            let j=0;
            if(javob==togriJavob)
            {
                j=1
                 elem='<h1 style="font-size:80px;color:white">Javobingiz to\'g\'ri</h1>'
            }
            else{
                 elem='<h1 style="font-size:80px;color:black">Javobingiz noto\'g\'ri</h1>'
            }
            if(j===0)
            {
                $(examples[index]).addClass('back-red');
            }
            $('.btn.check').css('display','none');
            $(examples[index]).append(elem);
             index++;
        }
   })  
})