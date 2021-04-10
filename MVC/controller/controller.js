exports.index = (req, res) => {
    res.render('index', {
        title: '秋一布谷鸟',
        heros: [{
                name: 'timor',
                age: 11
            }, {
                name: 'mouse',
                age: 3
            },
            {
                name: 'cat',
                age: 1
            }
        ]
    })
}