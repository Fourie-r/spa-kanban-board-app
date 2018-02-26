// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

export const firebaseConfig = {
  apiKey: 'AIzaSyBK24IjrTqfaChH_BRBGYx4tW-EBEeTi_A',
  authDomain: 'spa-kanban-board-app.firebaseapp.com',
  databaseURL: 'https://spa-kanban-board-app.firebaseio.com',
  projectId: 'spa-kanban-board-app',
  storageBucket: '',
  messagingSenderId: '665328996357'
};
