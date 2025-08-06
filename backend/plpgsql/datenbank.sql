\prompt 'Schemaname für Materialdatenbank:' materialdb

CREATE SCHEMA IF NOT EXISTS :materialdb;

CREATE TABLE :materialdb.material (
    id Serial Primary key,
    name varchar(255) not null,
    description text,
    density varchar(30) not null,
    tensile_strength varchar(30) not null,
    elastic_modulus varchar(30) not null,
    price varchar(30) not null
);

Create Table :materialdb.tags (
    id Serial Primary key,
    name varchar(255) not null
);

\echo 'Datenbanksetup fertig'
