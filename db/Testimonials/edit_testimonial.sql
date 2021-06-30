UPDATE testimonials_caringhearts
SET post = $2
WHERE post_id = $1;
SELECT * FROM testimonials_caringhearts
ORDER BY post_id DESC;