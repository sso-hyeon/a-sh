const modal = new Modal();

window.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  setCareerList();

  const modalBtn = document.querySelectorAll(".desc-btn");
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      setModalContents(e.target.dataset.projectName);
      modal.open();
    });
  });
}

function setModalContents(projectName) {
  const info = descriptionInfo.find((val) => val.name === projectName).projects;

  info.map((val) => {
    modal.setContents(val);
  });
}

function setCareerList() {
  const careerSection = document.querySelector(
    ".career-container .contents-section"
  );
  const sideSection = document.querySelector(
    ".side-container .contents-section"
  );

  careerList.map((list) => {
    const item = document.createElement("div");
    const itemThumb = document.createElement("div");
    const itemText = document.createElement("div");
    const thumbnail = new Image();

    thumbnail.src = "../assets/images/career/" + list.projectName + ".png";
    thumbnail.alt = list.title;

    item.classList.add("contents-item");
    itemThumb.classList.add("img-box");
    itemText.classList.add("txt-box");

    itemText.innerHTML = `
    <div class="title_wrap">
      <h2 class="title">${list.title}</h2>
      <h3 class="sub_title">${list.subTitle}</h3>
    </div>
    <ul class="tag">
      ${list.tag
        .map((val) => {
          return `<li>#${val}</li>`;
        })
        .join("")}
    </ul>
    <ul class="skill">
      <li><strong>Tools :</strong> ${list.skills.join(", ")}</li>
      <li><strong>Contribution :</strong> ${list.contribution} project</li>
    </ul>
    <div class="btn_wrap">
      <button class="btn desc-btn" data-project-name=${list.projectName}>
        MORE
      </button>
    </div>
    `;

    itemThumb.appendChild(thumbnail);

    item.appendChild(itemThumb);
    item.appendChild(itemText);

    switch (list.type) {
      case "career":
        careerSection.appendChild(item);
        break;
      case "side":
        sideSection.appendChild(item);
        break;
      default:
        break;
    }
  });
}
