export type SportType =
  | 'Soccer'
  | 'Motorsport'
  | 'Ice Hockey'
  | 'Basketball'
  | 'American Football';

export interface League {
  idLeague: string;
  strLeague: string;
  strSport: SportType;
  strLeagueAlternate: string;
}

export interface LeaguesResponse {
  leagues: League[];
}
