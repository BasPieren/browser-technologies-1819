# Browser Technologies @cmda-minor-web 1819 ⚙️

This is my repo for project 1 of the web development minor, Browser Technologies Edition!

![Project 1 screenshot](https://i.imgur.com/xbocDDu.png)

## Table of Contents 🗃
* [To Do](#to-do-)
* [Description](#description-)
* [Installing](#installing-)
  * [Packages and Technologies](#packages-and-technologies)
* [API](#api-)
* [Browser Technologies](#browser-technologies-)
* [Sources](#sources-)
  * [Honourable Mentions](#honourable-mentions)
* [Licence](#licence-)

## Description 📝
The purpose of this course is to learn how to test a website on critical features that aren't always as obvious as they may seem and how to apply 'Progressive Enhancement'.

### Packages and Technologies
This project makes use of the following packages and technologies:

* [OBA-wrapper by @maanlamp](https://github.com/maanlamp/OBA-wrapper)

## API 🐒
I made use of the following API for this project:

* [OBA API](https://zoeken.oba.nl/api/v1/)

## Browser Technologies 🏃🏻

### Features
This is a list of all the features I have tested:

1. __Turn off images__
  - With out images my web app still works pretty good. The layout keeps its structure. The only thing missing is an alt text on some images.
2. __Turn off custom fonts__
  - *No custom fonts are used.*
3. __Turn off color & set color blindness__
  - Color blindness is not a huge problem in my web app. Contrast is still high enough to be able to read the text.
4. __Turn off mouse/trackpad__
  - The web app is still useable with a mouse and keyboard. The only problem is that the user can't reach the section with recommended books.
5. __Turn off broadband internet__
  - When the web app is tested on a slow 3G connection loading takes about 12 seconds when not counting in the API request and 48(!) seconds when including the API request.
6. __Turn off Javascript__
  - When Javascript is turnt off the whole web app stops working and is empty except for the header. This is because all content gets generated by Javascript.
7. __Turn off cookies__
  - *No cookies are used.*
8. __Turn off localStorage__
  - When localStorage is disabled the recommended books and agenda items are not shown.

### Device Lab & Screenreader Test


### Problems
This is a list of things I want to do in this project:

- [ ] .

## Sources 📚

### Honourable Mentions

## Licence 🔓
MIT © [Bas Pieren](https://github.com/BasPieren)