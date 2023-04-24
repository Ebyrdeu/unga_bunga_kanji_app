import {NoLesson} from '@components/lesson/_noLesson';
import {KanjiAccordion} from '@components/review/_kanji.Accordion';
import {KanjiActionTab} from '@components/review/_kanji.actiontab';
import {KanjiInput} from '@components/review/_kanji.input';
import {KanjiPaper} from '@components/review/_kanji.paper';
import {KanjiTitle} from '@components/review/_kanji.title';
import {type UserKanji} from '@type/kanji';
import {type FC} from 'react';

export const KanjiGame: FC<{ data: UserKanji }> = ({data}) => {

  if (data.length === 0) return <NoLesson text={'reviews'}/>;

  return (
      <div>
        <KanjiTitle kanjiData={data}/>
        <KanjiPaper/>
        <KanjiInput kanjiData={data}/>
        <KanjiActionTab/>
        <KanjiAccordion kanjiData={data}/>
      </div>
  );
};

