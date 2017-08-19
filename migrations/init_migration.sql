CREATE TABLE bird (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(240),
  scientific_name VARCHAR(240),
  description TEXT,
  length FLOAT(6,1),
  wing_span FLOAT(6,1),
  weight FLOAT(6,2),
  migrates TINYINT(1),
  img VARCHAR(400) DEFAULT NULL,
  KEY i_name(name)
);

CREATE TABLE descriptor_type (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE descriptor (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  descriptor_type_id INT(6) UNSIGNED,
  name VARCHAR(240),
  FOREIGN KEY (descriptor_type_id) REFERENCES descriptor_type(id)
);

CREATE TABLE bird_descriptor (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  bird_id INT(6) UNSIGNED,
  descriptor_id INT(6) UNSIGNED,
  FOREIGN KEY (bird_id) REFERENCES bird(id),
  FOREIGN KEY (descriptor_id) REFERENCES descriptor(id)
);

CREATE TABLE season (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(40)
);

CREATE TABLE bird_season (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  bird_id INT(6) UNSIGNED,
  season_id INT(6) UNSIGNED,
  FOREIGN KEY (bird_id) REFERENCES bird(id),
  FOREIGN KEY (season_id) REFERENCES season(id)
);

INSERT INTO descriptor_type (id, name) VALUES (1, 'color'), (2, 'size'), (3, 'call'), (4, 'season');
