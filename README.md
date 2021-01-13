 
 [<img align="right" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" width="50" height="50" />](http://www.instagram.com/gajjartejas)
 [<img align="right" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg" width="50" height="50" />](http://www.twitter.com/gajjartejas)
 [<img align="right" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/reddit.svg" width="50" height="50" />](http://www.reddit.com/u/gajjartejas)

# React-Navigation-5-Login-Animation-Demo

As we know switch navigator is removed from react navigation 5. I have used redux to switch navigation componments. A React Navigation 5 Login demo using react native reanimated, redux and react native splash screen.

## Demo

![](demo.gif)

## Code
See: `src/screen/Auth/LoadingScreen.js` File.
```
//Assign above transition
const TRANSITIONS = [TRANSITION_FADE, TRANSITIONS_SLIDE_BOTTOMOUT_FADE, TRANSITION_SCALE_FADE, TRANSITION_FADE_SILDE_BOTTOM_RIGHT];

//Pick 0 to 3 you would like
const TRANSITION = TRANSITIONS[0];
```
## Thirdparty library used
1. React navigation
2. React native reanimated
3. Redux, React-Redux and Redux Thunk
4. React native async storage
5. React native material textfield
