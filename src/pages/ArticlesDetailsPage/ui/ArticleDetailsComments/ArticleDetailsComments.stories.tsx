import { ArticleDetailsComments } from './ArticleDetailsComments';
import { ComponentMeta } from '@storybook/react';


export default {
    title: 'features/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

// const Template: ComponentStory<typeof ArticleRecommendations> = (args) => <ArticleRecommendations {...args} />;

// export const Normal = Template.bind({});
// Normal.args = {
//     id: '1',
// };
// Normal.decorators = [StoreDecorator({})];