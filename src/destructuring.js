export default function getSpecial(character, id) {
  const { special } = character;
  const specList = {};
  /* eslint-disable-next-line */
  for (const item in special) {
    if (special[item].id === id) {
      specList.id = special[item].id;
      specList.name = special[item].name;
      specList.icon = special[item].icon;

      if (Object.hasOwn(special[item], 'description')) {
        specList.description = special[item].description;
      } else {
        specList.description = 'Описание недоступно';
      }
    }
  }
  return specList;
}
