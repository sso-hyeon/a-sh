const modalBtn = document.querySelectorAll(".desc-btn");
const modalWrap = document.querySelector(".modal-wrap");

const modal = new Modal();

modalBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    setModalContents(e.target.dataset.projectName);
    modal.open();
  });
});

function setModalContents(projectName) {
  const info = descriptionInfo.find((val) => val.name === projectName).projects;

  info.map((val) => {
    modal.setContents(val);
  });
}
