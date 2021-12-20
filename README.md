# client

## Business services website
#### Business and services website that supports a business but does not produce a tangible good.
#### This website service aligns IT assets with the people who represent the business goals, thus supporting researchers and meeting people's needs with less time and faster services.

## User Stories
- Registration: As An Anonymous User, I Can Register On The Website So That I Can Use Features On The Website.
- Login: As A User, I Can Log Into The Website So That I Can Use All Features On The Website.
- Logout: As A User, I Can Log Out Of The Website So That No One Else Can Use It.
- As A User, I Want To Add Post  To My Profile  Contains Information About My Business Or Services.
- As A User, I Want To  See Users' Posts, Comment And Communicate With Them By Clicking The Action Floating Button .
- As A User, I Want To See All The Post Details On The Home Screen .
- As A User, I Want To Edit My Posts .
- As A User, I Want To Delete Posts Or Comments So That If Decide It's Not Necessary.
- Edit User Profile As A User I Can Edit My Profile, Add, Delete Or Update My Account.
## Admin Stories
- As An Admin, I Can See All Users Profile And All Content Of The Website What The User Published.
- As An Admin,  I Can Delete Users And What Is Added By The User On The Website.
- As An Admin, I Can Update The Contents Of The Website.
## Links
- Deployment: https://Deployment.com .
- Local:  http://localhost:3000 .
- Slides: https://Slides  .
- Server side: https://github.com/MP-Project-Thoraya/server
- Trello: https://trello.com/thorayaalrashidi/boards

## Router Routes
Path  | Component    | Permissions                             | Behavior
------------- | -----------  | ---------------------------           |----------------------
/        |SplashPage    |public <Route>                         |Home page
/signup         | SignupPage   |user                           |Signup form, link to login, navigate to homepage after signup
/login        |LoginPage   |user                               |Login form, navigate to todos after login
/verifyemail      | verifyemail   |user    |A page enables the user to activate their accoun
/resetPassword          |password   |user                |A page to let a user change his password
  /posts/:id      | Post  |user                           |Shows a post
/posts/:id      | Post  |user                         |Edits a post 
 /posts/:id      | Post  |user                         |Delete a post 

## UML Diagram
![ ](https://github.com/MP-Project-Thoraya/client/blob/main/uml-front.png)
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
