import {type MantineColor} from '@mantine/core';

export const STAGE_COLORS: Record<string, MantineColor> = {
  stage_0: 'gray',
  stage_1: 'blue',
  stage_2: 'green',
  stage_3: 'yellow',
  stage_4: 'orange',
  stage_5: 'red',
};

export const ADMIN_COLORS: Record<'PEASANT' | 'ADMIN', MantineColor> = {
  ADMIN: 'green',
  PEASANT: 'blue',
};