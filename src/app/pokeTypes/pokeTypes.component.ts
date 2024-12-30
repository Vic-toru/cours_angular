export interface Pokemon {
  pokedex_id:  number;
  generation:  number;
  category:    string;
  name:        NameClass;
  sprites:     Sprites;
  types:       Type[];
  talents:     Talent[];
  stats:       Stats;
  resistances: Resistance[];
  evolution:   Evolution | null;
  height:      string;
  weight:      string;
  egg_groups:  string[] | null;
  sexe:        Sexe | null;
  catch_rate:  number;
  level_100:   number;
  formes:      Forme[] | null;
}

export interface Evolution {
  pre:  Next[] | null;
  next: Next[] | null;
  mega: Mega[] | null;
}

export interface Mega {
  orbe:    string;
  sprites: Gmax;
}

export interface Gmax {
  regular: string;
  shiny:   string;
}

export interface Next {
  pokedex_id: number;
  name:       string;
  condition:  string;
}

export interface Forme {
  region: Region;
  name:   NameClass;
}

export interface NameClass {
  fr: string;
  en: string;
  jp: string;
}

export enum Region {
  Alola = "alola",
  Galar = "galar",
  Hisui = "hisui",
  Paldea = "paldea",
}

export interface Resistance {
  name:       NameEnum;
  multiplier: number;
}

export enum NameEnum {
  Acier = "Acier",
  Combat = "Combat",
  Dragon = "Dragon",
  Eau = "Eau",
  Feu = "Feu",
  Fée = "Fée",
  Glace = "Glace",
  Insecte = "Insecte",
  Normal = "Normal",
  Plante = "Plante",
  Poison = "Poison",
  Psy = "Psy",
  Roche = "Roche",
  Sol = "Sol",
  Spectre = "Spectre",
  Ténèbres = "Ténèbres",
  Vol = "Vol",
  Électrik = "Électrik",
}

export interface Sexe {
  male:   number;
  female: number;
}

export interface Sprites {
  regular: string;
  shiny:   string;
  gmax:    Gmax | null;
}

export interface Stats {
  hp:      number;
  atk:     number;
  def:     number;
  spe_atk: number;
  spe_def: number;
  vit:     number;
}

export interface Talent {
  name: string;
  tc:   boolean;
}

export interface Type {
  name:  NameEnum;
  image: string;
}
