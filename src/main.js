let content = document.querySelector("#content");
let circle = document.querySelector("#circle");
let style = document.querySelector("#style");

let string = `/* 你好，我叫小周，
* 接下来我要演示我的前端功底
* 我将会画一个太极图案
*/
/* 首先画一个圆 */
#circle {
    border: 1px solid red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
/* 加上阴阳两极 */
#circle {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 画上圆内的小圆 */
#circle::before {
    border: 1px solid red;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
#circle::after {
    border: 1px solid blue;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    border-radius: 50%;
}
/* 去掉边框 */
#circle::before {
    border: none;
}
#circle::after {
    border: none;
}
/* 最后让太极动起来吧 */
@keyframes rot {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
#circle {
    animation: rot 3s linear infinite;
}
`;

let html = "";

let n = 0;

let showContent = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      html += "<br>";
    } else if (string[n] === " ") {
      html += "&nbsp;";
    } else {
      html += string[n];
    }
    content.innerHTML = html;
    style.innerHTML = string.substring(0, n);
    n++;
    window.scrollTo(0, document.body.scrollHeight);
    content.scrollTo(0, content.scrollHeight);
    if (n < string.length) {
      showContent();
    }
  }, 10);
};
showContent();