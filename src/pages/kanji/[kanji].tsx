import {Badge, createStyles, Group, Paper, Text, ThemeIcon} from '@mantine/core';
import {api} from '@utils/api';
import {type NextPage} from 'next';
import {useRouter} from 'next/router';

const ICON_SIZE = 100;
const Kanji: NextPage = () => {
  const {classes} = useStyles();
  const {query: {kanji: kanjiQuery}} = useRouter();
  const {data, isLoading} = api.kanji.getByKanji.useQuery({kanji: typeof kanjiQuery === 'string' ? kanjiQuery : ''});

  if (!data || isLoading) return null;

  return (
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 1.4}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE}
                   radius={ICON_SIZE}
                   variant="gradient"
                   gradient={{deg: 0, from: 'blue', to: 'cyan'}}>
          <Text size={50}>{data.kanji}</Text>
        </ThemeIcon>

        <Text align="center" color={'dimmed'} weight={700}>
          {data.meanings[0]}
        </Text>

        <Group position={'center'} mt={'xl'}>
          <div>
            <Text align="center" weight={700}>
              On readings
            </Text>
            <Text color="dimmed" size="sm">
              {data.on_readings.join(', ')}
            </Text>
          </div>

          <div>
            <Text align="center" weight={700}>
              Kun readings
            </Text>
            <Text color="dimmed" size="sm">
              {data.kun_readings.join(', ')}
            </Text>
          </div>

          <div>
            <Text align="center" weight={700}>
              Other meanings
            </Text>
            <Text color="dimmed" size="sm">
              {data.meanings.join(', ')}
            </Text>
          </div>
        </Group>

        <Group position="apart" mt="xl">
          <Badge variant="dot" size="sm">{data.id}</Badge>
          <Badge variant="dot" size="sm">{data.createdAt.toDateString()}</Badge>
        </Group>
      </Paper>
  );
};

export default Kanji;

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    overflow: 'visible',
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: 'absolute',
    top: -ICON_SIZE / 2,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

}));