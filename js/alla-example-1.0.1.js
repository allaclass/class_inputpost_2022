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

// ------------------------------------------------------------------------------
// 변 수 영 역
// ------------------------------------------------------------------------------

var url_example = document.getElementById('txt_example');     // textarea #txt_example 의 위치를 넣어두는 변수 생성 → 위치값 넣기
var data_example = '';      // textarea #txt_example의 데이터를 넣어둘 변수 생성
var array_data = '';            // 변환한 데이터를 넣어둘 변수 생성 - 현재 기능 불능
var text_standard = '';        // 보기문 기준값 넣어둘 변수 생성
var text_standard_next = '';    // 보기문 다음단계 기준값 넣어둘 변수 생성
var input_tmp = '';
var standard_tmp = '';
var data_tmp = '/보기문';            // 변환한 데이터를 임시로 넣어둘 변수 생성

// ------------------------------------------------------------------------------
// 배 열 영 역
// ------------------------------------------------------------------------------

var arrStandard = [];       // 보기문 리스트의 기준들을 넣어둘 배열 (예시: 가. 나. 다 또는 ⓐ, ⓑ, ⓒ)

// ------------------------------------------------------------------------------
// 함 수 영 역
// ------------------------------------------------------------------------------

function inputData(){       // textarea #txt_example 의 값을 data_example 변수에 넣는 함수
    data_example = url_example.value;
}

function clearData(){       // textarea #txt_example 의 값을 비우는 함수
    url_example.value = '';
}

function pushData_Kor(){      // textarea #txt_example 에 가. 나. 다 예문 넣기
    url_example.value = '   가. 가가가가\n  나. 나나나나\n 다. 다다다다\n    라. 라라라라\n  마. 마마마마';
}

function pushData_EngSmall(){      // textarea #txt_example 에 a. b. c 예문 넣기
    url_example.value = '   a. aaaa\n  b. bbbb\n c. cccc\n    d. dddd\n  e. eeee';
}

function pushData_2(){      // textarea #txt_example 에 ⓐ. ⓑ. ⓒ 예문 넣기
    url_example.value = 'ⓐ 가가가가\nⓑ 나나나나\nⓒ 다다다다\nⓓ 라라라라';
}

function pushData_result(){
    url_example.value = data_tmp;
}

function inputArrStandard_Kor(){       // arrStandard 배열에 가. 나. 다 기준값 넣기
    arrStandard = [' 가.', ' 나.', ' 다.', ' 라.', ' 마.', ' 바.', ' 사.', ' 아.', ' 자.', ' 차.', ' 카.', ' 타.', ' 파.', ' 하.'];
}

function inputArrStandard_EngSmall(){       // arrStandard 배열에 a. b. c. 기준값 넣기
    arrStandard = [' a.', ' b.', ' c.', ' d.', ' e.', ' f.', ' g.', ' h.', ' i.', ' j.', ' k.', ' l.', ' m.', ' n.', ' o.', ' p.', ' q.', ' r.', ' s.', ' t.', ' u.', ' v.', ' w.', ' x.', ' y.', ' z.'];
}

function inputArrStandard_EngBig(){       // arrStandard 배열에 a. b. c. 기준값 넣기
    arrStandard = [' A.', ' B.', ' C.', ' D.', ' E.', ' F.', ' G.', ' H.', ' I.', ' J.', ' K.', ' L.', ' M.', ' N.', ' O.', ' P.', ' Q.', ' R.', ' S.', ' T.', ' U.', ' V.', ' W.', ' X.', ' Y.', ' Z.'];
}

function inputArrStandard_Circle_EngSmall(){
    arrStandard = ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ', 'ⓔ', 'ⓕ', 'ⓖ', 'ⓗ', 'ⓘ', 'ⓙ', 'ⓚ', 'ⓛ', 'ⓜ', 'ⓝ', 'ⓞ', 'ⓟ', 'ⓠ', 'ⓡ', 'ⓢ', 'ⓣ', 'ⓤ', 'ⓥ', 'ⓦ', 'ⓧ', 'ⓨ', 'ⓩ'];
}

function convertor_Kor(){     // 보기문 : 가.나.다. 변환 함수
    inputData();    // #txt_example 데이터 가져오기
    clearData();    // #txt_example 비우기
    inputArrStandard_Kor();    // arrStandard 배열에 가.나.다 기준값 넣는 함수 불러오기

    for(var i=0; i < arrStandard.length-1; i++){                // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

        text_standard = arrStandard[i];             // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

        if(data_example.indexOf(text_standard)>-1){     // 보기문에서 기준값이 있다면
            var j = i+1;                                                                // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
            var indexStart = '';                                                       // 시작 인덱스 담을 변수 생성
            var indexEnd = '';                                                        // 종료 인덱스 담을 변수 생성

            indexStart = data_example.indexOf(text_standard);              // 현재 기준값의 보기문 시작 인덱스값 넣기
            
            text_standard_next = arrStandard[j]                             // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

            if(data_example.indexOf(text_standard_next)>-1){                // 다음단계 기준값이 보기문에 있다면
                indexEnd = data_example.indexOf(text_standard_next);            // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
                data_tmp += '\n';
            } else {                                                                      // 다음단계 기준값이 보기문에 없다면
                indexEnd = data_example.length;                                       // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
                data_tmp += '\n';
            }

            input_tmp = (data_example.substring(indexStart+3, indexEnd)).replace(/(^\s*)|(\s*$)/gi, "");      // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라
            
            data_tmp += '/한글'+arrStandard[i]+' '+input_tmp+'/.한글';                                // 변환된 정보를 data_tmp 변수에 담아라

            input_tmp = '';                                                                                           // input_tmp 변수 초기화

            pushData_result();                                                                                       // textarea #txt_example 에 출력하기

        } else if(data_example.indexOf(text_standard)<0){  // 보기문에서 다음단계 기준값이 없다면 반복 종료
            data_tmp = '/보기문';
            break;
        }
    }

}



function convertor_EngSmall(){     // 보기문 : a.b.c. 변환 함수
    inputData();    // #txt_example 데이터 가져오기
    clearData();    // #txt_example 비우기
    inputArrStandard_EngSmall();    // arrStandard 배열에 가.나.다 기준값 넣는 함수 불러오기                                                    ★ 변수 기준 바꿀 때 여기 체크

    for(var i=0; i < arrStandard.length-1; i++){                // 기준값 배열의 인덱스를 기반으로 기준값을 비교하는 반복문

        text_standard = arrStandard[i];             // text_standard 변수에 현재 기준값 넣기 (예시: /가.   /나.  등 )

        if(data_example.indexOf(text_standard)>-1){     // 보기문에서 기준값이 있다면
            var j = i+1;                                                                // 기준값 배열의 다음단계 인덱스값을 담아둘 변수 j
            var indexStart = '';                                                       // 시작 인덱스 담을 변수 생성
            var indexEnd = '';                                                        // 종료 인덱스 담을 변수 생성

            indexStart = data_example.indexOf(text_standard);              // 현재 기준값의 보기문 시작 인덱스값 넣기
            
            text_standard_next = arrStandard[j]                             // text_standard_next 변수에 다음단계 기준값 넣기 (예시: 현재 /가. 라면 /나.를 담는 것)

            if(data_example.indexOf(text_standard_next)>-1){                // 다음단계 기준값이 보기문에 있다면
                indexEnd = data_example.indexOf(text_standard_next);            // 다음단계 기준값의 보기문 시작 인덱스값을 종료 인덱스값에 넣기
                data_tmp += '\n';
            } else {                                                                      // 다음단계 기준값이 보기문에 없다면
                indexEnd = data_example.length;                                       // 보기문 맨끝값의 인덱스값을 종료 인덱스값에 넣기
                data_tmp += '\n';
            }

            input_tmp = (data_example.substring(indexStart+3, indexEnd)).replace(/(^\s*)|(\s*$)/gi, "");      // 데이터 배열에 지금 가지고 온 데이터를 input_tmp 변수에 담아라
            
            data_tmp += '/영소'+arrStandard[i]+' '+input_tmp+'/.영소';                                // 변환된 정보를 data_tmp 변수에 담아라           ★ 변수 기준 바꿀 때 여기 체크

            input_tmp = '';                                                                                           // input_tmp 변수 초기화

            pushData_result();                                                                                       // textarea #txt_example 에 출력하기

        } else if(data_example.indexOf(text_standard)<0){  // 보기문에서 다음단계 기준값이 없다면 반복 종료
            data_tmp = '/보기문';
            break;
        }
    }

}