let button = document.querySelector("button");
let para = document.querySelector("p");
let erros = document.querySelector(".error");
console.log(para);
let num = 0
let quotes = []
console.log(quotes);
fetch("https://type.fit/api/quotes")
      .then(response => {
            return response.json()
      })
      .then(data => {
            quotes = data
      })
      .catch(error => {
          erros.innerHTML = `Can't Fetch Data please try again`
      })
button.addEventListener('click', () => {
      num++
      para.innerText = quotes[num].text
})