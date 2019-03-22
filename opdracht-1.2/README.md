# Opdracht 1.2 🏃🏻
Here I explain the all the tested features and what I did or would do to fix it.

## Features
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

## Device Lab & Screenreader Test
Here I describe the results from the device lab and screenreader tests.

### Device Lab
When tested on multiple devices of different sizes my web app just breaks because it is not responsive. Text is still readable but allot of elements are out of position or scale into a weird size.

### Screenreader
To test the screenreader I used the ChromeVox extension for Goolge Chrome. I started tabbing through the web app And it worked ok. When ever I tab trough the web app the focus switches between the different `<a>` tags on the page and the screenreader reads the text inside each button. The problem is that the user is missing the context of what the button does.

I also tested VoiceOver, the IOS build in screenreader which allows the user to navigate trough a web page using their keyboard and which reads all the elements which the users selects. This is way more specific and allows the user to select all elements on the page including text elements. The screenreader reads out what the user is selecting and what is inside that element. The only thing that is missing is that the screenreader doesn't read out attributes like the header and article. This can make it confusing for the user when they are navigating because they don't know when they are on a new element like for example an article.

## Problems
This is a list of problems I want to do in fix:

- [x] Add alt text to all images.
- [X] Make the web app usable without mouse or trackpad.
- [ ] Make the web app usable without `localStorage`
  * To make the web app usable without `localStorage` the web app needs to be able to make an new API request when there is no `localStorage`.