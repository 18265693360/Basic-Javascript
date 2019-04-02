var num1 = document.getElementById('num1')
var num2 = document.getElementById('num2')
var result = document.getElementById("result")
// var btn 此处命名前面只能是字母和下划线开头 中间无所谓 = document.getElementById('btn')


btn.onclick = function(){
    var end = parseInt(num1.value) + parseInt(num2.value)
    result.value = end
}