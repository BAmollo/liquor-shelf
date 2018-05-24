CREATE TABLE IF NOT EXISTS carts (
    id SERIAL PRIMARY KEY,
    prod_name text,
    price text,
    image text,
    cart_id integer
);