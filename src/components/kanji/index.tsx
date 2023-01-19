import {Badge, Box, Card, Group, RingProgress, Text, Title} from "@mantine/core";
import {LEVEL_COLORS} from "@/@constants";
import useKanjiCardStyles from "./styles/useKanjiCardStyles";
import type {UserKanjiProps} from "@/@types";

const KanjiCard = ({data}: UserKanjiProps) => {
	const {classes, theme} = useKanjiCardStyles(undefined, undefined);

	const kanjiMeanings = data?.kanji_meanings.map((m: string) => `${m}, `);
	const kunReadings = data?.kun_readings.map((kr: string) => `${kr}, `);
	const onReadings = data?.on_readings.map((or: string) => `${or}, `);

	const checkM = kanjiMeanings.length === 0 ? null : (
			<Box mt={"lg"}>
				{kanjiMeanings}
				<Text size="xs" color="dimmed">意味</Text>
			</Box>
	);

	const checkKR = kunReadings.length === 0 ? null : (
			<Box mt={"lg"}>
				{kunReadings}
				<Text size="xs" color="dimmed">訓読み</Text>
			</Box>
	);

	const checkOR = onReadings.length === 0 ? null : (
			<Box mt={"lg"}>
				{onReadings}
				<Text size="xs" color="dimmed">訓読み</Text>
			</Box>
	);

	return (
			<Card p="xl" radius="md" className={classes.card}>
				<Group grow className={classes.inner}>
					<div>
						<Box>
							<Title mb={"md"} align={"start"} className={classes.kanji}>{data.kanji}</Title>
							<Badge color={LEVEL_COLORS[`level_${data.kanji_level}`]}>レベル: {data.kanji_level}</Badge>
						</Box>
						{checkM}
						{checkKR}
						{checkOR}

						<Group mt="lg">
							<div>
								<Text className={classes.label}>{data.total_answers}</Text>
								<Text size="xs" color="dimmed">Total Answers</Text>
							</div>
							<div>
								<Text className={classes.label}>{data.total_answers - (data.total_answers - data.correct_answers)}</Text>
								<Text size="xs" color="dimmed">Correct Answers</Text>
							</div>
							<div>
								<Text className={classes.label}>{data.total_answers - data.correct_answers}</Text>
								<Text size="xs" color="dimmed">Incorect Answers</Text>
							</div>
						</Group>
					</div>

					<div className={classes.ring}>
						<RingProgress
								roundCaps
								thickness={6}
								size={150}
								sections={[{value: (data.correct_answers / data.total_answers) * 100, color: theme.primaryColor}]}
								label={
									<div>
										<Text align="center" size="lg" className={classes.label} sx={{fontSize: 22}}>
											{data.total_answers === 0 ? 0 : ((data.correct_answers / data.total_answers) * 100).toFixed(0)}%
										</Text>
										<Text align="center" size="xs" color="dimmed">
											Accuracy
										</Text>
									</div>
								}
						/>
					</div>
				</Group>
			</Card>
	);
};

export default KanjiCard;