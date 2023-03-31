import {CustomLoader} from '@components/loader';
import {Badge, createStyles, Group, Paper, Text, ThemeIcon} from '@mantine/core';
import {api} from '@utils/api';
import {type NextPage} from 'next';
import {useRouter} from 'next/router';

const Kanji: NextPage = () => {
  const {classes} = useStyles(undefined, undefined);
  const {query: {kanji: kanjiQuery}} = useRouter();
  const {data, isLoading} = api.kanji.getByKanji.useQuery({kanji: typeof kanjiQuery === 'string' ? kanjiQuery : ''});

  if (!data || isLoading) return <CustomLoader/>;

  return (
      <Paper radius="md" withBorder className={classes.card} mt={100 / 1.4}>
        <ThemeIcon className={classes.icon} size={100}
                   radius={100}
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
              On’yomi
            </Text>
            <Text color="dimmed" size="sm">
              {data.on_readings.join(', ')}
            </Text>
          </div>

          <div>
            <Text align="center" weight={700}>
              Kun’yomi
            </Text>
            <Text color="dimmed" size="sm">
              {data.kun_readings.length === 1 ? 'None' : data.kun_readings.join(', ')}
            </Text>
          </div>

          <div style={{display: data.meanings.slice(1).length === 0 ? 'none' : 'block'}}>
            <Text align="center" weight={700}>
              Alternative
            </Text>
            <Text color="dimmed" size="sm">
              {data.meanings.slice(1).join(', ')}
            </Text>
          </div>
        </Group>

        <Group position="apart" mt="xl">
          <Badge variant="dot" size="sm">{data.id}</Badge>
          <Group spacing={'sm'}>
            <Badge variant="dot" size="sm">Level: {data.level}</Badge>
            <Badge variant="dot" size="sm">{data.createdAt.toDateString()}</Badge>
          </Group>
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
    paddingTop: theme.spacing.xl * 1.5 + 100 / 3,
  },

  icon: {
    position: 'absolute',
    top: -100 / 2,
    left: `calc(50% - ${100 / 2}px)`,
  },

}));