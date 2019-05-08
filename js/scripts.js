$(document).ready(function () {

  const $projectsContainer = $(".projects-container");
  const $projectButtons = $(".learn-btn");


  //displays Project modal
  renderCard = (object) => {
    const photos = object.img_urls;
    let photoNum = 0;
    const liveDemo = (object.live_link)
      ? `<a href=${object.live_link} target="_blank"><button class="learn-btn">live demo</button></a>`
      : '';
    const card = `<div class="card-container">
    <div class="card">
      <div class="card-img-container">
        <img class="card-img" src=${photos[photoNum]}>
        <a class="card-close"></a>
        <a class="prev">&#10094;</a>
        <a class="next">&#10095;</a>
      </div>
      <div class="card-text">
        <h1>${object.project_name}</h1>
        <p>${object.description}</p>
        <div class="card-links">
          <a href=${object.github_link} target="_blank"><button class="learn-btn">view repo</button></a>
          ${liveDemo}
        </div>
      </div>
    </div>`
    $projectsContainer.append(card);
    //add click listener to card close button
    $(".card-close").click(() => {
      $("body").css("overflow-y", "scroll");
      $(".card-container").remove();
    });
    //add click lstener to next button that changes the image in the card
    $(".next").click(() => {
      if (photoNum < (photos.length - 1)) {
        $(".card-img-container img").remove();
        photoNum += 1;
        $(".card-img-container").append(`<img class="card-img" src=${photos[photoNum]}></img>`)
      }
    });
    //add click lstener to next button that changes the image in the card
    $(".prev").click(() => {
      if (photoNum > 0) {
        $(".card-img-container img").remove();
        photoNum -= 1;
        $(".card-img-container").append(`<img class="card-img" src=${photos[photoNum]}></img>`)
      }
    });
  }

  //adds click listener to learn more button on each project div
  for (let i = 0; i < $projectButtons.length; i++) {
    $projectButtons[i].addEventListener("click", () => {
      $("body").css("overflow", "hidden");
      renderCard(projects[i]);
    });
  }

});
