import Game, {
  GameSavingData as GameSaving,
  readGameSaving as loadGame,
  writeGameSaving as saveGame
} from './game.js';
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

const game = new Game();
game.start();
