let wordList =[
  {
    japanese: "刈りそろえる",
    english: "trim"
  },
  {
    japanese: "横断歩道",
    english: "crosswalk"
  },
  {
    japanese: "列",
    english: "row"
  },
  {
    japanese: "広げる",
    english: "lay out"
  },
  {
    japanese: "交差点",
    english: "intersection"
  }
]

// 問題の番号を付ける(配列のインデックス)
let questionNumber = 0;

// 問題を表示する関数
function makeQuestions(){
  const questionElement = document.getElementById("question"); // <div id="question"></div>を取得し、名前を付ける
  questionElement.innerHTML = wordList[questionNumber].japanese; // innerHTML：HTML要素の中身を取得したり、変更したりすることができるプロパティ。questionElementの中身に、日本語の単語を表示
  questionElement.style.fontSize = "30px"; // 文字の大きさを変更する
  questionElement.style.fontWeight = "bold"; // 文字の太さを変更する
  questionElement.style.color = "orange"; // 文字の色を変更する
}

// 回答をチェックする関数
function checkAnswer() {
  const inputElement = document.getElementById("input"); // <input type="text" id="input" size="20" placeholder="単語を入力してください"/>
  const userAnswer = inputElement.value.toLowerCase(); // .valueは主にフォーム要素の値を取得するために使用され、.textContentは要素のテキスト内容を取得するために使用される
  //toLowerCaseメソッド：大文字を小文字に変換。大文字と小文字を無視して文字列を比較できる。

  const answerElement = document.getElementById("resultMessage"); //  <p id="resultMessage"></p>を取得し、名前を付ける。ここに正解か不正解を表示したい！

  const correctWord = wordList[questionNumber].english; // 正解の英語を変数に代入
  

  if (userAnswer === correctWord) {
    answerElement.innerHTML = "正解！";
  } else {
    answerElement.innerHTML = `不正解！ 正解は ${correctWord} でした。`;
  }

  questionNumber++;

  //ここまで理解

  if (questionNumber < wordList.length) {
    inputElement.value = "";
    makeQuestions();
  } else {
    answerElement.innerHTML = "クイズ終了！";
  }
}

document.getElementById("enter").addEventListener("click", checkAnswer);
