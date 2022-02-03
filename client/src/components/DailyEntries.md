```
***************************************************************************************
  DayEntries
  *****************************************************************************************
  ClientSide

  *Component* 
-First I created components folder called components, which will allow me to breakdown my applications into parts which can be composed to make more complex.
-The root components holds all component UIs
app.js is main application and will be the parent of all other components
-Next I added files , the parents components holds 5 children components(Header, footers,pomodoro,todoContainer, layoutContainer)
Since app.js is in used , i split and decompose the compomnent into smaller unit,  anotherparent component(roots component label LayoutContainer). LayoutContainer renders all the contents/customer componensts
-The headers renders the header contents, footers componets render footer ,pomodoro componets render pomodoro contents.
Header in src components folder, renders header comopents, which also renders the pages(Home,Walkthrough,Featues and Logins)
inside header.js i add my route  link 
next i added footer

About component: 
- create 2 containers for the hero section and context, i used two container so so i can use flexbox to center the content 
- i added aboutHero images, i added css to to make sure it cove some half of the page and so the text to be clear
-i added button  to make the login or sign in more accessible, i wil be adding oblick event to make entire button clickable

TodoNote:
---create a note component in a sticky note formate, where user can create, modifty and delete note, NoteList will act like parent components, the sectionhhold, title.date and cone to have delete icon. span hold the text
NoteList: 

login:
--- created responsive login form component
-- creeated something that let user knows they on login page
-- when someone type in username and password, i want to keep track on what they type in
-- add onclick listerner to register what they do
-by doing that i added http regestet to a backend
-use  useState , use state allow us to update
- i want to make sure when some type in and changed

serverSide:
installtion of libraries and dependencies
-conected tp mongp - this will allow me to store tasks in the database, so when i reset the server , i dont get logout
-mondodb cluster allow us to host our data in a cloud server, instead of hosting the data in local machine
-i firstconnect to to cluster by connecting my application
-i copied the conection string
-.env made our application to be more secures(env wont be pushed to git up, it not accessable)


```