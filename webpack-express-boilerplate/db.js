const Sequelize = require('sequelize');

// PSQL via SEQUELIZE INITIALIZATION
const sequelize = new Sequelize('postgres://codesmith:dmrx@localhost:5432/listtendb');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

const Vlist = sequelize.define('vlist', {
  _id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true 
  },
  title: {
    type: Sequelize.STRING
  },
  vdata: {
    type: Sequelize.JSON
  },
});

Vlist.sync().then(function () {
  // Table created
  return Vlist.create({
    
    title: 'NEW Test List',
    vdata: JSON.stringify({ id: 'TEST222' }),
  }.success(function() {
        Vlist.find({
            where: { title: 'Test list' }
        }).success(function(v) {
            console.log('Hello ' + v.title + '!');
            console.log('All attributes of list:', v.values);
        });
  }));

});


