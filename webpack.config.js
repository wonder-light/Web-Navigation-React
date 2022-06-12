import styleVariables from 'src/assets/js/scss'

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            data: Object.keys(styleVariables)
                                .map(k => `$${k}: ${styleVariables[k]};`)
                                .join('\n')
                        }
                    }
                ]
            }
        ]
    }
}