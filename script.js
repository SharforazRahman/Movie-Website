let left_buttonn = document.getElementsByClassName(
  "bi bi-chevron-double-left"
)[0];
let right_buttonn = document.getElementsByClassName(
  "bi bi-chevron-double-right"
)[0];
let cards = document.getElementsByClassName("cards")[0];
const urlJson = "movie.json";
let search = document.getElementsByClassName("search")[0];

left_buttonn.addEventListener("click", () => {
  cards.scrollLeft -= 140;
});

right_buttonn.addEventListener("click", () => {
  cards.scrollLeft += 140;
});

//Fetching Data
fetch(urlJson)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e, i) => {
      let { name, imdb, date, sposter, bposter, genre, type, url, trailer } = e;

      //working on the popular section
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
      <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMDB</span
                  ><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
              </div>
            </div>`;

      cards.appendChild(card);
    });

    //working on the contenct section
    let title = document.getElementById("title");
    let gen = document.getElementById("gen");
    let date = document.getElementById("date");
    let rate = document.getElementById("rate");

    title.innerText = data[0].name;
    gen.innerText = data[0].genre;
    date.innerText = data[0].date;
    rate.innerHTML = `<span>IMDB</span
                  ><i class="bi bi-star-fill"></i>${data[0].imdb}`;

    //Search data
    data.forEach((e) => {
      let { name, imdb, date, sposter, bposter, genre, type, url, trailer } = e;
      let card = document.createElement("a");
      card.classList.add("card");
      card.href = url;
      card.innerHTML = `
      <img src="${sposter}" alt="${name}" />
              <div class="cont">
                <h3>${name}</h3>
                <p>
                  ${genre}, ${date} <span>IMDB</span
                  ><i class="bi bi-star-fill"></i>${imdb}
                </p>
              </div>`;
      search.appendChild(card);
    });

    //search the exact one
    let search_input = document.getElementById("search_input");

    search_input.addEventListener("keyup", () => {
      let selected = search_input.value.toUpperCase();
      let anchor = search.getElementsByTagName("a");

      for (let i = 0; i < anchor.length; i++) {
        let store = anchor[i].getElementsByClassName("cont")[0];

        let textValue = store.textContent || store.innerText;

        if (textValue.toUpperCase().indexOf(selected) > -1) {
          anchor[i].style.display = "flex";
          search.style.visiblity = "visible";
          search.style.opacity = 1;
        } else {
          anchor[i].style.display = "none";
        }
        if (search_input.value == 0) {
          search.style.visiblity = "hidden";
          search.style.opacity = 0;
        }
      }
    });

    // Working on series section;

    let series = document.getElementById("series");
    series.addEventListener("click", () => {
      cards.innerHTML = "";

      let s_a = data.filter((e) => {
        return e.type === "series";
      });

      s_a.forEach((e, i) => {
        let { name, imdb, date, sposter, bposter, genre, type, url } = e;

        //working on the popular section
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = url;
        card.innerHTML = `
      <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMDB</span
                  ><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
              </div>
            </div>`;

        cards.appendChild(card);
      });
    });

    // Working on movie section;

    let movie = document.getElementById("movie");
    movie.addEventListener("click", () => {
      cards.innerHTML = "";

      let m_a = data.filter((e) => {
        return e.type === "movie";
      });

      m_a.forEach((e, i) => {
        let { name, imdb, date, sposter, bposter, genre, type, url } = e;

        //working on the popular section
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = url;
        card.innerHTML = `
      <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
              <img src="${bposter}" alt="">
              <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                  <p>${genre}, ${date}</p>
                  <h3><span>IMDB</span
                  ><i class="bi bi-star-fill"></i>${imdb}</h3>
                </div>
              </div>
            </div>`;

        cards.appendChild(card);
      });
    });
  });
