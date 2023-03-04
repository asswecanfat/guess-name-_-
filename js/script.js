const dc = document;
const check = dc.querySelector(".check");
const again = dc.querySelector(".again");
const showInfo = dc.querySelector(".msg");
const score = dc.querySelector(".sNum");
const highScore = dc.querySelector(".hsNum");
const num = dc.querySelector(".num");
const bodyStyle = dc.querySelector("body").style;
// const bodyAnima = bodyStyle.animation;

// 初始化随机数
const getRandNum = () => {
  return Math.ceil(Math.random() * 20);
};

const writeTextContent = (obj, msg) => {
  obj.textContent = msg;
};

const setBAnima = (animate) => {
  bodyStyle.animation = animate;
  return true;
};

let nowScore = 20;
let nowHighScore = 0;
let randNum = getRandNum();
let isTurn = false;

const getInputNum = () => {
  const usrNum = Number(dc.querySelector(".in-num").value);
  // 当用户输入的是>0的数字
  if (usrNum) {
    // 当用户输入的数字与随机数相等
    if (usrNum === randNum) {
      writeTextContent(showInfo, `🏆 猜对啦~~`);
      isTurn = setBAnima("changeBGC .5s linear forwards");
      writeTextContent(num, randNum);
      writeTextContent(
        highScore,
        nowScore > nowHighScore ? nowScore : nowHighScore
      );
      isWin = true;
    } else {
      // 当用户输入的数字与随机数不相等
      nowScore--;
      // 判断当前分数是否等于0
      if (nowScore) {
        writeTextContent(
          showInfo,
          usrNum > randNum ? `💦 大了大了...` : `💦 小了小了...`
        );
      } else {
        // 等于0
        writeTextContent(showInfo, `😥 你输了！`);
      }
    }
  } else {
    // 非数字或者数字等于0
    writeTextContent(showInfo, `🚫 ${usrNum}不在1~20之间`);
  }
  writeTextContent(score, nowScore);
};

const reset = () => {
  randNum = getRandNum();
  writeTextContent(showInfo, "开猜开猜……");
  // 判断时候执行动画
  if (isTurn) isTurn = !setBAnima("changeBGC .8s linear reverse forwards");
  writeTextContent(num, "?");
  writeTextContent(score, "20");
  nowScore = 20;
};

check.addEventListener("click", getInputNum);
again.addEventListener("click", reset);
