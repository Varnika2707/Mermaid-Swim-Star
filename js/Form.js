class Form {
  constructor() {
    this.inputText = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(width/2 - 140, 50);
    this.inputText.position(width/2 - 133,height/2+10);
    this.playButton.position(width/2 - 75,height/2 + 60);
    this.greeting.position(width / 2 - 300, height / 2 + 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.inputText.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.inputText.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.inputText.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.inputText.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.inputText.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
  }
}
