/**
 * Copyright (c) 2016 Topcoder Inc, All rights reserved.
 */
'use strict';

/**
 * The default configuration file.
 *
 * @author      kbowerma
 * @version     1.1
 */

module.exports = {

  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3500,
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || 'nope',
  JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET',
  SALT_WORK_FACTOR: 2,
  TOKEN_EXPIRES: 10 * 60 * 60,
  API_VERSION: 1,
  RESET_CODE_EXPIRES: 60 * 60,
  db: {
    url: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/drones',
    poolSize: 5,
  },
  mail: {
    SMTP_HOST: 'smtp.mailgun.org',
    SMTP_PORT: 587,
    FROM_EMAIL: 'noreply@kb-dsp-server-dev.herokuapp.com',
    SMTP_USERNAME: process.env.SMTP_USERNAME,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  },
  RESET_PASSWORD_LINK: 'http://localhost:3000/reset-password?token=:token',
};
