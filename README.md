# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### React
### node 18.16.1

### Library download

### react-query
리액트쿼리는 데이터페칭도구로 비동기 상태 관리를 도와주고 로딩, 에러처리, 리페칭, 캐싱 등 개발자가 생각하기 귀찮은 문제들을 대신 해결해준다
서버 상태관리를 위한 라이브러리
npm i @tanstack/react-query
yarn add @tanstack/react-query

참고 
https://xionwcfm.tistory.com/336
https://tanstack.com/query/v4/docs/framework/react/overview

### react-router-dom
싱글페이지 어플리케이션을 만들 수 있는 리액트에서 페이지 북마크, 브라우저상 뒤로가기 앞으로 가기 등 네비게이션 사용이 어려운데 그것을 해결하기 위한 라이브러리
여러 화면으로 구성된 웹 앱을 만드는데 사용된다
해당 라이브러리는 라우팅을 간단하게 해주며 서버사이드렌더링(SSR)을 도와주는 도구와 함께 설치된다
npm i react-router-dom

### Suspense(라이브러리는 아님)
컴포넌트의 렌더링을 어떤 작업이 끝날때까지 중단시키고 다른 컴포넌트를 먼저 랜더링 하는 라이브러리
api 호출할때나 대시보드 랜더링 시 데이터가 전부 로딩되기 전 로딩바를 띄우는 상황 등 사용함
-> 컴포넌트가 읽어야하는 데이터가 준비되지 않았다고 리액트에게 알려주는 라이브러리임
Suspense 태그로 감싸주면 

참고
https://www.daleseo.com/react-suspense/

### reactstrap
리액트 부트스트랩 같은건가봄 html component있는
npm i reactstrap


### styled-components
npm i styled-components

### lodash
npm i lodash