import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Common/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {console.log(args); return <Button {...args} />};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small button',
};
