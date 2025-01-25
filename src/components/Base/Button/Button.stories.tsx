import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        style: {
            control: {
                type: 'select',
                options: ['default', 'error', 'send'],
            },
        },
        disabled: {
            control: 'boolean',
        },
        name: {
            control: 'text',
        },
        onClick: {
            action: 'clicked'
        },
    },
} as Meta;

const Template: StoryFn = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'Click me',
    style: 'default',
    disabled: false,
};

export const Send = Template.bind({});
Send.args = {
    name: 'Send',
    style: 'send',
    disabled: false,
};

export const Error = Template.bind({});
Error.args = {
    name: 'Delete',
    style: 'error',
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    name: 'Disabled',
    style: 'default',
    disabled: true,
};
