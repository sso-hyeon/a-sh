const SCROLL_CONTROL = {
  history: [],
  lock(currentElement) {
    this.history.push(this.history.length + 1);
    scrollLock(currentElement);
  },
  unlock(currentElement) {
    this.history.pop();
    if (this.history.length === 0) {
      scrollUnlock(currentElement);
    }
  },
};

// 스크롤 잠금
function scrollLock(currentElement) {
  disableElements(currentElement);
  document.body.classList.add("scroll-lock");
  document.body.style.pointerEvents = "none";
}

// 스크롤 잠금 해제
function scrollUnlock(currentElement) {
  enableElements(currentElement);
  document.body.classList.remove("scroll-lock");
  document.body.removeAttribute("style");
}

// 선택 요소와 팝업 요소를 제외한 나머지 요소 비활성화
function disableElements(currentElement) {
  for (const element of document.body.children) {
    if (
      currentElement === element ||
      element.id === "popup-wrap" ||
      element.id === "form-wrap" ||
      element.classList.contains("popup-wrap") ||
      element.classList.contains("form-wrap") ||
      element.classList.contains("modal-wrap") ||
      element.tagName === "SCRIPT"
    )
      continue;
    element.setAttribute("data-aria-hidden", "true");
    element.setAttribute("aria-hidden", "true");
  }
}

// 요소 활성화
function enableElements() {
  for (const element of document.body.children) {
    element.removeAttribute("data-aria-hidden");
    element.removeAttribute("aria-hidden");
  }
}

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}
