const form = document.querySelector("form");
const firstname = document.querySelector(".name");
const surname = document.querySelector(".surname");
const pesel = document.querySelector(".pesel");
const personaldata = document.querySelector(".personaldata");

const dateofbith = (pesel) => {
  const year = pesel.value.slice(0, 2);
  const month = pesel.value.slice(2, 4);
  const day = pesel.value.slice(4, 6);
  if (month < 13) {
    const date = new Date(19 + year, month - 1, day);
    console.log(date);
    return date;
  } else {
    const date = new Date(20 + year, month - 21, day);
    console.log(date);
    return date;
  }
};
const validator = (firstname, surname, pesel, personaldata) => {
  const h2 = document.createElement("h2");
  if (firstname.value.length > 30) {
    h2.innerText = "za długie imie";
  } else if (firstname.value.length < 2) {
    h2.innerText = "za krótkie imie";
  } else if (surname.value.length > 20) {
    h2.innerText = "za długie nazwisko";
  } else if (surname.value.length < 2) {
    h2.innerText = "za krótkie nazwisko";
  } else if (parseInt(pesel.value.length) > 11) {
    h2.innerText = "za długi pesel";
  } else if (parseInt(pesel.value.length) < 11) {
    h2.innerText = "za krótki pesel";
  } else {
    dateofbith(pesel);
    h2.innerText = `imię : ${firstname.value}, nazwisko : ${surname.value}, PESEL: ${pesel.value}`;
    const modal = document.getElementById("modal");
    const span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  personaldata.append(h2);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validator(firstname, surname, pesel, personaldata);
});
