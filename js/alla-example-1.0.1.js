// 제    목 : alla-example-1.0.1.js
// 작 성 자 : 김현수
// 작 성 일 : 2022.09.07

/*
/가. 가가가가
/나. 나나나나
/다. 다다다다
*/

/*
indexOf 사용법
https://wakestand.tistory.com/313
*/

// var array_example = [];


// 데이터 가지고 있을 전역변수 생성
var url_example = '';
var data_example = '';
var array_data = '';

// 텍스트영역의 URL 변수에 넣기
url_example = document.getElementById('txt_example');

// 데이터 갖고 오는 함수
function inputData(){
    data_example = url_example.value;
    // console.log(data_example);
}

// 데이터영역 비우는 함수
function clearTextarea(){
    url_example.value = '';
}

// 데이터 넣기 - 가. 나. 다
function pushData_1(){
    url_example.value = '/가. 가가가가\n/나. 나나나나\n/다. 다다다다\n/라. 라라라라';
}
// 데이터 넣기 - 서클 1,2,3
function pushData_2(){
    url_example.value = '/①. 가가가가\n/②. 나나나나\n/③. 다다다다\n/④. 라라라라';
}
// 데이터 배열의 데이터 넣기
function pushData_array(){
    url_example.value = array_data;
    array_data = '';
}

// 데이터 변환 함수 1
function convertor_1(){
    pushData();
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

function convertor_2(){
    // 데이터 가져오기
    inputData();

    // 기준값 가지고 있을 배열 생성
    var arrStandard = ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'];
    var arrIndex = [];

    // console.log(arrStandard[0]);

    for(var i=0; i < arrStandard.length-1; i++){
        if(data_example.indexOf('/'+arrStandard[i])>-1){
            var j = i+1;
            var indexStart = '';
            var indexEnd = '';

            indexStart = data_example.indexOf('/'+arrStandard[i]);

            if(data_example.indexOf('/'+arrStandard[j])>-1){
                indexEnd = data_example.indexOf('/'+arrStandard[j]);
            } else {
                indexEnd = data_example.length;
            }
            
            // console.log(arrStandard[i]);
            // console.log(data_example.indexOf('/'+arrStandard[i]));
            // console.log(data_example.indexOf('/'+arrStandard[j]));
            arrIndex[i] = (data_example.substring(indexStart+3, indexEnd)).replace(/(^\s*)|(\s*$)/gi, "");
            console.log(arrStandard[i]+'. '+arrIndex[i]);
        } else if(data_example.indexOf('/'+arrStandard[i])<0){
            break;
        }
    }

}


function convertor_3(){
    // 데이터 가져오기
    inputData();

    // 기준값 가지고 있을 배열 생성
    var arrStandard = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑪', '⑫', '⑬', '⑭', '⑮'];
    // 가지고 온 데이터 저장할 배열 생성
    var arrIndex = [];

    // console.log(arrStandard[0]);


    for(var i=0; i < arrStandard.length-1; i++){                // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문
        if(data_example.indexOf('/'+arrStandard[i])>-1){        // 기준값 배열의 0의 값부터 비교하라
            var j = i+1;                                        // 기준값 배열의 0의 다음 값 인덱스
            var indexStart = '';                                // 시작 인덱스 담을 변수 생성
            var indexEnd = '';                                  // 끝 인덱스 담을 변수 생성

            indexStart = data_example.indexOf('/'+arrStandard[i]);  // 시작 인덱스 값에 기준값 배열의 첫번째 값의 인덱스 값을 넣어라

            if(data_example.indexOf('/'+arrStandard[j])>-1){        // 기준값 배열의 현재의 다음 값이 있다면
                indexEnd = data_example.indexOf('/'+arrStandard[j]);    // 끝 인덱스 값에 기준값 배열의 다음 값의 인덱스 값을 넣어라
            } else {                                                // 기준값 배열의 현재의 다음 값이 없다면
                indexEnd = data_example.length;                         // 끝 인덱스 값에 데이터 끝길이의 인덱스 값을 넣어라
            }
            
            // console.log(arrStandard[i]);
            // console.log(data_example.indexOf('/'+arrStandard[i]));
            // console.log(data_example.indexOf('/'+arrStandard[j]));
            arrIndex[i] = (data_example.substring(indexStart+3, indexEnd)).replace(/(^\s*)|(\s*$)/gi, "");      // 데이터 배열에 지금 가지고 온 데이터를 넣어라
            console.log(arrStandard[i]+'. '+arrIndex[i]);                                                       // 콘솔로그에 "가. 데이터"와 같은 형태로 찍어내라

            array_data += arrStandard[i]+'. '+arrIndex[i];      // 텍스트 영역에 뿌리는 건데 잘 안되네
            // pushData_array(array_data);

        } else if(data_example.indexOf('/'+arrStandard[i])<0){
            break;
        }
    }

}