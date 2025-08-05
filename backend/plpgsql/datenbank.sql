CREATE TABLE material (
    id Primary key,
    name varchar(255) not null,
    description text,
    density varchar(30) not null,
    tensile_strength varchar(30) not null,
    elastic_modulus varchar(30) not null,
    price varchar(30) not null
);

Create Table tags (
    id Primary key,
    name varchar(255) not null
);


