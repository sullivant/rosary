# rosary

A simple, self-hostable application designed to help you [pray the Rosary](https://www.usccb.org/how-to-pray-the-rosary).

Like a lot of folks:
- I want to do more in prayer.  
- I write software for a living.  
- I wanted to do some front-end tinkering.

TypeScript + VueJS + Vite seemed like a logical place to start. 

## The General Idea

The general idea here is that when I visit this page it should have a pre-prepped Rosary setup, with the current Mysteries in the right spots for proper contemplation.  

Each time I finish a prayer I wanted to simply swipe to the next card in the stack, showing progress as I go along or as a reminder in case I have forgotten a prayer or what comes next, etc.

This, in no way, is better than carrying beads with you - but, see the list above.  

![screenshot of the basic app](/public/screenshot.png)

## This is Open Source

The license is GNU GPLv3.0 - do with this what you will.  Contribute a Pull Request, fork and improve, fork and laugh... but at least keep those of us trying to pray more in your own prayers, ok?

# Running or Developing

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
