DELETE FROM script;
DELETE FROM account;

INSERT INTO script (name, download_link, description) VALUES ('geez-bankrobbery', 'https://www.google.com', 'Want to add progression to your crims? This bank robbery script will allow crims to follow a progression chain in order to have a chance to rob the ultimate bank!');
INSERT INTO script (name, download_link, description) VALUES ('geez-mechanic', 'https://www.google.com', 'Automated mechanic script that will allow players to repair and upgrade their vehicle when no mechanic is online.');
INSERT INTO script (name, download_link, description) VALUES ('geez-fishing', 'https://www.google.com', 'Fishing script that will allow players to fish the waters! Fully customizable.');
INSERT INTO script (name, download_link, description) VALUES ('geez-loadscreen', 'https://www.google.com', 'Fully customizable loading screen for your server');
INSERT INTO script (name, download_link, description) VALUES ('geez-notify', 'https://www.google.com', 'Replaces standard notifications with custom, better looking notifications.');
INSERT INTO script (name, download_link, description) VALUES ('geez-searchtrash', 'https://www.google.com', 'Creates a way for players to find random items. Script is customizable to decide what items players will be able to find.');
INSERT INTO script (name, download_link, description) VALUES ('geez-policebadge', 'https://www.google.com', 'LEO are able to show their police badge complete with headshot from the LEO. Offers a more realistic way to prove the LEO creditionals to citizens.');

INSERT INTO account(id, name, email, password, role) VALUES ('1683307305098', 'admin', 'admin@admin.com', '$2b$10$Y5vsxupJsggGi9dmjsJSB.uYbfeN8unshgShmZ2Mn1V.mMkuDeLnC', 'admin');