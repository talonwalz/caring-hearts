DELETE FROM questions_caringhearts 
WHERE question_id = $1;
SELECT * FROM questions_caringhearts
ORDER BY question_id DESC;