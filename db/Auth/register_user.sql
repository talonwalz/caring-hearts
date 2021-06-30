INSERT INTO employees_caringhearts (username, password)
VALUES ($1, $2)
returning *;