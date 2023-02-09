import {type NextPage} from "next";
import {type KanaData} from "@type/kana.type";
import {Accordion, ActionIcon, Button, Paper, Text, TextInput, Title, useMantineTheme} from "@mantine/core";
import {useCounter} from "@mantine/hooks";
import {useState} from "react";
import {useForm} from "@mantine/form";
import {IconChevronRight, IconRecycle} from "@tabler/icons";

const kanaData: KanaData[] = [
    {kana: 'あ', reading: 'a'},
    {kana: 'い', reading: 'i'},
    {kana: 'う', reading: 'u'},
    {kana: 'え', reading: 'e'},
    {kana: 'お', reading: 'o'},
    {kana: 'か', reading: 'ka'},
    {kana: 'き', reading: 'ki'},
    {kana: 'く', reading: 'ku'},
    {kana: 'け', reading: 'ke'},
    {kana: 'こ', reading: 'ko'},
    {kana: 'さ', reading: 'sa'},
    {kana: 'し', reading: 'shi'},
    {kana: 'す', reading: 'su'},
    {kana: 'せ', reading: 'se'},
    {kana: 'そ', reading: 'so'},
    {kana: 'た', reading: 'ta'},
    {kana: 'ち', reading: 'ti'},
    {kana: 'つ', reading: 'tu'},
    {kana: 'て', reading: 'te'},
    {kana: 'と', reading: 'to'},
    {kana: 'な', reading: 'na'},
    {kana: 'ぬ', reading: 'nu'},
    {kana: 'ね', reading: 'ne'},
    {kana: 'の', reading: 'no'},
    {kana: 'は', reading: 'ha'},
    {kana: 'ふ', reading: 'fu'},
    {kana: 'へ', reading: 'he'},
    {kana: 'ほ', reading: 'ho'},
    {kana: 'ま', reading: 'ma'},
    {kana: 'み', reading: 'mi'},
    {kana: 'む', reading: 'mu'},
    {kana: 'め', reading: 'me'},
    {kana: 'も', reading: 'mo'},
    {kana: 'や', reading: 'ya'},
    {kana: 'ゆ', reading: 'yu'},
    {kana: 'よ', reading: 'yo'},
    {kana: 'ら', reading: 'ra'},
    {kana: 'り', reading: 'ri'},
    {kana: 'る', reading: 'ru'},
    {kana: 'れ', reading: 're'},
    {kana: 'ろ', reading: 'ro'},
    {kana: 'わ', reading: 'wa'},
    {kana: 'を', reading: 'wo'},
];

const Kana: NextPage = () => {
    const theme = useMantineTheme();
    const [index, handlers] = useCounter(0, {min: 0, max: kanaData.length});
    const [correct, setCorrect] = useState<any | null>(null);
    const [disabled, setDisabled] = useState<boolean>(false);
    const form = useForm({initialValues: {reading: ''}});


    const onCorrectAnswer = (reading: string) => {
        if (reading === kanaData[index].reading) {
            if (correct !== theme.colors.green[9]) return setCorrect(theme.colors.green[9]);
            setCorrect(null);
            setDisabled(false);
            handlers.increment();
            form.reset();
        }
    };

    const onWrongAnswer = (reading: string) => {
        if (reading !== kanaData[index].reading) {
            if (correct !== theme.colors.red[9]) return setCorrect(theme.colors.red[9]);
            setCorrect(null);
            setDisabled(false);
            handlers.increment();
            form.reset();
        }
    };


    const onSubmit = (reading: string) => {
        setDisabled(true);
        onCorrectAnswer(reading);
        onWrongAnswer(reading);
    };

    if (kanaData.length === index) return <FinishKanaScreen handlers={handlers}/>;

    return (
        <>
            <Text align={'right'} color={'dimmed'}>{index} / {kanaData.length - 1} </Text>
            <Text
                variant="gradient"
                gradient={{from: 'blue', to: 'cyan', deg: 45}}
                fz={190}
                fw={700}
                align={'center'}
            >
                {kanaData[index].kana}
            </Text>
            <Paper sx={{backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.dark[5]}}
                   p="md">
                <Title sx={{color: theme.colors.gray[0]}} align={"center"} order={1} fz={32}>読み</Title>
            </Paper>
            <form onSubmit={form.onSubmit(({reading}) => onSubmit(reading))}>
                <TextInput
                    sx={{
                        '& > div > input': {
                            textAlign: 'center',
                            fontWeight: 700,

                            '&:read-only': {
                                color: theme.colors.gray[0],
                                background: !correct ? '' : correct,
                            }
                        }
                    }}
                    readOnly={disabled}
                    variant="filled"
                    mt={-2}
                    radius={0}
                    size={'xl'}
                    placeholder="答え"
                    rightSection={
                        <ActionIcon type={"submit"} size="xl" variant="transparent">
                            <IconChevronRight stroke={2} size={34}/>
                        </ActionIcon>
                    }
                    {...form.getInputProps('reading')}
                />
            </form>
            <Accordion sx={{visibility: !disabled ? 'hidden' : "visible"}} mt={'md'} radius={0} variant="separated"
                       defaultValue={'item-info'}>
                <Accordion.Item value="item-info">
                    <Accordion.Control>Item Info: {kanaData[index].kana}</Accordion.Control>
                    <Accordion.Panel>
                        <Text>Reading: {kanaData[index].reading}</Text>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </>
    );
};

const FinishKanaScreen = ({handlers}: any) => {

    return (
        <Button leftIcon={<IconRecycle/>} onClick={() => handlers.set(0)}>Restart</Button>
    )
};

export default Kana;