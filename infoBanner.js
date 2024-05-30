AFRAME.registerComponent('info-banner', {
  schema: {
      selectedItemId: {type: 'string', default: ''}
  },

  init: function () {
      this.createBanner();
      this.update = this.update.bind(this);
  },

  update: function () {
      this.handleMouseClickEvents();
  },

  handleMouseClickEvents: function () {
      const thumbnails = document.querySelectorAll('.thumbnail');
      const self = this;

      thumbnails.forEach(thumbnail => {
          thumbnail.addEventListener('click', function () {
              const thumbnailId = this.getAttribute('data-id');
              self.data.selectedItemId = thumbnailId;
              self.updateInfoBanner();
          });
      });
  },

  updateInfoBanner: function () {
      const comicsData = this.getComicsDataById(this.data.selectedItemId);
      const titleEl = this.createTitle(comicsData.title);
      const descriptionEl = this.createDescription(comicsData.description);
      const imageEl = this.createImage(comicsData.image);

      // Update the info banner entity with new elements
      const infoBannerEl = document.querySelector('#infoBanner');
      infoBannerEl.innerHTML = '';
      infoBannerEl.appendChild(titleEl);
      infoBannerEl.appendChild(descriptionEl);
      infoBannerEl.appendChild(imageEl);
  },

  createBanner: function () {
      // Create banner elements
  },

  createTitle: function (titleText) {
      // Create title element
  },

  createDescription: function (descriptionText) {
      // Create description element
  },

  createImage: function (imageUrl) {
      // Create image element
  },

  getComicsDataById: function (id) {
      // Retrieve comics data based on id
  }
});

AFRAME.registerComponent("tour", {
init: function () {
  this.placesContainer = this.el;
  this.createCards()    
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

    // Border Element
    const borderEl=this.createBorder(position,item.id)
    // Thumbnail Element
    const thumbnailEl=this.createThumbnail(item)
    borderEl.appendChild(thumbnailEl)
    // Title Text Element
    this.placesContainer.appendChild(borderEl);
  }
},
createBorder:function(position,id){
  const entityEl=document.createElement("a-entity")
  entityEl.setAttribute("id",id)
  entityEl.setAttribute("visible",true)
  entityEl.setAttribute("geometry",{
    primitive:"plane",
    width:23,
    height:40,

  })
  
  entityEl.setAttribute("position",position)
  entityEl.setAttribute("material",{
    color:"white",
    opacity:0.4,
  })
  return entityEl
},
createThumbnail:function(item){
  const entityEl=document.createElement("a-entity")
  entityEl.setAttribute("visible",true)
  entityEl.setAttribute("geometry",{
    primitive:"plane",
    width:20,
    height:28,
  })
  entityEl.setAttribute("material",{
    src:item.url
  })
  entityEl.classList.add('thumbnail');
  entityEl.setAttribute('data-id', item.id);
  return entityEl
}

});
