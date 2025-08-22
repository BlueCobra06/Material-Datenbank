\prompt 'Schemaname: ' materialdb
\prompt 'Owner Passwort: ' owner_password
\prompt 'Admin Passwort: ' admin_password
\prompt 'User Passwort: ' user_password

CREATE USER Owner with Password ':owner_password';
ALTER USER Owner WITH Superuser;

CREATE SCHEMA IF NOT EXISTS :materialdb;
ALTER SCHEMA :materialdb OWNER TO Owner;

\c - owner

CREATE TABLE if not exists :materialdb.material (
    id Serial Primary key,
    name varchar(255) not null,
    description text,
    density varchar(30) not null,
    tensile_strength varchar(30) not null,
    tensile_strength_data varchar(30) not null,
    elastic_modulus varchar(30) not null,
    price varchar(30) not null,
    category varchar(30) not null,
    applications text
);


\i testdaten.sql;

CREATE USER admin with Password ':admin_password' CREATEROLE;
GRANT Usage on Schema :materialdb to admin with Grant option;
GRANT Select, Insert, Update, Delete on :materialdb.material to admin with Grant option;

\c - admin

CREATE USER material_user with Password ':user_password';
GRANT Usage on Schema :materialdb to material_user;
GRANT Select on :materialdb.material to material_user;

\unset owner_password
\unset admin_password
\unset user_password
\echo 'Einrichtung abgeschlossen'
