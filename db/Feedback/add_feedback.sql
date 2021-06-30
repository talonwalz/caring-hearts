INSERT INTO feedback_caringhearts (first_name, last_name, feedback)
VALUES ($1, $2, $3);
SELECT * FROM feedback_caringhearts
ORDER BY feedback_id DESC;