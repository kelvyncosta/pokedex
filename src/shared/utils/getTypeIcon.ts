import { IconType } from 'react-icons';
import { BsRecordCircleFill } from 'react-icons/bs';
import { FaDragon, FaFire } from 'react-icons/fa';
import {
  GiElectric,
  GiPunch,
  GiFluffyWing,
  GiGhost,
  GiSteelClaws,
  GiIceBolt,
  GiStonePile,
  GiMoon,
  GiStoneSphere,
} from 'react-icons/gi';
import { IoWater, IoBug } from 'react-icons/io5';
import { MdGrass, MdOutlineWaves } from 'react-icons/md';
import { SiKinopoisk } from 'react-icons/si';
import { WiStars } from 'react-icons/wi';

import { PokemonTypes } from 'shared/types/pokemon';

const ICONS = {
  dark: GiMoon,
  bug: IoBug,
  dragon: FaDragon,
  electric: GiElectric,
  fairy: WiStars,
  fighting: GiPunch,
  fire: FaFire,
  flying: GiFluffyWing,
  ghost: GiGhost,
  grass: MdGrass,
  ground: GiStonePile,
  ice: GiIceBolt,
  normal: BsRecordCircleFill,
  poison: SiKinopoisk,
  psychic: MdOutlineWaves,
  rock: GiStoneSphere,
  steel: GiSteelClaws,
  water: IoWater,
};

const getTypeIcon = (type: PokemonTypes): IconType => {
  return ICONS[type];
};

export { getTypeIcon };
