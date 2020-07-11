import { withKnobs, text } from '@storybook/addon-knobs';
import Main from './index';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Basica = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components'
    )}
  />
);
