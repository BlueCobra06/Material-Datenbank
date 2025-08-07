INSERT INTO :materialdb.material(name, description, density, tensile_strength, elastic_modulus, price)
VALUES('Aluminium 6061', 'Leichte Aluminiumlegierung mit guter Korrosionsbeständigkeit', '2.7 g/cm³', '310 MPa', '68.9 GPa', '3.50 €/kg'),
('Baustahl S235', 'Standard-Konstruktionsstahl mit guter Schweißbarkeit', '7.85 g/cm³', '360 MPa', '210 GPa', '0.95 €/kg'),
('Edelstahl 304', 'Rostfreier austenitischer Stahl mit guter Korrosionsbeständigkeit', '8.0 g/cm³', '505 MPa', '193 GPa', '4.20 €/kg'),
('Titan Grade 5', 'Hochfeste Titanlegierung (Ti-6Al-4V) für Luft- und Raumfahrt', '4.43 g/cm³', '950 MPa', '113.8 GPa', '35.00 €/kg'),
('Kupfer C11000', 'Elektrolytisch reines Kupfer mit hoher elektrischer Leitfähigkeit', '8.96 g/cm³', '220 MPa', '117 GPa', '8.75 €/kg'),
('PLA', 'Biologisch abbaubarer Kunststoff für 3D-Druck', '1.24 g/cm³', '50 MPa', '3.5 GPa', '20.00 €/kg'),
('Kohlefaser-Verbundwerkstoff', 'Hochfestes Verbundmaterial mit geringem Gewicht', '1.6 g/cm³', '3500 MPa', '230 GPa', '100.00 €/kg'),
('Glas (Borosilikat)', 'Temperaturbeständiges Glas für Labor- und Küchenanwendungen', '2.23 g/cm³', '30 MPa', '63 GPa', '5.50 €/kg'),
('Eichenholz', 'Robustes Hartholz für Möbel und Konstruktionen', '0.75 g/cm³', '90 MPa', '11 GPa', '2.80 €/kg'),
('Beton C30/37', 'Standardbeton für Konstruktionsanwendungen', '2.4 g/cm³', '3.5 MPa', '30 GPa', '0.12 €/kg');


INSERT INTO :materialdb.tags(name)
VALUES ('Metall'),
('Kunststoff'),
('Verbundwerkstoff'),
('Holz'),
('Keramik'),
('Glas'),
('Baumaterial'),
('Leichtbau'),
('Hochfest'),
('Korrosionsbeständig'),
('Elektrisch leitfähig'),
('Wärmeleitfähig'),
('Biokompatibel'),
('Recycelbar');