import { Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Common/Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Small button',
};
