
$(document).ready(function(){

    let currnetNumber=0;
    let number=0;
    let timeInterval=0;
    let degreeExample=0;
    let myInterval;
    let currentArr;
    let nol=false;
    let numbers=
    {
        A:[
            [7,-2,3,-7,1,5,-1,2,-7,1],[7,-2,4,-1,-7,2,-3,7,2,-3],[7,2,-1,-7,5,-6,6,2,-3,2],[2,7,-5,-1,-3,4,-1,-2,7,-2],[7,-2,1,3,-7,1,-2,7,-3,2],[7,-2,1,-5,7,-1,-2,4,-3,1],
            [4,5,-1,-7,6,1,-3,2,-7,5],[7,-2,1,-5,7,-2,-1,-5,7,-1],[7,-1,-6,7,-1,-6,7,-1,-5,2],[7,-5,-1,3,5,-7,-2,1,7,-2]
        ],
        B:[

        ],
        C:[
            
        ],
    }
    
    let javoblar=[];
    let examples="";
    
    function changeExampleText()
    {
        // if(nol)
        // {
        //     $('.example h1').text("0");
        //     nol=false;
        // }
        // else
        // {
            let index=0;
            for (const i of examples) {
                if(currnetNumber===0)
                {
                    let r=Math.floor(Math.random()*currentArr.length);
                    let j={
                        index:r
                        }
                    javoblar.push(j);
                        
                }
                let r=Math.floor(currentArr[javoblar[index].index].length*Math.random())
                let son=currentArr[javoblar[index].index][r];
                
                $(i).children('h1').text(son)
                if(currnetNumber===0)
                {
                    javoblar[index].misol=[son]
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
            nol=true
        // }
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
        number=parseInt($('#playersNumber').val());
        timeInterval=parseFloat($('#timeInterval').val());
        degreeExample=parseInt($('#degreeExample').val());
        if(degreeExample===1){
            currentArr=numbers.A;
        }
        else if(degreeExample===2)
        {
            currentArr=numbers.B;
        }
        else{
            currentArr=numbers.C;
        }
        let elem ='<div class="example"><h1>0</h1></div>';
        for (let index = 0; index < number; index++) {
            $('.examples').append(elem)
        }
        $('.oyinchi_son').css('display','none')
        examples=$('.example');
    })
    $('.btn.start').click(function(){
        myInterval=setInterval(changeExampleText,timeInterval*1000)
        $('.example.back-red').removeClass("back-red");
        $('.example h1').text("0");
        $('.example h1').css({'color':"black",'font-size':'152px'});
        $('.btn.start').css('display','none');
        $('.btn.check').css('display','inline');
        javoblar=[];
        
    })
   $('.btn.check').click(function(){
        currnetNumber=0;
        let inputs=$('.inputAnswer');
        let index=0;
        for (const input of inputs) {
            let javob=parseInt($(input).val());
            let togriJavob=javoblar[index].misol.reduce((partialSum, a) => partialSum + a, 0);
            $(input).remove();
            let elem="";
            let j=0;
            console.log(typeof javob+" "+typeof togriJavob);
            if(javob===togriJavob)
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
           
            $(examples[index]).append(elem);
             index++;
        }
        $('.btn.check').css('display','none');
        $('.btn.start').css('display','inline')
   })  
})