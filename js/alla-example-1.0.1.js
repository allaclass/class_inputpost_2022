// 제    목 : alla-example-1.0.1.js
// 작 성 자 : 김현수
// 작 성 일 : 2022.09.07

// var array_example = [];
var url_example = '';
var data_example = '';

url_example = document.getElementById('txt_example');

function inputData(){
    data_example = url_example.value;
    // console.log(data_example);
}

function convertor(){
    inputData();

    var indexStart = '';
    var indexGa = '';
    var indexNa = '';
    var indexDa = '';
    var indexEnd = '';

    var dataGa = '';
    var dataNa = '';
    
    indexStart = data_example.indexOf('/가.');
    indexGa = data_example.indexOf('/가.');
    indexNa = data_example.indexOf('/나.');
    indexDa = data_example.indexOf('/다.');
    indexEnd = data_example.length;

    // console.log('indexStart : '+indexStart);
    // console.log('indexGa : '+indexGa);
    // console.log('indexNa : '+indexNa);

    dataGa = (data_example.substring(indexStart+3, indexNa)).replace(/(^\s*)|(\s*$)/gi, "");
    dataNa = (data_example.substring(indexNa+3, indexDa)).replace(/(^\s*)|(\s*$)/gi, "");
    dataDa = (data_example.substring(indexDa+3, indexEnd)).replace(/(^\s*)|(\s*$)/gi, "");

    console.log('dataGa : '+dataGa);
    console.log('dataNa : '+dataNa);
    console.log('dataDa : '+dataDa);
}

/*
/가. 가가가가
/나. 나나나나
/다. 다다다다
*/

/*
indexOf 사용법
https://wakestand.tistory.com/313
*/