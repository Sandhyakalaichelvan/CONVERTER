function convert()
{
    var cel = parseFloat(document.getElementById('a').value)
    var temp=((cel*(9/5)) + 32)
    document.getElementById('b').value = temp

}

function far(){
    var far = parseFloat(document.getElementById('c').value)
    var temp2  = ((far-32)*(5/9))
    document.getElementById('d').value = temp2
}