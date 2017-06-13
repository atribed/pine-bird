-- Dummy-ish bird data for now, needs to be improved upon
INSERT INTO bird (
  id,
  name,
  scientific_name,
  description,
  length,
  wing_span,
  weight,
  migrates
) VALUES
  (
    1,
    'Red-tailed Hawk',
    'Buteo jamaicensis',
    'Larger raptor. Brown top, white under wings. Broad chest. Orange-red tail.',
    19,
    49,
    38.4,
    1
  ),
  (
    2,
    'Gray Catbird',
    'Dumetella carolinensis',
    'Gray bird with a brown spot on its rump. Small-ish.',
    8.5,
    11,
    1.3,
    1
  ),
  (
    3,
    'Hairy Woodpecker',
    'Picoides villosus',
    'Gray bird with a brown spot on its rump. Small-ish.',
    9.25,
    15,
    2.3,
    0
  );

INSERT INTO bird_season (
  bird_id,
  season_id
) VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (3, 1),
  (3, 2),
  (3, 3),
  (3, 4),
  (2, 2),
  (2, 3)
;

INSERT INTO descriptor (
  id,
  descriptor_type_id,
  name
) VALUES
  (1, 1, 'Brown'),
  (2, 1, 'Red'),
  (3, 1, 'Orange'),
  (4, 1, 'White'),
  (5, 1, 'Gray'),
  (6, 2, 'Small'),
  (7, 2, 'Medium'),
  (8, 2, 'Large'),
  (9, 3, 'Cheeeeeew'),
  (10, 3, 'Mwee'),
  (11, 3, 'Meeurr'),
  (12, 3, 'Whurf'),
  (13, 3, 'Peek'),
  (14, 3, 'Peech'),
  (15, 3, 'Kweek'),
  (16, 1, 'Black');

INSERT INTO bird_descriptor (
  bird_id,
  descriptor_id
) VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 9),
  (1, 8),
  (2, 1),
  (2, 5),
  (2, 6),
  (2, 10),
  (2, 11),
  (2, 12),
  (3, 16),
  (3, 4),
  (3, 2),
  (3, 13),
  (3, 14),
  (3, 15)
;
