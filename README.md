# Browser Technologies @cmda-minor-web 1819 ⚙️

This is the repo for the Browser Technologies course.

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [API](#api-)
* [Research](#research-)
  * [Wireflow](#wireflow)
  * [Functional, Usable & Pleasurable](#functional,-usable-&-pleasurable)
  * [Color and Contrast](#color-and-contrast)
  * [Screenreader](#screenreader)
* [How It Works](#how-it-works-)
  * [Progressive Enhancement](#progressive-enhancement)
  * [Feature Detection](#feature-detection)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## To Do 📌
This is a list of things I want to do in this project:

- [X] Add HTML layer.
- [X] Add CSS Layer.
- [X] Add Javascript layer.
- [X] Test contrast and color.
- [X] Test screenreader.
- [ ] Add feature detection.

## Description 📝
For this assignment I made a demo web app based on a use case. The goal is to make sure that all users, with all browsers, get to use at least the core functionality in every context. My use case is:

* *I want to be able to design, save and print my own t-shirt with a nerdy text.*

## Installing 🔍
To install this application enter the following into your terminal:
```
git clone https://github.com/BasPieren/browser-technologies-1819.git

cd browser-technologies-1819

npm install

npm run server
```

### Packages and Technologies
This project makes use of the following packages and technologies:

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [EJS](https://ejs.co/)

## Research 🕵🏻
Here I explain the research I did for this project.

### Wireflow
I started off by drawing a simple lo-fi wireframe which showcases the basic functionality.

![Wireflow](https://i.imgur.com/r59AKXu.jpg?1)
> *A lo-fi wireflow*

### Functional, Usable & Pleasurable
Then I wrote down the functional/reliable, usable and pleasurable layers of the web app.

  * __Functional/Reliable:__ For the app to be functional/reliable we start with HTML/EJS. The user needs to be able to use the most basic functionality of the web app. In this case the user needs to be able to choose the color and text of the t-shirt.

  * __Useable:__ For the app to be useable we start adding CSS which improves the UX and and makes the UI overall prettier to look at.

  * __Pleasurable:__ For the app to be pleasurable we start adding Javascript. Now we can start at looking into adding "quality of life" changes like animations and user feedback like a progressbar.

### Color and Contrast
When I had the finished the basic HTML/EJS structure and CSS styling I decided to test the colors I had choosen on their contrast ratings using [Color.review](https://color.review). Color.review gives colors a score based on the foreground and background color. Headlines need a score of at least 3 and text needs a score of at least 4.5. Interface elements like buttons need an score of at least 3.

![Green](https://i.imgur.com/ZhEb5QX.png)
My primary green color didn't score to well in the test. Because the color would be both a headline and interface element I made it darker so it would get a score of at least 3.

![Yellow](https://i.imgur.com/sfXGHIF.png)
Yellow also didn't score to good but this is an interesting case. Because here we are talking about a color that is used for the t-shirt its self and not for a text or interface element. I decided to not darken the color because then it wouldn't be yellow anymore. To compensate for this I added labels to the color selections.

![Orange](https://i.imgur.com/n0PLfE2.png)
And the same goes for orange. So here I also darkend the color.

### Screenreader
I also tested my application with the build in mac VoiceOver screenreader to test if you would be able to navigate through the app using you keyboard. And as it turns out navigation using the keyboard works good. You can get to every element and navigate to the next page. The only problem is that the user can't select a color for their t-shirt.

## How It Works 🛠️
Here I explain some of the core features of this project:

### Progressive Enhancement
The web app is divided into 3 layers: __HTML__, __CSS__ and __Javascript__. Everything is being served from a __Node.js__ server which is run on my localhost.

I started off by building the basic structure and styling using HTML/EJS and CSS. I wanted to build the core functionalities as far as I could without using Javascript. What I did was when ever the user submits the the form the value gets saved in a `const` on the server which is then used as data for the EJS templates. This way the web app still works even without Javascript.

When I got that working I started adding the Javascript layer. I used Javascript to add `.localStorage()`. By doing this the user is able to pick up where they left off if they weren't able to completely fill in all choices.    

### Feature Detection

## Sources 📚

* None!

### Honourable Mentions

* [Jesse Dijkman](https://github.com/jesseDijkman1)
* [Robin Stut](https://github.com/robinstut)

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)
