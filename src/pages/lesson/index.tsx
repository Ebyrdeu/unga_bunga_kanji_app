import {Carousel} from "@mantine/carousel";
import {trpc} from "@/src/utils";
import useUser from "@/hooks/useUser";
import {Button, Group, Text, Title} from "@mantine/core";
import Link from "next/link";

const Lesson = () => {

	const {data} = trpc.userKanji_all.useQuery();
	const {mutate} = trpc.userKanji_lesson.useMutation();
	const user = useUser();

	if (!user) return null;

	const lessons = data?.filter(({lesson_status, kanji_level, kanjiId, kanji}) => kanjiId === `${kanji}_${user.id}` && lesson_status && kanji_level === user?.curentlevel);

	const mappedLessons = lessons?.map(({kanji, on_readings, kun_readings, kanji_meanings}) => (
			<Carousel.Slide key={kanji}>
				<Title align={"center"} order={5} fz={80}>{kanji}</Title>
				<Group position={"center"} align={"center"}>
					<Text color={"dimmed"}>Kanji Meanings: </Text>
					{kanji_meanings.map(km => <Text key={km}>{km}</Text>)}
				</Group>
				{
					on_readings?.length === 0 ? null :
							<Group position={"center"} align={"center"}>
								<Text color={"dimmed"}>On Readings: </Text>
								{on_readings.map(or => <Text key={or}>{or}</Text>)}
							</Group>
				}
				{
					kun_readings.length === 0 ? null :
							<Group position={"center"} align={"center"}>
								<Text color={"dimmed"}>Kun Readings: </Text>
								{kun_readings.map(kr => <Text key={kr}>{kr}</Text>)}
							</Group>
				}
			</Carousel.Slide>
	));
	return lessons?.length === 0 ? null : (
			<>

				<Group position={"center"} align={"center"}>
					<Carousel sx={{width: "70%"}} slideSize="70%" height={200} slideGap="xs" controlsOffset="xs" controlSize={30} draggable loop>
						{mappedLessons}
					</Carousel>
				</Group>
				<Link href={"/review"} style={{textDecoration: "none"}}>
					<Group grow>
						<Button onClick={() => mutate({userId: user?.id, current_level: user?.curentlevel, lesson_status: false})}>To Review</Button>
					</Group>
				</Link>
			</>
	);
};

export default Lesson;