import {ActionIcon, Group, Text} from "@mantine/core";
import Link from "next/link";
import {trpc} from "@/src/utils";
import LoadingOverlayCustom from "@/components/overlay/LoadingOverlay.Custom";
import useUser from "@/hooks/useUser";
import {LEVEL_COLORS} from "@/@constants/_Admin.Table";

const KanjiInfo = () => {
	const {data} = trpc.userKanji_all.useQuery();
	const user = useUser();
	if (!data && !user) return null;

	const unlocked = data?.sort((a, b) => a.kanji_level > b.kanji_level ? 1 : -1).map(({kanji, kanji_level, userId}) => {
		if (user.curentlevel! >= kanji_level && userId === user.id)
			return (
					<Link key={kanji} href={`/kanji/${kanji}`} style={{textDecoration: "none"}}>
						<ActionIcon color={LEVEL_COLORS[`level_${kanji_level}`]} size="xl" variant="light">{kanji}</ActionIcon>
					</Link>
			);
	});

	const locked = data?.sort((a, b) => a.kanji_level > b.kanji_level ? 1 : -1).map(({kanji, kanji_level, userId}) => {
		if (user.curentlevel! < kanji_level && userId === user.id)
			return (
					<Link key={kanji} href={`/kanji/${kanji}`} style={{textDecoration: "none"}}>
						<ActionIcon color={LEVEL_COLORS[`level_${kanji_level}`]} size="xl" variant="light">{kanji}</ActionIcon>
					</Link>
			);
	});

	const currentLevelKanji = data?.sort((a, b) => a.kanji_level > b.kanji_level ? 1 : -1).map(({kanji, kanji_level, userId}) => {
		if (user.curentlevel! === kanji_level && userId === user.id)
			return (
					<Link key={kanji} href={`/kanji/${kanji}`} style={{textDecoration: "none"}}>
						<ActionIcon color={LEVEL_COLORS[`level_${kanji_level}`]} size="xl" variant="light">{kanji}</ActionIcon>
					</Link>
			);
	});

	return (
			<LoadingOverlayCustom visible={data}>
				<Text size={"xl"} mb={"lg"}>Current Level Kanji </Text>
				<Group>{currentLevelKanji}</Group>
				<Text size={"xl"} my={"lg"}>Unlocked Kanji</Text>
				<Group>{unlocked}</Group>
				<Text size={"xl"} my={"lg"}>Locked Kanji</Text>
				<Group>{locked}</Group>
			</LoadingOverlayCustom>
	);
};

export default KanjiInfo;