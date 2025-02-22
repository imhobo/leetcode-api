<h1 align="center">leetcode-api</h1>
<div align="center">

### The API for retrieving your LeetCode profile & Problems statistics

<img src="https://img.shields.io/badge/License-MIT-green.svg"/>
<img src="https://img.shields.io/npm/v/npm.svg?logo=nodedotjs"/>

![JavaScript](https://img.shields.io/badge/javascript-%2320232a.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-%2320232a?style=for-the-badge&logo=node.js&logoColor=43853D)
![Express.js](https://img.shields.io/badge/express-%2320232a.svg?style=for-the-badge&logo=express&logoColor=%23F7DF1E)
![REST API](https://img.shields.io/badge/RestApi-%2320232a.svg?style=for-the-badge&logo=restAPI&logoColor=%23F7DF1E)

</div>


### 💡 Rate Limit

I've implemented a rate limit to prevent any potential server overload issues.

During development, it's recommended to utilize the API locally. To do so, follow this documentation => <a href="CONTRIBUTING.md" target="_blank">Local Deploy</a>

## Endpoints 🚀

### 👤User Details

| Details                       | Endpoint                             | Description                                                          | Demo                                                              |
| :---------------------------- | :----------------------------------- | :------------------------------------------------------------------- | ----------------------------------------------------------------- |
| _Profile_                     | `/:username`                         | Get details about a user's profile.                                  | <a href="./public/demo/demo2.png" target="_blank">click here</a>  |
| _Badges_                      | `/:username/badges`                  | Get the badges earned by the user.                                   | <a href="./public/demo/demo3.png" target="_blank">click here</a>  |
| _Solved_                      | `/:username/solved`                  | Get the total number of questions solved by the user.                | <a href="./public/demo/demo4.png" target="_blank">click here</a>  |
| _Contest_                     | `/:username/contest`                 | Get details about the user's contest participation.                  | <a href="./public/demo/demo5.png" target="_blank">click here</a>  |
| _Contest History_             | `/:username/contest/history`         | Get contest history.                                                 | <a href="./public/demo/demo6.png" target="_blank">click here</a>  |
| _Submission_                  | `/:username/submission`              | Get the last 20 submissions of the user.                             | <a href="./public/demo/demo7.png" target="_blank">click here</a>  |
| _Limited Submission_          | `/:username/submission?limit=number` | Get a specified **_number_** of the user's last submissions.         | <a href="./public/demo/demo8.png" target="_blank">click here</a>  |
| _Accepted Submission_         | `/:username/acSubmission`            | Get the last 20 accepted submission of the user.                     | <a href="./public/demo/demo16.png" target="_blank">click here</a> |
| _Limited Accepted Submission_ | `/:username/acSubmission?limit=7`    | Get a specified **_number_** of the user's last accepted submission. | <a href="./public/demo/demo17.png" target="_blank">click here</a> |
| _Calendar_                    | `/:username/calendar`                | Get the user's submission calendar.                                  | <a href="./public/demo/demo9.png" target="_blank">click here</a>  |

### ❓Questions Details

| Details                     | Endpoint                                     | Description                                                                      | Demo                                                              |
| :-------------------------- | :------------------------------------------- | :------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| _Daily Problem_             | `/daily`                                     | Get the daily question.                                                          | <a href="./public/demo/demo10.png" target="_blank">click here</a> |
| _Selected Problem_          | `/select?titleSlug=selected-question`        | Get details about a **_selected-question_**.                                     | <a href="./public/demo/demo11.png" target="_blank">click here</a> |
| _Problems_                  | `/problems`                                  | Get a list of 20 problems.                                                       | <a href="./public/demo/demo12.png" target="_blank">click here</a> |
| _Limited Problems_          | `/problems?limit=number`                     | Get a list of a specified **_number_** of problems.                              | <a href="./public/demo/demo13.png" target="_blank">click here</a> |
| _Filter Problems_           | `/problems?tags=tag1+tag2`                   | Get a list of problems based on selected **_tags_**.                             | <a href="./public/demo/demo14.png" target="_blank">click here</a> |
| _Filter & Limited Problems_ | `/problems?tags=tag1+tag2+tag3&limit=number` | Get a list of a specified **_number_** of problems based on selected **_tags_**. | <a href="./public/demo/demo15.png" target="_blank">click here</a> |

