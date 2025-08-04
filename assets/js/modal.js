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
  toggleBtns = [];

  constructor() {
    this.#initializeElements();
  }

  #initializeElements() {
    const modal = document.createElement("div");
    const modalItem = document.createElement("div");
    const modalHeader = document.createElement("div");
    const modalContents = document.createElement("div");
    const closeBtn = document.createElement("button");
    const closeImg = new Image();
    closeImg.src = "../assets/images/ico-close.svg";

    modal.classList.add("modal-wrap");
    modalItem.classList.add("modal-item");
    modalHeader.classList.add("modal-header");
    modalContents.classList.add("modal-contents-wrap");
    closeBtn.classList.add("close-btn");

    closeBtn.appendChild(closeImg);
    modalHeader.innerHTML = `Project Detail`;
    modalHeader.appendChild(closeBtn);

    modalItem.appendChild(modalHeader);
    modalItem.appendChild(modalContents);
    modal.appendChild(modalItem);

    this.modalContainer = modal;
    this.contentsWrap = modalContents;

    closeBtn.addEventListener("click", () => {
      this.close();
    });
  }

  #renderElement() {
    document.body.insertAdjacentElement("beforeend", this.modalContainer);
    this.modalContainer.setAttribute("tabindex", "0");
    SCROLL_CONTROL.lock();
    this.#setToggleBtnsEvent();
  }

  #removeElement() {
    this.modalContainer.remove();
    this.contentsWrap.innerHTML = "";
    SCROLL_CONTROL.unlock();
  }

  #setToggleBtnsEvent() {
    this.toggleBtns.map((btn) => {
      const toggleItemHeight = btn.nextElementSibling
        .querySelector(".modal-contents-toggle-item")
        .getBoundingClientRect().height;

      btn.parentElement.style.setProperty(
        "--toggle-height",
        `${toggleItemHeight}px`
      );

      btn.addEventListener("click", (e) => {
        e.target.classList.toggle("active");
      });
    });
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

  setContents(info) {
    const item = document.createElement("div");
    const toggleBtn = document.createElement("button");
    const toggleText = document.createElement("div");
    const toggleTextItem = document.createElement("div");
    const toggleArrow = document.createElement("span");

    item.classList.add("modal-contents-item");
    toggleBtn.classList.add("modal-contents-name");
    toggleText.classList.add("modal-contents-toggle");
    toggleTextItem.classList.add("modal-contents-toggle-item");
    toggleArrow.classList.add("toggle-icon");

    const toggleArrowImg = new Image();
    toggleArrowImg.src = "../assets/images/ico-arrow.svg";
    toggleArrow.appendChild(toggleArrowImg);

    toggleTextItem.innerHTML = `
                <div>
                  <h4 class="project-sub-title">[프로젝트 개요]</h4>
                  <div class="project-text">
                    ${info.info}
                  </div>
                </div>
                <div>
                  <h4 class="project-sub-title">[주요 역할 및 기여]</h4>
                  <div class="project-text">
                    ${info.contribution}
                  </div>
                </div>
                <div>
                  <h4 class="project-sub-title">[활용 기술]</h4>
                  <div class="project-text">
                    ${info.skills.join(", ")}
                  </div>
                </div>
                <a class="btn project-link-btn" href="${info.link}">View</a>

    `;

    toggleBtn.innerHTML = `<span>${info.title}</span>`;
    toggleBtn.appendChild(toggleArrow);

    toggleText.appendChild(toggleTextItem);

    item.appendChild(toggleBtn);
    item.appendChild(toggleText);

    this.contentsWrap.appendChild(item);
    this.toggleBtns.push(toggleBtn);
  }
}
