AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "Captain-Aero",
        url: "./assets/thumbnails/captain-aero-poster.jpg",
      },
      {
        id: "Outer-Space",
        url: "./assets/thumbnails/outer-space-poster.jpg",
      },
      {
        id: "Spiderman",
        url: "./assets/thumbnails/spiderman-poster.jpg",
      },
      {
        id: "Superman",
        url: "./assets/thumbnails/superman-poster.png",
      },
    ];
    let previousXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = previousXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      previousXPosition = posX;

      // Create Border Element
      const borderEl = this.createBorder(position, item.id);

      // Create Thumbnail Element
      const thumbnailEl = this.createThumbnail(item);
      borderEl.appendChild(thumbnailEl);

      // Append Border Element to places container
      this.placesContainer.appendChild(borderEl);
    }
  },

  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 23,
      height: 40,
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {
      color: "white",
      opacity: 0.4,
    });
    return entityEl;
  },

  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      width: 20,
      height: 28,
    });
    entityEl.setAttribute("material", {
      src: item.url,
    });
    return entityEl;
  },
});
