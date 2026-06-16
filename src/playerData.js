import MarwanIcon from "./images/Marwan.svg";
import BoltxIcon from "./images/Boltx.svg";
import ZeadIcon from "./images/Zead.svg";
import JamaicaIcon from "./images/Jamaica.svg";
import KarimIcon from "./images/Karim.svg";
import MohabIcon from "./images/Mohab.svg";
import SeifIcon from "./images/Seif.svg";
import OmarKatoIcon from "./images/OmarKato.svg";

export const PRESET_PLAYERS = [
  { name: "Marwan", color: "Yellow", icon: MarwanIcon },
  { name: "Boltx", color: "Red", icon: BoltxIcon },
  { name: "Zead", color: "Blue", icon: ZeadIcon },
  { name: "Jamaica", color: "Yellow", icon: JamaicaIcon },
  { name: "Karim", color: "Red", icon: KarimIcon },
  { name: "Mohab", color: "Blue", icon: MohabIcon },
  { name: "Seif", color: "Yellow", icon: SeifIcon },
  { name: "Omar Kato", color: "Red", icon: OmarKatoIcon },
];

export const PLAYER_ICONS = Object.fromEntries(PRESET_PLAYERS.map(p => [p.name, p.icon]));
