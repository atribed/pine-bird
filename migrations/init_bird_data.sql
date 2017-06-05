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

INSERT INTO bird_x_season (
  bird_id,
  season_id
) VALUES
  (1, 5),
  (3, 5),
  (2, 2),
  (2, 3)
;

INSERT INTO descriptor (
  id,
  descriptor_type_id,
  name
) VALUES
  (1, 1, 'brown'),
  (2, 1, 'red'),
  (3, 1, 'orange'),
  (4, 1, 'white'),
  (5, 1, 'gray'),
  (6, 2, 'small'),
  (7, 2, 'medium'),
  (8, 2, 'large'),
  (9, 3, 'cheeeeeew'),
  (10, 3, 'mwee'),
  (11, 3, 'meeurr'),
  (12, 3, 'whurf'),
  (13, 3, 'peek'),
  (14, 3, 'peech'),
  (15, 3, 'kweek'),
  (16, 1, 'black');

INSERT INTO bird_x_descriptor (
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
