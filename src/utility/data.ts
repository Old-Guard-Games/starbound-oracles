import rt, { RollTable, RollTableItem, RollTableCategory } from './rolltable';
import data, { DataItem } from './oracles';

const parseOracleTable = (table: any): RollTableItem[] => {

  return table.map((i: DataItem) => {
    // "Floor": 1,
    // "Ceiling": 15,
    // "$id": "Starforged/Oracles/Space/Sighting/Terminus/1-15",
    // "Result": "[⏵Stellar Object](Starforged/Oracles/Space/Stellar_Object)",
    // "Oracle rolls": ["Starforged/Oracles/Space/Stellar_Object"]
    const {Floor, Ceiling, Result} = i;

    const regex = /\[(.*)\]\(.*\)/gm;
    const matches = regex.exec(Result);
    return rt.item(Floor, Ceiling, (matches && matches[1]) || Result);
  });
}

function joinTable<Thing> (a:Thing[], b:Thing[]): Thing[] {
  return [...a, ...b];
}

const oracleToTable = (oracle: any, namePrefix = ''): RollTable[] => {
  const {Name, Oracles, Table} = oracle;
  if (Oracles) {
    return Oracles
      .map((o: any): RollTable[] => {
        return oracleToTable(o, Name);
      })
      .reduce(joinTable, []);

  }

  const name = `${namePrefix && typeof namePrefix === 'string' ? namePrefix + ': ' : ''}${Name}`;

  return [rt.table(name, parseOracleTable(Table))];
}

const categories = data.map( (cat: any): RollTableCategory => {
  const {Name, Oracles} = cat;
  const tables = Oracles
    .map(oracleToTable)
    .reduce(joinTable,[]);
  return rt.category(Name, tables);
})

export default categories;