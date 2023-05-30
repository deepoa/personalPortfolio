function typeWriterEffect(ele, text, delay = 150) {
  console.log(text.length);
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
    setTimeout(() => {
      ele.innerHTML += text[i];
    }, delay * i);
  }
}
const para = document.getElementById("LastPara");

typeWriterEffect(para, "And I am a Full Stack Developer");

const colorParagraph = document.getElementById("name").innerText.split("");
