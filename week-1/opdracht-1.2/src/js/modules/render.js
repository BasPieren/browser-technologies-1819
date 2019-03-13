import * as helper from './helper.js'

function homePage() {
  const domElement = helper.domElements(),
        countryFlags = [{src:'src/images/flag_of_the_netherlands.svg', alt: 'Nederlandse vlag', caption: 'Nederlands'},
                        {src:'src/images/flag_of_the_united_kingdom.svg', alt: 'Verenigd Koninkrijk vlag', caption: 'English'},
                        {src:'src/images/flag_of_the_arabic_language.svg', alt: 'Arabische vlag', caption: 'عربى'}]

  helper.removeMain()

  domElement.h3.textContent = 'Kies een taal:'
  domElement.p.textContent = `Wil je Nederlands leren? Of wil je leren om beter te kunnen werken met
                              de computer? Of hoe je beter met je geld omgaat? Kom naar de Openbare Bibliotheek
                              Amsterdam (OBA)  en ga aan de slag. Meedoen
                              is gratis.`
  domElement.a.textContent = 'naar de volgende pagina'
  domElement.a.href = '#leren'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.p)
  domElement.main.appendChild(domElement.h3)

  countryFlags.forEach(image => {
    const domElement = helper.domElements()

    domElement.img.src = image.src
    domElement.img.alt = image.alt
    domElement.img.className = 'oba-flag'
    domElement.figureCaption.textContent = image.caption

    domElement.mainS.appendChild(domElement.figure)
    domElement.figure.appendChild(domElement.img)
    domElement.figure.appendChild(domElement.figureCaption)
  })

  domElement.main.appendChild(domElement.a)
}

function choosePage() {
  const domElement = helper.domElements(),
        categories = [{icon:'src/images/language.svg', text: 'Ik heb hulp nodig met de Nederlandse taal.', src:'#taal'},
                      {icon:'src/images/computer.svg', text: 'Ik heb hulp nodig met mijn computer, smartphone of tablet.', src:'#computer'},
                      {icon:'src/images/math.svg', text: 'Ik heb hulp nodig met mijn financiën.', src:'#financien'},
                      {icon:'src/images/integration.svg', text: 'Ik heb hulp nodig met mijn inburgeringsexamen of staatsexamen.', src:'#inburgering'}]

  helper.removeMain()

  domElement.h3.textContent = 'Waar heb je hulp mee nodig?'
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = '#leren-bij-de-oba'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)

  categories.forEach(categorie => {
    const domElement = helper.domElements()

    domElement.h3.textContent = categorie.text
    domElement.a.textContent = 'kies'
    domElement.a.href = categorie.src
    domElement.a.className = 'oba-main-button'
    domElement.img.src = categorie.icon
    domElement.img.className = 'oba-categorie-icon'

    domElement.mainS.appendChild(domElement.article)
    domElement.article.appendChild(domElement.img)
    domElement.article.appendChild(domElement.h3)
    domElement.article.appendChild(domElement.a)
  })
}

function languagePage() {
  const domElement = helper.domElements(),
        courses = [{title:'Taalcafé', description: 'Wil je graag beter Nederlands spreken? Kom dan naar het Taalcafé. Praat met andere mensen, speel een spelletje en verbeter direct je Nederlands.', href:'#agenda', src:'src/images/taalcafe.jpeg'},
                   {title:'Meeleesclub', description: 'Beter Nederlands leren lezen? Kom naar de Meeleesclub! Wij lezen voor uit makkelijke boeken met mooie verhalen en jij leest mee. Daarna praten we samen over het verhaal.', href:'#agenda', src:'src/images/meeleesclub.jpeg'},
                   {title:'Nt2-uur', description: 'Heb je vragen over de Nederlandse taal, het Inburgeringsexamen of het Staatsexamen? Onze Nt2 docent geeft advies en informatie. Of ga zelf aan de slag.', href:'#agenda', src:'src/images/nt2-uur.jpeg'},
                   {title:'Taalconsulent', description: 'Wil je de Nederlandse taal leren? De Taalconsulent geeft je advies en hulp bij het vinden van de juiste (gratis) taalcursus.', href:'#agenda', src:'src/images/taalconsulent.jpeg'}]

  let sStorage = sessionStorage.getItem('data2'),
      parseData = JSON.parse(sStorage)

  helper.removeMain()

  domElement.h3.textContent = 'Taal'
  domElement.p.textContent = 'Kies een cursus'
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = '#leren'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)
  domElement.main.appendChild(domElement.p)

  helper.renderCourses(domElement.main, courses)

  domElement.main.appendChild(domElement.section)

  parseData.forEach(book => {
    const domElement = helper.domElements()

    domElement.h3.textContent = book.title
    domElement.p.textContent = book.summaries
    domElement.img.src = book.cover_image

    domElement.sectionS.appendChild(domElement.article)
    domElement.article.appendChild(domElement.img)
    domElement.article.appendChild(domElement.h3)
    domElement.article.appendChild(domElement.p)
  })
}

function computerPage() {
  const domElement = helper.domElements(),
        courses = [{title:'Computer hulp', description: 'Heb je nog weinig ervaring met de computer of internet?  Kom naar de OBA leer stap voor stap en in je eigen tempo om beter te kunnen werken met je computer.', href:'#agenda', src:'src/images/computer-hulp.jpeg'},
                   {title:'Oefenuur', description: 'Kom naar het oefenuur bij de OBA en oefen met typen, e-mailen en internet. De begeleider is er om antwoord te geven op al je vragen.', href:'#agenda', src:'src/images/oefenuur.jpeg'},
                   {title:'Tabletcafé', description: 'Heb je een iPad of tablet? En heb je hulp nodig? Kom dan naar het Tabletcafé! Hier vind je ook informatie over E-books.', href:'#agenda', src:'src/images/tabletcafe.jpeg'},
                   {title:'DigiD cursus', description: 'Leer hoe je een DigiD aanvraagt en gebruikt. Met een DigiD kun je inloggen op websites van de overheid en in de zorg.', href:'#agenda', src:'src/images/digid-cursus.jpeg'},
                   {title:'Social media en internet', description: 'Kom naar het spreekuur over digitale media en internet en krijg antwoord op vragen als hoe gebruik ik Facebook en hoe kan ik skypen met familie en nog veel meer.', href:'#agenda', src:'src/images/social-media-en-internet.jpeg'}]

  helper.removeMain()

  domElement.h3.textContent = 'Computer'
  domElement.p.textContent = 'Kies een cursus'
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = '#leren'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)
  domElement.main.appendChild(domElement.p)

  helper.renderCourses(domElement.main, courses)
}

function financePage() {
  const domElement = helper.domElements(),
        courses = [{title:'Grip op je geld', description: 'Hulp nodig bij je financiën? Kom naar het wekelijkse financiële spreekuur en ontvang gratis budgetadvies en hulp bij jouw financiële zaken.', href:'#agenda', src:'src/images/grip-op-je-geld.jpeg'},
                   {title:'Financiële hulp', description: 'Hulp nodig met financiën? Wil je weten hoeveel geld er binnen komt? Wil je leren internetbankieren? Maak een afspraak voor een-op-een hulp.', href:'#agenda', src:'src/images/financiele-hulp.jpeg'},
                   {title:'Belastingdag 2019', description: 'Moeite met de belastingaangifte? Kom naar de OBA Belastingdag en krijg gratis advies en hulp van studenten van de Hogeschool van Amsterdam.', href:'#agenda', src:'src/images/belastingdag-2019.jpeg'},
                   {title:'Oefenuur', description: 'Kom naar het oefenuur voor meer inzicht in je inkomsten en uitgaven. Oefen op de computer met rekenen en leer hoe je geld bespaart. Stel vragen aan de begeleider.', href:'#agenda', src:'src/images/oefenuur-2.jpeg'}]

  helper.removeMain()

  domElement.h3.textContent = 'Financiën'
  domElement.p.textContent = 'Kies een cursus'
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = '#leren'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)
  domElement.main.appendChild(domElement.p)

  helper.renderCourses(domElement.main, courses)
}

function integrationPage() {
  const domElement = helper.domElements(),
        courses = [{title:'Inburgeringsexamen', description: 'Binnenkort inburgeringsexamen? Kom naar de OBA en oefen gratis met examens op de computer. Wij helpen je, als dat nodig is.', href:'#agenda', src:'src/images/inburgeringsexamen.jpeg'},
                   {title:'Staatsexamen Nt2', description: 'Binnenkort Staatsexamen? Kom naar de OBA en oefen gratis met examens op de computer. Wij helpen je, als dat nodig is.', href:'#agenda', src:'src/images/staatsexamen.jpeg'}]

  helper.removeMain()

  domElement.h3.textContent = 'Integratie'
  domElement.p.textContent = 'Kies een cursus'
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = '#leren'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)
  domElement.main.appendChild(domElement.p)

  helper.renderCourses(domElement.main, courses)
}

function agendaPage() {
  const domElement = helper.domElements()

  let sStorage = sessionStorage.getItem('data'),
      parseData = JSON.parse(sStorage)

  helper.removeMain()

  domElement.h3.textContent = 'Agenda'
  domElement.p.textContent = 'Kies een item'
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = 'javascript:history.back()'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)
  domElement.main.appendChild(domElement.p)

  parseData.forEach(book => {
    const domElement = helper.domElements()

    domElement.h3.textContent = book.title
    domElement.p.textContent = book.summaries
    domElement.a.textContent = 'details'
    domElement.a.href = '#agenda-detail'
    domElement.a.className = 'oba-main-button'
    domElement.img.src = book.cover_image

    domElement.mainS.appendChild(domElement.article)
    domElement.article.appendChild(domElement.img)
    domElement.article.appendChild(domElement.h3)
    domElement.article.appendChild(domElement.p)
    domElement.article.appendChild(domElement.a)
  })
}

function agendaDetailPage() {
  const domElement = helper.domElements()

  let sStorage = sessionStorage.getItem('data'),
      parseData = JSON.parse(sStorage)

  helper.removeMain()

  domElement.h3.textContent = parseData[0].title
  domElement.p.textContent = parseData[0].summaries
  domElement.a.textContent = 'terug naar de vorige pagina'
  domElement.a.href = 'javascript:history.back()'
  domElement.a.className = 'oba-main-button'

  domElement.bodyS.appendChild(domElement.main)
  domElement.main.appendChild(domElement.a)
  domElement.main.appendChild(domElement.h3)
  domElement.main.appendChild(domElement.p)
}

export { homePage, choosePage, languagePage, computerPage, financePage, integrationPage, agendaPage, agendaDetailPage }
