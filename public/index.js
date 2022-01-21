var students = [
  {
    lname: "Padron Gomez",
    name: "Jose Enrique",
    age: 21,
    birthday: {
      year: 2000,
      month: "September",
      day: 16
    },
    Career: "IDYGS"
  },
  {
    lname: "Salazar",
    name: "Edgar",
    age: 21,
    birthday: {
      year: 2000,
      month: "April",
      day: 30
    },
    Career: "IDYGS"
  },
  {
    lname: "Luis",
    name: "Celso",
    age: 21,
    birthday: {
      year: 2000,
      month: "April",
      day: 26
    },
    Career: "IDYGS"
  }
]

var table = document.getElementsByTagName("table")[0];
for (var i = 0; i < students.length; i++) {
  var templ = document.getElementById("tbodytempl").content.cloneNode(true);
  var tdnumber = templ.querySelector("span[name='tbodynumber']");
  var tdname = templ.querySelector("span[name='tbodyname']");
  var tdage = templ.querySelector("span[name='tbodyage']");
  var tdcareer = templ.querySelector("span[name='tbodycareer']");

  tdnumber.innerText = i + 1;
  tdname.innerText = students[i].lname + " " + students[i].name;
  tdage.innerText = students[i].age;
  tdcareer.innerText = students[i].Career;

  table.append(templ);
}