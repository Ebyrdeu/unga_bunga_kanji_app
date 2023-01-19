import {trpc} from "@/src/utils";
import useUser from "@/hooks/useUser";
import {useRouter} from "next/router";
import KanjiCard from "@/components/kanji";

const Kanji = () => {
	const user = useUser();
	const {query} = useRouter();
	const {data} = trpc.userKanji_single.useQuery({kanjiId: `${query.kanji}_${user?.id}`});
	if (!data) return null;

	return <KanjiCard data={data}/>;
};

export default Kanji;