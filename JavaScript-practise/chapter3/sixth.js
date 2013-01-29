var num=0;
start:
    for(var i=0;i<10;i++){
        for(var j=0;j<10;j++){
            if(i==5&&j==5){
                break start;
            }
            num++;
        }
    }
alert("num:"+num);

var num1=0;
again:
    for(var m=0;m<10;m++){
        for(var n=0;n<10;n++){
            if(m==5&&n==5){
                continue again;
            }
            num1++;
        }
    }
alert("num1:"+num1);