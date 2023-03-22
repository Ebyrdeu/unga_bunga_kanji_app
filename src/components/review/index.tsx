import {NoLesson} from '@components/lesson/_noLesson';
import {KanjiActionTab} from '@components/review/_kanji.actiontab';
import {KanjiInput} from '@components/review/_kanji.input';
import {KanjiPaper} from '@components/review/_kanji.paper';
import {KanjiTitle} from '@components/review/_kanji.title';
import {useShuffle} from '@hooks/useShuffle';
import {type UserKanji} from '@type/kanji';

export const KanjiGame = ({data}: { data: UserKanji }) => {

  const kanjiData = useShuffle(data);

  if (kanjiData.length === 0) return <NoLesson/>;

  return (
      <div>
        <KanjiTitle kanjiData={kanjiData}/>
        <KanjiPaper/>
        <KanjiInput kanjiData={kanjiData}/>
        <KanjiActionTab/>
      </div>
  );
};

