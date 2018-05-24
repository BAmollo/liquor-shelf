CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    prod_name text,
    price text,
    image text,
    prod_id integer
);