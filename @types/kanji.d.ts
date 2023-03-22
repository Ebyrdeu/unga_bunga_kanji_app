import type {Kanji, KanjiOnUsers} from '@prisma/client';

export type UserKanji = (KanjiOnUsers & { kanji: Kanji })[]