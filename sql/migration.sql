DROP TABLE script;

CREATE TABLE script (
    id serial PRIMARY KEY,
    name varchar(50) NOT NULL,
    download_link varchar(50) NOT NULL,
    description text NOT NULL
)