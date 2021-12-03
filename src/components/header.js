


const Header = (title, date, temp) => {

  const header = document.createElement('div')
  const datePart  = document.createElement('span')
  const tempPart = document.createElement('span')
  const titlePart = document.createElement('h1')

  header.appendChild(datePart)
  header.appendChild(tempPart)
  header.appendChild(titlePart)

  header.classList.add('header')
  datePart.classList.add('date')
  tempPart.classList.add('temp')

  datePart.textContent = `${date}`
  titlePart.textContent = `${title}`
  tempPart.textContent = `${temp}`
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  return header;
  
};

const headerAppender = (selector) => {



  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

headerAppender('.header-container');

export { Header, headerAppender }
