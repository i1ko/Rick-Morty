type CharacterItemStatusT = 'Alive' | 'Dead' | 'unknown'
type CharacterItemGenderT = 'Male' | 'Female' | 'Genderless' | 'unknown'
type CharacterItemSpeciesT = 'Human' | 'Alien' | 'Humanoid' |
    'Mythological Creature' | 'Animal' | 'Robot' |
    'Cronenberg' | 'unknown' | 'Poopybutthole' | string

export interface CharacterItemI
    // extends Object
{
    id: number;
    name: string;
    status: CharacterItemStatusT;
    species: CharacterItemSpeciesT;
    created: Date;
    url: string;
    image: string;
    gender: CharacterItemGenderT;
    location: { name: string, url: string };
    origin: { name: string, url: string };
    type: string;
    episode: string[];
}