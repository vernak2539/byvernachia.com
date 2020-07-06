import TypeIt from "typeit";

const DEFAULT_SPEED = 60;
const QUICKER_SPEED = DEFAULT_SPEED - 10;
const QUICKEST_SPEED = DEFAULT_SPEED - 20;
const DEFAULT_PAUSE = 800;
const SHORTER_PAUSE = 600;
const typitElementId = "#its-me";
const linksElementId = "#links";

const showLinks = () => {
  const linksContainer = document.querySelector(linksElementId);

  setTimeout(() => {
    linksContainer.classList.remove("collapsed");
  }, 1000);
};

export default () => {
  const jokeText = "I like long walks on the beach, poetry, and sunsets";
  const whoopsText = "Whoops, wrong site...";

  const typeItInstance = new TypeIt(typitElementId, {
    speed: DEFAULT_SPEED,
    cursorChar: "_",
    autoStart: false,
    afterComplete: showLinks,
  });

  typeItInstance
    .empty()
    .type('<div class="header">Hi, I\'m Alex</div>')
    .pause(SHORTER_PAUSE)
    .options({ speed: QUICKEST_SPEED })
    .break()
    .type(`<span class="sub-text">${jokeText}</span>`)
    .pause(SHORTER_PAUSE)
    .break()
    .options({ speed: QUICKER_SPEED })
    .type(`<span class="sub-text">${whoopsText}</span>`)
    .pause(DEFAULT_PAUSE)
    .delete(jokeText.length + whoopsText.length + 1)
    .pause(DEFAULT_PAUSE)
    .options({ speed: DEFAULT_SPEED })
    .type('<span class="sub-text">I\'m a software engineer</span>')
    .break()
    .type(
      '<span class="sub-text">focusing on front-end web development </span>'
    )
    .pause(SHORTER_PAUSE)
    .type('<span class="sub-text">#nerd</span>');
};
