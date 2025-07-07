import { SCROLL_CONTROL } from "./utils.js";

class Modal {
  // _ protected
  // 현재 클래스와 상속받은 클래스에서만 접근 가능
  // # private
  // 현재 클래스 내부에서만 접근 가능

  _elements = {};
  callback = {
    confirm: () => {},
    cancel: () => {},
  };
  modalContainer = undefined;
  contentsWrap = undefined;
  btnWrap = undefined;

  constructor() {
    this.#initializeElements();
  }

  #initializeElements() {
    const modal = document.createElement("div");
    const modalItem = document.createElement("div");
    const modalContents = document.createElement("div");
    const btnWrap = document.createElement("div");

    modal.classList.add("modal-wrap");
    modalItem.classList.add("modal-item");
    modalContents.classList.add("modal-contents-wrap");
    btnWrap.classList.add("modal-btns-wrap");

    modalItem.appendChild(modalContents);
    modalItem.appendChild(btnWrap);
    modal.appendChild(modalItem);

    this.modalContainer = modal;
    this.contentsWrap = modalContents;
    this.btnWrap = btnWrap;
  }

  #renderElement() {
    document.body.insertAdjacentElement("beforeend", this.modalContainer);
    this.modalContainer.setAttribute("tabindex", "0");
    SCROLL_CONTROL.lock();
  }

  #removeElement() {
    this.modalContainer.remove();
    SCROLL_CONTROL.unlock();
  }

  getElements() {
    return this._elements;
  }

  onConfirm(callback) {
    if (typeof callback === "function") {
      this.callback.confirm = callback;
    }
  }

  onCancel(callback) {
    if (typeof callback === "function") {
      this.callback.cancel = callback;
    }
  }

  open() {
    this.#renderElement();
  }

  close() {
    this.#removeElement();
  }

  confirm() {
    this.callback.confirm();
  }

  cancel() {
    this.callback.cancel();
  }

  setButtons(buttons) {
    buttons.map((button) => {
      const btn = document.createElement("button");
      btn.innerHTML = button.name;
      btn.classList.add("modal-btn");
      if (button.className) {
        btn.classList.add(button.className);
      }
      this.btnWrap.appendChild(btn);

      btn.addEventListener("click", button.clickfun);
    });
  }
}
