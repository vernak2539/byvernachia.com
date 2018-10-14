import 'normalize.css';
import './styles.css';
import TypeIt from 'typeit';

const typeItInstance = new TypeIt('#its-me', {
  speed: 60,
  cursorChar: '_'
});

typeItInstance
  .type('<span class="header">Hi, I\'m Alex</span>')
  .pause(600)
  .options({ speed: 40 })
  .break()
  .type('<span class="sub-text">I like long walks on the beach, poetry, and sunsets</span>')
  .pause(500)
  .break()
  .options({ speed: 50 })
  .type('<span class="sub-text">Oh wait... wrong site</span>')
  .pause(800)
  .break()
  .type('<span class="sub-text">Let\'s try again</span>')
  .pause(800)
  .empty()
  .options({ speed: 60 })
  .type('<span class="header">Hi, I\'m Alex</span>')
  .pause(600)
  .break()
  .type('<span class="sub-text">I\'m a software engineer</span>')
  .break()
  .type('<span class="sub-text">focusing on front-end web development </span>')
  .pause(600)
  .type('<span class="sub-text">#nerd</span>');
