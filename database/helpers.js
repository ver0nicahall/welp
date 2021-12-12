const { ids } = require('webpack');
const db = require('./database_init');

let helpers = {
    getAll: (data, callback) => {
        let queryString = 'SELECT * FROM CHOICES'
        db.query(queryString, (err, results) => {
            if (err){
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    addOne: (data, callback) => {
        let {restaurant} = data
            let queryString = `INSERT INTO choices(restaurant) VALUES('${restaurant}');`
            db.query(queryString, (err, results) => {
                if (err){
                    callback(err)
                } else {
                    callback(null, results)
                }
            })
    },
    deleteOne: (req, res) => {
       let {restaurant} = data //object destructure
        let queryString = `DELETE FROM choies WHERE restaurant = '${restaurant}';`
        db.query(queryString, (err, reuslts) => {
            if (err) {
                callback(err)
            } else {
                callback(null, results)
            }
        })
    },
    updateOne: (req, res) => {
        
    }
}

module.exports = helpers