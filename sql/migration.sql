DROP TABLE IF EXISTS script, account;

CREATE TABLE script (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    download_link varchar(50) NOT NULL,
    description text NOT NULL,
    image varchar(20) NOT NULL,
    synopsis text NOT NULL
);

CREATE TABLE account (
    id varchar(25) PRIMARY KEY,
    name varchar(25) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role varchar(10) NOT NULL
);