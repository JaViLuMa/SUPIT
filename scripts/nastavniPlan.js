var Kolegiji = [];
var labela = [];
var Kolegiji_u_tablici = [];

$("#tablica").hide();

function Prikaz_Tablice() {
  $("#tablica").show();
}

$.get("http://www.fulek.com/VUA/SUPIT/GetNastavniPlan").done((data) =>
  data.forEach(function (name) {
    Kolegiji.push(name);
    labela.push(name.label);
  })
);

console.log(Kolegiji);

$(function () {
  $("#pretraga").autocomplete({
    source: labela,
    select: function (event, label) {
      var url = "http://www.fulek.com/VUA/supit/GetKolegij/";
      var vrijednost;

      Kolegiji.forEach((element) => {
        if (element.label == label.item.label) {
          vrijednost = element.value;
          console.log(element);
        }
      });

      var kolegij;

      $.ajax({
        async: false,
        url: url + vrijednost,
        dataType: "JSON",
        success: function (json) {
          kolegij = json;
          console.log(kolegij);
        },
      });

      Prikaz_Tablice();
      Kolegiji_u_tablici.push(kolegij);

      var tablica = document.getElementById("tablica");
      var redak = tablica.insertRow(Kolegiji_u_tablici.length);
      var celija1 = redak.insertCell(0);
      var celija2 = redak.insertCell(1);
      var celija3 = redak.insertCell(2);
      var celija4 = redak.insertCell(3);
      var celija5 = redak.insertCell(4);
      var celija6 = redak.insertCell(5);
      var celija7 = redak.insertCell(6);

      var btn = document.createElement("button");

      btn.setAttribute("value", "Obrisi");
      btn.setAttribute("id", kolegij.kolegij + "Button");
      btn.setAttribute("class", "Brisi_button");

      btn.innerHTML = "Obrisi";

      celija1.innerHTML = kolegij.kolegij;
      celija2.innerHTML = kolegij.ects;
      celija3.innerHTML = kolegij.sati;
      celija4.innerHTML = kolegij.predavanja;
      celija5.innerHTML = kolegij.vjezbe;
      celija6.innerHTML = kolegij.tip;
      celija7.appendChild(btn);

      Zbrojivrijednosti();
      ObrisiKolegij(btn, kolegij);
    },
  });
});

function Zbrojivrijednosti() {
  var Ukupno_ects = document.getElementById("ects");
  var Ukupno_sati = document.getElementById("sati");

  let zbroj_ects = 0;
  let zbroj_sati = 0;

  Kolegiji_u_tablici.forEach((element) => {
    zbroj_ects += element.ects;
    zbroj_sati += element.sati;
  });

  Ukupno_ects.innerHTML = zbroj_ects;
  Ukupno_sati.innerHTML = zbroj_sati;

  if (zbroj_sati == 0) {
    $("#tablica").hide();
  }
}

function ObrisiKolegij(button, kolegij) {
  $(button).click(function () {
    $(this).closest("tr").remove();
    for (var i = 0; i < Kolegiji_u_tablici.length; i++) {
      if (Kolegiji_u_tablici[i] == kolegij) {
        Kolegiji_u_tablici.splice(i, 1);
      }
    }

    Zbrojivrijednosti();
  });
}
