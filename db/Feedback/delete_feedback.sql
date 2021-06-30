DELETE FROM feedback_caringhearts 
WHERE feedback_id = $1;
SELECT * FROM feedback_caringhearts
ORDER BY feedback_id DESC;