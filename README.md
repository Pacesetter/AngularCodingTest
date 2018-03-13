# Prime Coding Test
This is a small coding test to see how you write code in in a psuedo-realistic sort of environment. The project is setup enough that should you be unfamiliar with some of the technology, you should be able to figure out how it works from reading the existing classes and structures.  The point of this test isn't to see if you're willing to throw away your free time to get a job, it should only take 20 minutes to an hour depending on how familiar you are with the technology.  If you can't figure out something, just write a quick comment about what you were trying to accomplish. I'm more interested in your tendencies and how you think than if you can build a perfect solution.

## What You're Working With
This is a .Net Core MVC hosted Angular SPA with a fake in memory database that is connected using Entity Framework. It has a home page, a simple counter (not part of the test), and a weather section.

## What You're Trying To Do
1. Update the Weather section to properly set the Summary (chilly, hot, etc.) based on what the temperature is
    * This should be reusable so that if another part of the system dealt with temperatures, it could reuse this
    * Don't worry too much about what temperature range each category falls in, just pick some values that make sense to you
2. Add a way to add new temperature readings.
   * This can be simply an Add button that just randomizes the data and uses `DateTime.Now()`
   * Or it could be a way to enter a specific temperature and time.  Don't worry about adding a datepicker.
3. Update the home page to grab the latest temperature reading and display it in a nice way such as:
> It's a cold day outside as of 3:13 PM

## What You're Going To Need
1. A git client
2. An IDE.
   * Well technically you don't need one.  .Net Core is cross platform and runs on the command line so feel free to use vim or notepad++ if you're one of those people
   * Visual Studio Code https://code.visualstudio.com/
     * You may need to add some plugins to support C# and Typescript  I suggest using: Angular Language Service, C#, Debugger for Chrome
   * Visual Studio 2017 (any edition) https://www.visualstudio.com/vs/community/
     * Either of those are already setup where hitting F5 will run the project and kick open your browser to the app
3. .Net Core SDK https://www.microsoft.com/net/download/core
4. NodeJs https://nodejs.org/en/

## How To Get Started
2. Clone this repository to your computer (https://github.com/Pacesetter/AngularCodingTest.git)
3. Open the folder (visual studio code) or project (visual studio 2017) in your IDE
4. This should kick off a `dotnet restore` automatically, but if not manually run that in a command prompt
4. Run `npm install`
5. Hit F5 in visual studio (or run `dotnet run` if you're not in one of the visual studios)
6. You should hopefully be viewing the project in your browser after the build finishes.
   * Client side changes (HTML, TS files) automatically refresh your browser and appear in seconds after hitting save
   * Server side changes (CS files) require a quick reboot of the server.
7. When you're done, submit your code by zipping up the ClientApp, Controllers, any other server folders you added, and email it to me.  Please do not zip the entire project as it will include node_modules which is a giant beast and will inflate your zip size to 30+mb instead of being <1mb

## WTF?
If you run into an error or something that you can't figure out, just ask!  It's entirely possible that I've missed something in the setup steps that was already done on my machine before writing this test.
