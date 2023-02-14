CREATE DATABASE posttestdb;
CREATE TABLE postestable (
	postname varchar(255)
);
INSERT INTO postestable (postname)
VALUES ('michinnom');

SELECT postname FROM postestable;