

    function convertCtoF(){
        var number=document.getElementById("num").value;
        var cel=(number-32) * 5/9;
        document.getElementById("ans").value=cel.toFixed(2) + "\xB0 C";
    }

    function convertFtoC(){
        var number=document.getElementById("num").value;
        var feh=number *9 /5 + 32;
        document.getElementById("ans").value=feh.toFixed(2) + "\xB0 F";
    }
