const Sequelize = require('sequelize');

// PSQL via SEQUELIZE INITIALIZATION
const sequelize = new Sequelize('postgres://listten.cdt9ifm2vzuz.us-west-2.rds.amazonaws.com:5432/dmrx');

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

const Vlist = sequelize.define('vlist', {
  listName: Sequelize.String,
  description: Sequelize.Text,
  creatorID: Sequelize.INTEGER,
  vid1: Sequelize.String,
  vid1: Sequelize.String,
  vid3: Sequelize.String,
  vid4: Sequelize.String,
  vid5: Sequelize.String,
  vid6: Sequelize.String,
  vid7: Sequelize.String,
  vid8: Sequelize.String,
  vid9: Sequelize.String,
  vid10: Sequelize.String,
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


