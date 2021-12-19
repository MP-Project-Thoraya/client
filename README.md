# client

## Business services website
#### Business and services website that supports a business but does not produce a tangible good.
#### This website service aligns IT assets with the people who represent the business goals, thus supporting researchers and meeting people's needs with less time and faster services.


## User Stories
- Registration: As An Anonymous User, I Can Register On The Website So That I Can Use Features On The Website.
@@ -19,79 +18,11 @@
- As An Admin,  I Can Delete Users And What Is Added By The User On The Website.
- As An Admin, I Can Update The Contents Of The Website.

## Router Routes
HTTP Method  | authorize    |   Path                               | Request Body
------------- | -----------  | ---------------------------           |----------------------
POST         | public     |`/user/create`                         |{email, password, role}
POST         | public    |`/user/log`                            |{email, password}
GET          | admin only   |`/user/`                               |
DELETE       | admin only   |`/user/`                               |
GET          | public   |`/user/verifyemail/:email/:token`     |
PUT          | public     |`/user/forgetPassword`                 |{email}
PUT          | public    |`/user/resetPassword`                  |{resetLink, newPassword}
GET          | user+admin   |`/user/:_id”`                          |
POST         | public    |`/user/googlelogin`                    |{idToken}
POST         | admin + user |`/comment/create`                      |{text,user,Post}
PUT          | admin + user |`/comment/update`                      |{id, text}
DELETE       | admin + user |`/comment/delete/:_id`                 |
GET          | admin + user |`/posts/`                              |
GET          | admin + user |`/posts/userPost/:postedBy`            |
GET          | admin + user |`/posts/onePost/:_id`                  |
POST         | admin + user |`/posts/create`                        |{image, description, post}
PUT          | admin + user |`/posts/archivePost/:_id`              |{id}
DELETE       | admin + user |`/posts/delete/:_id`                   |
PUT          | admin + user |`/posts/update`                        |{id, newdescribe}

## Getting Started
### Installation Packages
#### 1-To Use React Redux With Your React App, Install It As A Dependency:
- npx create-react-app my-app
>>>
- npm install redux
>>>
- npm install react-redux
>>> 
-  npm install redux
>>>  
- npm i redux-devtools-extension
#### 2-React-Dom > This Package Serves As The Entry Point To The Dom And Server Renderers For React. It Is Intended To Be Paired With The Generic React Package, Which Is Shipped As React To Npm.
- npm install react-router-dom
#### 3-React-Dotenv > Load Environment Variables Dynamically For Your React Applications Created With Cra (Create-React-App).
- npm install react-dotenv
>>> 
- npm install dotenv
#### 4-Request And Response Of Back-End
- npm install axios
#### 5-React Icons > Include popular icons in your React projects easily with react-icons
- npm install react-icons --save
#### 6-sweetalert2 > A Beautiful, Responsive, Customizable, Accessible (Wai-aria) Replacement For Javascript's Popup Boxes.
- npm install sweetalert2
#### 7-Firebase > provides the tools and infrastructure you need to develop, grow, and earn money from your app. 
- npm install --save firebase
## Components
- Login
- Signup
- Navbar
- Business 
- Services
- Verifyemail
- Password
- Userfile
- Footer
- Firebase


## UML Diagram
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/uml-front.png)

## Wirefrime
### Main Page
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/homepage.png)
### Gatogories Page for Business-services Pages
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/servicespage.png)
### Posts Page
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/post%20page.png)
### Sign Up 
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/signup.png)
### Login 
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/login.png)
