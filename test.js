// 空配列を用意
var numList = [];
var result = 0;
var numBtn = function(numberBtn){
    // ボタンのvalueで値を取得
    var num = numberBtn.value;
    // numListにnumを格納
    numList.push(num);
    // 変数resultにnumListの中身を結合したものを格納
    result = numList.join('');
    // inputLabelに取得した値を表示
    document.getElementById("inputLabel").innerText = result;
    console.log(result);
};

var calkBtn = function(calBtn){
    result = Number(numBtn());
    var calk = calBtn.value;
    if(calk = '='){

    }
}