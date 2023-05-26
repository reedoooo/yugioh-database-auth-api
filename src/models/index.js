"use strict";

const { Sequelize, DataTypes } = require("sequelize");

// const userSchema = require("../auth/models/users");
// const teamModel = require("./teams/model.js");
// const teammateModel = require("./teammates/model.js");
const cardModel = require("./cards/model.js");
const Collection = require("./data-collection.js");

const DATABASE_URL = process.env.DATABASE_URL || "sqlite:memory:";

const sequelize = new Sequelize(DATABASE_URL);

const cards = cardModel(sequelize, DataTypes);


module.exports = {
  // db: sequelize,
  // users: users,
  cardAndDecksDB: sequelize,
  cards: new Collection(cards),
  // Team: new Collection(teams),
  // Teammate: new Collection(teammates),
};

// 'use strict';
// // require('dotenv').config();

// const { Sequelize, DataTypes } = require('sequelize');
// // require data models for related tables
// const team = require('./teams/teamModel');
// const teammate = require('./teammates/teammateModel');
// const cardModel = require('./cards/model');
// const clothesModel = require('./clothes/model');
// const Collection = require('./collection');

// // require sequelize ORM (object-relational mapper)
// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

// const sequelize = new Sequelize(DATABASE_URL);

// // pass instantiated sequelize ORM to the db models so that sequelize knows how to define each model/table
// const teamModel = team(sequelize, DataTypes);
// const teammateModel = teammate(sequelize, DataTypes);
// const cards = cardModel(sequelize, DataTypes);
// const clothes = clothesModel(sequelize, DataTypes);

// // each entry within the team database has multiple relationships with the teammates table - in other words, one team can have multiple teammates and we identify these relationships by matching the "teamId" of a teammate to the "id" of a team.
// teamModel.hasMany(teammateModel, {foreignKey: 'teamId', sourceKey: 'id'});

// // reaffirms that one-to-many relationship between the team and the teammate tables. Defines the foreign key on the teammate data model as "teamId" which references the "id" field of the team table
// teammateModel.belongsTo(teamModel, {foreignKey: 'teamId', targetKey: 'id'});

// module.exports = {
//   db: sequelize,  // Export the sequelize instance
//   cardsAndClothesDB: sequelize,
//   Cards: new Collection(cards),
//   Clothes: new Collection(clothes),
//   Team: new Collection(teamModel),
//   Teammate: new Collection(teammateModel),
// };
