var students = [
  {
    lname: "Portilla",
    name: "Francisco Emanuel",
    age: 26,
    birthday: {
      year: 1995,
      month: "November",
      day: 16
    },
    Career: "IDYGS"
  },
  {
    lname: "Salazar",
    name: "Emanuel",
    age: 27,
    birthday: {
      year: 1994,
      month: "November",
      day: 16
    },
    Career: "IDYGS"
  },
  {
    lname: "Reyes",
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