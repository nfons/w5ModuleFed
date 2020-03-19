# w5ModuleFed
POC to test out module federation

This is not a test on React or a best-use for react, but rather a test on Webpack 5 module federation

This Repo contains 3 react apps

Dep 1: Depends on an react component from npm

dep2: injects dep1

host-app injects Dep2 as well as components from dep1


# Requires Node > 10.13.0


# To run

run each app independently

### dep1

    cd dep1;
    npm i
    npm start

### dep2
    cd dep2;
    npm i
    npm start

### host-app
    cd host-app;
    npm i
    npm start


Visit http://localhost:3002 to view the host-app

# Tested aspects:

* Can nested federation occur? 
  * Yes. Dep1->Dep2-> host-app
* Can multiple federation occur?
  * Yes, host-app injects both dep1 and dep2
* Can Live update?
  * Yes: Updating dep1, will reflect on Dep2 / home-app refresh-reload
* Breaking Changes?
  * TBD
* Prop ingress / egrees?
  * Yes. props from host-app is propergated to dep2