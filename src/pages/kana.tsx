import {useShuffle} from '@/hooks';
import {KanaAccordion} from '@components/kana/_kana.accordion';
import {KanaActionTab} from '@components/kana/_kana.actiontab';
import {KanaEndScreen} from '@components/kana/_kana.endscreen';
import {KanaInput} from '@components/kana/_kana.input';
import {KanaPaper} from '@components/kana/_kana.paper';
import {KanaProgress} from '@components/kana/_kana.progress';
import {KanaTitle} from '@components/kana/_kana.title';
import {KANA_DATA} from '@constant/data';
import {useKanaGameStore} from '@store/store';
import {type NextPage} from 'next';

const Kana: NextPage = () => {
  const {index} = useKanaGameStore();
  const kanaData = useShuffle(KANA_DATA);

  if (kanaData?.length === index) return <KanaEndScreen/>;

  return (
      <>
        <KanaProgress kanaData={kanaData}/>
        <KanaTitle kanaData={kanaData}/>
        <KanaPaper/>
        <KanaInput kanaData={kanaData}/>
        <KanaActionTab/>
        <KanaAccordion kanaData={kanaData}/>
      </>
  );
};

export default Kana;