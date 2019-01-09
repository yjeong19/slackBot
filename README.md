## Slack Bot mock interview
1. User calls bot and with Name as requirement and query.
2. Bot responds with the query requested.
3. Can call multiple fields.

##### Example
** Input **
> @bot John's Manager

** Output **
> John's manager is Kevin

##### example
![bruce](/bruce.png)

** Input **
> @bot kevin department last name first email

** Output **
> Kevin is in HR department

> Kevin's last name is Smith

> Kevin's real first name is Harry Potter

> Kevin's email is : kevin@hogwarts.com

##### Example
![bella](/bella.png)


##### Installation
> Clone Repo then install dependencies using npm install
1. follow steps on (https://api.slack.com/bot-users) to set up bot app and get bot keys
2. for endpoint URL -- is developing on local server
  > download ngrok (https://ngrok.com/) and follow guides to set up host
3. Follow direction on (https://api.slack.com/bot-users) to install app to the slack-channel
