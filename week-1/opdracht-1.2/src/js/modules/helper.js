function removeMain() {
  const bodySelector = document.querySelector('body'),
        mainSelector = document.querySelector('main')

  if (bodySelector.contains(mainSelector) === true) {
    mainSelector.remove()
  }
}

function domElements() {
  const obj = {
    bodyS: document.querySelector('body'),
    main: document.createElement('main'),
    mainS: document.querySelector('main'),
    section: document.createElement('section'),
    sectionS: document.querySelector('section'),
    article: document.createElement('article'),
    div: document.createElement('div'),
    h1: document.createElement('h1'),
    h2: document.createElement('h2'),
    h3: document.createElement('h3'),
    h4: document.createElement('h4'),
    h5: document.createElement('h5'),
    h6: document.createElement('h6'),
    p: document.createElement('p'),
    a: document.createElement('a'),
    img: document.createElement('img'),
    form: document.createElement('form'),
    select: document.createElement('select'),
    button: document.createElement('button'),
    figure: document.createElement('figure'),
    figureCaption: document.createElement('figcaption')
  }

  return obj
}

function renderCourses(main, courses) {
  courses.forEach(course => {
    const article = document.createElement('article'),
          h3 = document.createElement('h3'),
          p = document.createElement('p'),
          a = document.createElement('a'),
          img = document.createElement('img')

    article.className = 'oba-cursus-article'
    h3.textContent = course.title
    p.textContent = course.description
    a.textContent = 'naar agenda'
    a.href = course.href
    a.className = 'oba-main-button'
    img.src = course.src


    main.appendChild(article)
    article.appendChild(img)
    article.appendChild(h3)
    article.appendChild(p)
    article.appendChild(a)
  })
}

export { removeMain, domElements, renderCourses }
