import {useProfileCardStyles} from '@components/profile/styles/profileCard.styles';
import {ADMIN_COLORS, STAGE_COLORS} from '@constant/colors';
import {Avatar, Badge, Button, Card, Group, rem, Text, TextInput, Transition} from '@mantine/core';
import {useForm} from '@mantine/form';
import {type User} from '@prisma/client';
import {IconCheck, IconSettings} from '@tabler/icons-react';
import {api} from '@utils/api';
import {type FC, useState} from 'react';

const ProfileCard: FC<{ user: User }> = ({user}) => {

  const {classes} = useProfileCardStyles(undefined, undefined);
  const [changeData, setChangeData] = useState(false);

  const ctx = api.useContext();

  const form = useForm({
    initialValues: {
      email: user.email, name: user.name, image: user.image,
    },
  });

  const {mutate} = api.user.updateUserById.useMutation({
    onSuccess() {
      void ctx.user.getById.invalidate();
    },
  });

  return (<form onSubmit={form.onSubmit((values) => mutate({...values}))}>
    <Card shadow={'sm'} p="xl" radius="md" className={classes.card}>
      <Card.Section className={classes.cardSection}/>
      <Avatar src={user.image} size={rem(80)} radius={rem(80)} mx="auto" mt={rem(-30)} className={classes.avatar}/>
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {user.name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {user.email}
      </Text>
      <Group mt="md" position="center" spacing={rem(30)}>
        <Badge color={STAGE_COLORS[`stage_${user.userLevel}`]}
               variant="dot"
               size="md">level: {user.userLevel}
        </Badge>
        <Badge color={ADMIN_COLORS[user.role]}
               variant="dot"
               size="md">
          {user.role}
        </Badge>
      </Group>
      <Button
          mb={'xl'}
          onClick={() => setChangeData(p => !p)}
          type={changeData ? 'button' : 'submit'}
          leftIcon={!changeData ? <IconSettings/> : <IconCheck/>}
          fullWidth
          radius="md"
          mt="xl"
          size="md"
      >
        {!changeData ? 'Settings' : 'Save Changes'}
      </Button>
      <Transition mounted={changeData} transition="pop" duration={400} timingFunction="ease">
        {(styles) => <div style={styles}>
          <TextInput
              required
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
          />
          <TextInput
              required
              label="Name"
              placeholder="asdasd"
              {...form.getInputProps('name')}
          />
          <TextInput
              required
              label="Image"
              placeholder="https://myimage.png"
              {...form.getInputProps('image')}
          />
        </div>}
      </Transition>
    </Card>
  </form>);
};

export default ProfileCard;