DELETE FROM script;
DELETE FROM account;

INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-bankrobbery', 'https://www.google.com', 'bank', 'This bank robbery script will allow crims to follow a progression chain in order to rob the ultimate bank!',
'Want to add progression to your crims? This bank robbery script will allow crims to follow a progression chain in order to have a chance to rob the ultimate bank! Fully customizable for QB-Core. Choose the rewards each bank offers.');
INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-mechanic', 'https://www.google.com', 'mechanic', 'Automated mechanic script that will allow players to repair and upgrade their vehicle when no mechanic is online.',
'Automated mechanic script that will allow players to repair and upgrade their vehicle when no mechanic is online. Customize repair setting like time, and cost. Full custom menu included. Use for QB-Core.');
INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-fishing', 'https://www.google.com', 'fishing', 'Fishing script that will allow players to fish the waters! Fully customizable.',
'Fishing script that will allow players to fish the waters! Fully customizable too choose how often which fish are caught. Players can now fish anywhere with water. Works for QB-Core.');
INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-loadscreen', 'https://www.google.com', 'loading', 'Fully customizable loading screen for your city.',
'Fully customizable loading screen for your city. You can now include images, new stories, music and/or videos. Use the config to manage the settings as you like! Works with QB-Core or standalone.');
INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-notify', 'https://www.google.com', 'notification', 'Replaces standard notifications with custom, better looking notifications.',
'Replaces standard notifications with custom, better looking notifications. Works with QB-Core or as standalone. Includes sound effects. No customization at this time.');
INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-searchtrash', 'https://www.google.com', 'trash', 'Allows players to dig through trash cans to find random items.',
'Creates a way for players to find random items in trash cans. Script is customizable to decide what items players will be able to find and frequency. QB-Core only.');
INSERT INTO script (name, download_link, image, synopsis, description) 
VALUES ('geez-policebadge', 'https://www.google.com', 'badge', 'Enables LEOs to show their badge to other citizens.',
'LEO are able to show their police badge complete with headshot from the LEO. Offers a more realistic way to prove the LEO creditionals to citizens.');

INSERT INTO account(id, email, password, role) VALUES ('1683307305098', 'admin@admin.com', '$2b$10$IrK76X0jVVJBUagJl/5q7uYR.RmWYFEOyxI9x8GlR3ESf8UZfcU/y', 'admin');
