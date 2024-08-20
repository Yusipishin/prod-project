import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';

const meta: Meta<typeof Code> = {
    component: Code,
    title: 'shared/Code',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text:
            "import React from 'react'\n" +
            "import { ComponentMeta, ComponentStory } from '@storybook/react';\n" +
            '\n' +
            "import { Code } from './Code';" +
            '\n' +
            'export default {' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            "        backgroundColor: { control: 'color' },\n" +
            '    },\n' +
            '} as ComponentMeta<typeof Code>;\n' +
            '\n' +
            'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;',
    },
};
