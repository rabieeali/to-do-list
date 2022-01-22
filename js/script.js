let list = document.querySelector("#to-do-list");
let searchInput = document.querySelector(".search-form input");
let addInput = document.querySelector(".add-form input");
let addBtn = document.querySelector(".add-form button");

list.addEventListener("click", (e) => {
  if (e.target.id === "delete-btn") {
    e.target.parentNode.remove();
    if (list.children.length === 0) {
      let listEmptyMsg = document.createElement("div");
      listEmptyMsg.innerText = "You Have No To-Dos!"
      listEmptyMsg.classList.add(
        "text-danger",
        "fw-bold",
        "fs-4",
        "text-capitalize",
        "text-center"
      );
      listEmptyMsg.id = "emptyMsg";
      list.appendChild(listEmptyMsg);
    }
  }
});

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!addInput.value) {
    return;
  } else if (document.querySelector("#emptyMsg")) {
    document.querySelector("#emptyMsg").remove();
  }
  list.append(createListItem(addInput.value));
  addInput.value = ""
});

function createListItem(itemValue) {
  let item = document.createElement("div");

  let title = document.createElement("span");
  let btn = document.createElement("button");

  item.appendChild(title);
  item.appendChild(btn);

  item.classList.add("rounded-3", "shadow", "p-2" ,"my-3");

  title.classList.add("fs-4", "text-secondary" ,"text-capitalize");
  title.innerText = itemValue;

  btn.classList.add("btn", "btn-danger", "float-end");
  btn.innerText = "Delete";
  btn.id = "delete-btn";
  return item;
}
