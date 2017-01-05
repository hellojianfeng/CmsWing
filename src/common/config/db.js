'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
      host: 'billyndb.mysql.rds.aliyuncs.com',
      port: '3306',
      database: 'cmswing',
      user: 'bdba',
      password: 'Billyn2017',
      prefix: 'cmswing_',
        encoding: 'UTF8'
      //encoding: 'UTF8MB4_GENERAL_CI'

    },
    mongo: {

    }
  }
};
