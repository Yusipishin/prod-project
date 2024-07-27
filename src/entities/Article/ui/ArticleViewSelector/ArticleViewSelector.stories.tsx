import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleView } from '../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
};
