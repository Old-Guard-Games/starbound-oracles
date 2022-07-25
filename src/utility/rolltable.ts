export function bob(){

}

export interface RollTableItem {
  min: number;
  max: number;
  contents: string;
}

export interface RollTable {
  name: string;
  items: RollTableItem[];
  roll: () => string;
}

export interface RollTableCategory {
  name: string;
  tables: RollTable[];
}

const d100 = () => {
  return Math.floor(Math.random() * 100) + 1;
}

const roll = (items: RollTableItem[]): {die: number, result: RollTableItem} => {
  const rand = d100();
  for (let i = 0; i < items.length; i += 1){
    const item = items[i];
    if (item.max >= rand) {
      return {die: rand, result: item};
    }
  }
  return {die: rand, result: items[items.length - 1]};
}

const item = (min: number, max: number, contents: string): RollTableItem => {
  return {min, max, contents};
}

const table = (name: string, items: RollTableItem[]): RollTable => {
  const r = () => {
    const {die, result} = roll(items||[]);
    return `${name} [${die}]: ${result.contents}`;
  }
  return {name, items, roll: r};
}

const category = (name: string, tables: RollTable[]) => {
  return {name, tables};
}

export default { item, table, category }