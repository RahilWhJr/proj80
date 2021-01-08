function getParagraph1()
{
    var input = [];
    
    for(var i = 1 ; i <=6 ; i++)
        {
            input.push(document.getElementById("para1_i" + i).value);
        }
    
    inputs.join(". ");
    document.getElementById("showPara1").innerHTML = inputs.join(". ");
}

function getParagraph2()
{
    var input = [];
    
    for(var i = 1 ; i <=6 ; i++)
        {
            input.push(document.getElementById("para2_i" + i).value);
        }
    
    inputs.join(". ");
    document.getElementById("showPara2").innerHTML = inputs.join(". ");
}

