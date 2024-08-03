import path from 'path';
import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default {
    stories: [
        '../../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-mock',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    webpackFinal: async (config: Configuration) => {
        const paths = {
            build: '',
            html: '',
            entry: '',
            src: path.resolve(__dirname, '..', '..', 'src'),
            locales: '',
            buildLocales: '',
        };

        config.resolve = {
            ...config.resolve,
            alias: {
                ...config.resolve!.alias,
            },
        };

        config.resolve!.modules!.push(paths.src);
        config.resolve!.extensions!.push('.ts', '.tsx');

        // @ts-ignore
        config.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config.module!.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module!.rules.push(buildCssLoader(true));

        config.plugins!.push(new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.ru'),
            __PROJECT__: JSON.stringify('storybook'),
        }));

        return config;
    },
};
