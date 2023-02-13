import {TextInput, useMantineTheme} from "@mantine/core";
import {IconChevronRight} from "@tabler/icons";
import {KanaInputActionIcon} from "@components/kana/_kanaInput.actionIcon";

import {useForm} from "@mantine/form";
import {useKanaGameStore} from "@store/store";
import {shuffleKana} from "@components/utils/shuffle";

import {type KanaData} from "@type/kana";
import {type NextPage} from "next";


export const KanaInput: NextPage<{ kanaData: KanaData[] }> = ({kanaData}) => {
    const theme = useMantineTheme();
    const {disabled, correct, isCorrect, handlers, toggleDisabled, index} = useKanaGameStore();
    const form = useForm({initialValues: {reading: ''}});
    const onCorrectAnswer = (reading: string) => {
        if (reading === kanaData[index]?.reading) {
            if (correct !== theme.colors.green[9]) return isCorrect(theme.colors.green[9]);
            isCorrect(null);
            toggleDisabled(false);
            form.reset();
            handlers.increment();
        }
    };

    const onWrongAnswer = (reading: string) => {
        if (reading !== kanaData[index]?.reading) {
            if (correct !== theme.colors.red[9]) return isCorrect(theme.colors.red[9]);
            isCorrect(null);
            shuffleKana(kanaData);
            toggleDisabled(false);
            form.reset();

        }
    };

    const onSubmit = (reading: string) => {
        toggleDisabled(true);
        onCorrectAnswer(reading);
        onWrongAnswer(reading);
    };

    return (
        <form onSubmit={form.onSubmit(({reading}) => onSubmit(reading))}>
            <TextInput
                sx={{
                    '& > div > input': {
                        textAlign: 'center',
                        fontWeight: 700,

                        '&:read-only': {
                            color: theme.colors.gray[0],
                            background: !correct ? '' : correct,
                        },
                    }
                }}
                autoComplete={'off'}
                readOnly={disabled}
                variant="filled"
                mt={-2}
                radius={0}
                size={'xl'}
                placeholder="答え"
                aria-label="答え"
                rightSection={<KanaInputActionIcon icon={IconChevronRight}/>}
                {...form.getInputProps('reading')}
            />
        </form>
    );
};

