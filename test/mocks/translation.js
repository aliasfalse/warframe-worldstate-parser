'use strict';

const dummy = (key) => key;

module.exports = {
  faction: dummy,
  node: dummy,
  nodeMissionType: dummy,
  nodeEnemy: dummy,
  languageString: dummy,
  languageDesc: dummy,
  missionType: dummy,
  conclaveMode: dummy,
  conclaveCategory: dummy,
  fissureModifier: dummy,
  fissureTier: dummy,
  syndicate: dummy,
  upgrade: dummy,
  operation: dummy,
  operationSymbol: dummy,
  sortieBoss: dummy,
  sortieModifier: dummy,
  sortieModDesc: dummy,
  sortieFaction: dummy,
  region: dummy,
  steelPath: () => ({ rotation: [], evergreen: [] }),
};
