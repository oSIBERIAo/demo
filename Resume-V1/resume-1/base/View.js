window.View = function (selector) {
  return {
    element: document.querySelector(selector),
    allElement: document.querySelectorAll(selector)
  }
}
