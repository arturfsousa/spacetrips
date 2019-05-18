const SQL = require("sequelize");

function paginateResults({
  after: cursor,
  pageSize = 20,
  results,
  getCursor = () => null
}) {
  if (pageSize < 1) return [];
  if (!cursor) return results.slice(0, pageSize);

  const cursorIndex = results.findIndex(item => {
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize)
        )
    : results.slice(0, pageSize);
}

function createStore() {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in
  };

  const db = new SQL("database", "username", "password", {
    dialect: "sqlite",
    storage: "./store.sqlite",
    operatorsAliases,
    logging: false
  });

  const users = db.define("user", {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    email: SQL.STRING,
    token: SQL.STRING
  });

  const trips = db.define("trip", {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: SQL.DATE,
    updatedAt: SQL.DATE,
    launchId: SQL.INTEGER,
    userId: SQL.INTEGER
  });

  return { users, trips };
}

module.exports = { createStore, paginateResults };
