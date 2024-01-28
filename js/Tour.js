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
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

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
    return entityEl
  }

});
