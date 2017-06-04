CREATE TABLE bird (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(240),
  scientific_name VARCHAR(240),
  description TEXT,
  length FLOAT(3,1),
  wing_span FLOAT(3,1),
  weight FLOAT(3,2),
  migrates TINYINT(1),
  img VARCHAR(400) DEFAULT NULL
);

CREATE TABLE descriptor_type (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE descriptor (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  descriptor_type_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(240)
);

CREATE TABLE bird_x_descriptor (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  bird_id INT(6) UNSIGNED,
  descriptor_id INT(6) UNSIGNED
);

CREATE TABLE season (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40)
);

CREATE TABLE bird_x_season (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  bird_id INT(6) UNSIGNED,
  season_id INT(6) UNSIGNED
);

INSERT INTO descriptor_type (
  id,
  name
) VALUES (
  (1, color),
  (2, size),
  (3, call)
);

INSERT INTO season (
  id,
  name
) VALUES (
  (1, 'winter'),
  (2, 'spring'),
  (3, 'summer'),
  (4, 'fall'),
  (5, 'all season')
);
