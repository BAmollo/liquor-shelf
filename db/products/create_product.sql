INSERT INTO carts
(prod_name, price, image, prod_id)
VALUES($1, $2, $3, $4)
RETURNING *;