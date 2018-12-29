-- sql for the db creation
--
CREATE ROLE apollo
  LOGIN ENCRYPTED PASSWORD 'md5a98ba2be79716f6c2ff64787226eb944'
  CREATEDB CREATEROLE
  VALID UNTIL 'infinity';

CREATE DATABASE olympus
  WITH ENCODING='UTF8'
  OWNER=apollo
  CONNECTION LIMIT=-1;

\connect olympus

CREATE SCHEMA lyre
  AUTHORIZATION apollo;

CREATE TABLE lyre.scenes (
  id SERIAL,
  name VARCHAR(128),
  create_date_time TIMESTAMP NOT NULL,
  cue json NOT NULL,
  update_date_time TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE lyre.instruments (
  id SERIAL,
  name VARCHAR(128),
  ip VARCHAR(32),
  PRIMARY KEY (id),
  UNIQUE (ip)
);

CREATE TABLE lyre.sequences (
  id SERIAL,
  name VARCHAR(128),
  PRIMARY KEY (id),
  actions json NOT NULL
);

CREATE TABLE lyre.groups (
  id SERIAL,
  name VARCHAR(128),
  PRIMARY KEY (id),
  instruments INT[] NOT NULL
);
