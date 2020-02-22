// 空配列を用意
var numList = [];
var result = 0;

//値を格納して表示する関数
function numFnc(num){
    // numListにnumを格納
    numList.push(num);
    // 変数resultにnumListの中身を結合したものを格納
    result = numList.join('');
    // inputLabelに取得した値を表示
    document.getElementById("inputLabel").innerText = result;
};

// 数字ボタンまたは小数点ボタンが押下されたときの処理
var numBtn = function(numberBtn){
    // ボタンのvalueで値を取得
    var num = numberBtn.value;
    // numListに何も入っていない場合
    if(numList.length == 0){
        //小数点が最初に打たれた場合
        if(num == '.'){
            // numListに0とnumを格納
            numList.push('0',num);
            // 変数resultにnumListの中身を結合したものを格納
            result = numList.join('');
            // inputLabelに取得した値を表示
            document.getElementById("inputLabel").innerText = String(result);
        }else{
            numFnc(num);
        };
    }else{
        // numListに小数点が存在する場合
        if(numList.indexOf('.') >= 0){
            // numが小数点でなかったらnumFncを実行
            if(num != '.'){
                numFnc(num);
            }// numList[0]が0の場合
        }else if(numList[0] == '0'){
            // numが０でないならnumFncを実行
            if(num != 0){
                numFnc(num);
            }
        }else{
            numFnc(num);
        };
    };
};

var calkBtn = function(calBtn){
    result = Number(numBtn());
    var calk = calBtn.value;
    if(calk = '='){

    }
}