DELETE FROM testimonials_caringhearts
WHERE post_id = $1;
SELECT * FROM testimonials_caringhearts
ORDER BY post_id DESC;