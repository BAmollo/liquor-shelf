CREATE TABLE IF NOT EXISTS shoppers (
    id SERIAL PRIMARY KEY,
    user_name text,
    address text,
    email text,
    auth_id text
);