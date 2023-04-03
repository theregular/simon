const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userName = simonDB; //process.env.SIMONMONGOUSER;
const password = simongame123; //process.env.SIMONMONGOPASSWORD;
//const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

//const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const url = `mongodb+srv://${userName}:${password}@cluster0.bxy95fo.mongodb.net/`;

const client = new MongoClient(url);
const userCollection = client.db('simon').collection('user');
const scoreCollection = client.db('simon').collection('score');

function getUser(email) { //finds user by email from DB
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) { //finds user by authToken from DB
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

function addScore(score) {
  scoreCollection.insertOne(score);
}

function getHighScores() {
  const query = {};
  const options = {
    sort: { score: -1 },
    limit: 10,
  };
  const cursor = scoreCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  addScore,
  getHighScores,
};

