# Gremlins demo

`yarn install` - get libs

`cd TodoMVC` go to demo catalog

Run backend `python -m SimpleHTTPServer`

##### Manual 

Open `localhost:8000` to see gremlins in action

##### Via puppeteer

`yarn test` call chrome driver with gremlins (required backend)

`yarn test:headless` headless call

##### on CI

`docker build -t gremlins .` - create docker container

`docker run -v ~/code/gremlins-demo/main.test.js:/code/main.test.js gremlins:latest bash -c '(cd TodoMVC && python -m SimpleHTTPServer) & (sleep 4 && yarn test:headless)'` - run via docker container (local test file) on backend
