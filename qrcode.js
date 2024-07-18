const frm = document.getElementById("frm");
const output = document.getElementById("output");
const spinner = document.getElementById("loading");
const n = document.getElementById("coding");
const savepic = document.getElementById("save-pic");

function generateQrcode(a) {
  // console.log("hii");
  a.preventDefault();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  const clrDark = document.getElementById("colorDark").value;
  const clrLight = document.getElementById("colorLight").value;
  // console.log(url,size,clrDark,clrLight);

  if (url === "") {
    alert("Please enter the url");
  } else {
    // show spinner
    spinner.style.display = "flex";

    setTimeout(() => {
      // hide spinner
      spinner.style.display = "none";
      n.innerHTML = "";

      //generate qrcode

      const m = new QRCode("coding", {
        text: url,
        width: size,
        height: size,
        colorDark: clrDark,
        colorLight: clrLight,
        correctLevel: QRCode.CorrectLevel.H,
      });
    }, 2000);
  }
}

frm.addEventListener("submit", generateQrcode);

savepic.addEventListener("click", downclick);

function downclick() {

  const c = n.querySelector("img").src;
  savepic.href = c;
  
  setTimeout(() => {
    savepic.download = "coding";
  }, 50);
}
