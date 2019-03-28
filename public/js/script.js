(() => {

  const form = document.querySelector('form')

  if (form) {
    form.onsubmit = saveToLocalStorage
  }

  function saveToLocalStorage() {
    const radioButtons = document.getElementsByName('kleur'),
          input = document.getElementById('bt-text')

    radioButtons.forEach( x => {
        if ( x.checked === true ) {
          console.log(x)
          localStorage.setItem('color', JSON.stringify(x.value))
        }
    })

    localStorage.setItem('text', JSON.stringify(input.value))
  }

  function getLocalStorageData() {
    const svg = document.getElementsByClassName('fff611fd-d11e-429f-bd57-f749dd6baa13'),
          input = document.getElementById('bt-text')

    let color = localStorage.getItem('color'),
        text = localStorage.getItem('text')

    svg[0].style.fill = JSON.parse(color)
    input.value = JSON.parse(text)
  }

  getLocalStorageData()

})()
