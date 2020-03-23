# devradar-omnistack-week

This project is based on Omnistack Week 10 developed by Rocketseat, the objective is make a Fullstack application using NodeJS with Express and MongoDB in backend, React in web frontend and React Native in mobile. That app can register developers Github profiles with your location and the technologies with they work and in mobile the user can search and show in a map these developer and view your Github profile.

<p align="center">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
  </a>
  <a aria-label="Versão do React" href="https://github.com/facebook/react/blob/master/CHANGELOG.md#16120-november-14-2019">
    <img src="https://img.shields.io/badge/react-16.12.0-informational?logo=react"></img>
  </a>
  <a aria-label="Versão do Expo" href="https://www.npmjs.com/package/expo-cli/v/3.11.5">
    <img src="https://img.shields.io/badge/expo--CLI-3.11.5-informational?logo=expo"></img>
  </a>
</p>

### backend
Before start you need to configure an external MongoDB instance and create a .env file based on .env.example with the connection data. To install the dependences and run the server in development mode execute:
```bash
cd backend
yarn install
yarn dev
```

### frontend
To start the web frontend run the following commands:
```bash
cd frontend
yarn install
yarn start
```

### mobile
Before start the mobile change the file `src/services/api.js` with your machine address in your network and execute:
```bash
# If you don't have the expo-cli installed run this line above
yarn global add install expo-cli
cd mobile
yarn install
yarn start
```
After that access the application using an emulator or the Expo App.
## License

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
