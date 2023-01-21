const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", (e) => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  if (!nlwSetup.dayExists(today)) {
    alert("Dia adicionado ✅")
    nlwSetup.addDay(today)
  } else {
    alert("Dia já incluso ❌")
    return
  }
})

form.addEventListener("change", (e) => {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
})

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()
