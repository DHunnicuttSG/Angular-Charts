# Angular-Charts

Navigate to the folder where you want to build your Angular app
and type the following command to install the Angular cli:
```
npm install -g @angular/cli
```

Create a new angular application
```
ng new angular-chart-app
```
Select CSS for the styling options provided
answer yes to provided prompts

Change directories to the working directory for your angular app
in a terminal window install chart.js with this command:
```
npm install chart.js
```

Run your new angular app to test it.
```
ng serve        //starts the server  use localhost:4200 as default
ng serve --open //automatically opens the browser window
```
if errors, try to reload page.

You should hava a default, working app. 

\* If you need to, you can open another terminal window or shut down
the currently running app with `Ctrl+c` \*

We need to remove all the content from the startup page 
to make space for the charts. 

Refer to the chart.js website for documentation.
https://www.chartjs.org/docs/latest/getting-started/

Next, Create a new angular component for the chart:
```
ng generate component Components/MyChart
ng g c Components/MyChart  //this is a shortcut
```
