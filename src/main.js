let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `
/* 你好，我叫小周
接下来我来演示一下我的前端功底
首先准备一个div
*/
#div1{
    border:1px solid red;
    width:200px;
    height:200px;
}
/* 接下来我把div变成一个太极图
第一步，将div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 太极图由两种颜色组成，一黑一白，白色为阳，黑色为阴*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 第二步，在圆内放入两个小球
*/
#div1::before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 这样就完成了一个太极图的制作*/
`;
// string = string.replace(/\n/g, "<br>");
let string2 = "";
let n = 0;
// html.innerHTML = string.substring(0, n + 1);
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      // 如果是回车不照搬
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp";
    } else {
      // 如果不是回车就照搬
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    if (n < string.length - 1) {
      // 如果n不是最后一个就继续
      n = n + 1;
      step();
    }
  }, 10);
};
step();
