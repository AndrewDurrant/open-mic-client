**Monday 5.18.2020**

1- once context files are created make sure to wrap `App` in them in your `index.js` file

<!-- 2- Figure out how you are going to combine `<Header>` and `<Nav>` within the navbar. -->

3- Spend some time looking at Utils.js and how you could use it as well. Currently it is being called in your `NotFoundPage.js`

4- Add CSS to LoginForm from the wireframe


**Wednesday 5.20.2020**
Current User Stories:
1- add form element to VideoCards that contains rating and comment.

2- Work on user login functionality 

3- Work on user adding a video

4- Add local user nav with: most recent(default), favorites, and my Videos

!!!! Use github repo -> thinkful-ed -> blogful-client ->Branch: login-endpoint

**Thursday 5.28.2020**
Issues:
1- client side does not check for auth soon enough. An unauthorized user can log in and the front end thinks they are now authorized. It is only once they try to comment or upload a video(protected endpoints) that they are denied access.

2- So we do not return anything from delete and patch requests?

3- 