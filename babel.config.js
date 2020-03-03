module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                'targets': {
                    'node': 'current'
                }
            }
        ],
    ],
    plugins: [
        'babel-plugin-espower',
        '@babel/plugin-proposal-class-properties',
    ]
}