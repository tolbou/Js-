function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "ボタンが押されました!";
    document.body.appendChild(para);
  }
  
  const buttons = document.querySelectorAll("button");
  
  for (const button of buttons) {
    button.addEventListener("click", createParagraph);
  }



const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "暗くて嵐のような夜でした...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});


