import getSpecial from '../destructuring';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

test('function getSpecial description is available', () => {
  let bool;
  /* eslint-disable-next-line */
  for (const item in character.special) {
    if (character.special[item].description) {
      const { id } = character.special[item];
      bool = character.special[item].description === getSpecial(character, id).description;
      expect(bool).toBeTruthy();
    } else {
      const { id } = character.special[item];
      bool = getSpecial(character, id).description === 'Описание недоступно';
      expect(bool).toBeTruthy();
    }
  }
});
