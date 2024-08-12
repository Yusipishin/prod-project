import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: 200 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    value: 'click',
    items: [
        { content: '12333333333333333333333333', valie: '123' },
        { content: 'gertherth455', valie: '34343' },
        { content: '232523grgtrtg35g34g', valie: '2354' },
    ],
};

export const topLeft = Template.bind({});
topLeft.args = {
    value: 'click',
    direction: 'top left',
    items: [
        { content: '12333333333333333333333333', valie: '123' },
        { content: 'gertherth455', valie: '34343' },
        { content: '232523grgtrtg35g34g', valie: '2354' },
    ],
};

export const topRight = Template.bind({});
topRight.args = {
    value: 'click',
    direction: 'top right',
    items: [
        { content: '12333333333333333333333333', valie: '123' },
        { content: 'gertherth455', valie: '34343' },
        { content: '232523grgtrtg35g34g', valie: '2354' },
    ],
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
    value: 'click',
    direction: 'bottom left',
    items: [
        { content: '12333333333333333333333333', valie: '123' },
        { content: 'gertherth455', valie: '34343' },
        { content: '232523grgtrtg35g34g', valie: '2354' },
    ],
};

export const bottomRight = Template.bind({});
bottomRight.args = {
    value: 'click',
    direction: 'bottom right',
    items: [
        { content: '12333333333333333333333333', valie: '123' },
        { content: 'gertherth455', valie: '34343' },
        { content: '232523grgtrtg35g34g', valie: '2354' },
    ],
};
