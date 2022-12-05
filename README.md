
# Dev·Doro

A pomodoro task tracker for developers who forget to blink and move around every so often. Uses Next.js and IndexedDB for a nice PWA experience without logins.

## Table of Contents

- [Dev·Doro](#dev-doro)
  * [Table of Contents](#table-of-contents)
  * [Tech Stack](#tech-stack)
  * [Demo](#demo)
  * [Lessons Learned](#lessons-learned)
  * [Roadmap](#roadmap)
  * [Screenshots](#screenshots)
    + App Landing Screen
    + App Settings
    + Adding a task
    + Filtering tasks
    + Waves rise as timer progresses
    + Finishing a cycle prompts a stretch!
  * [Run Locally](#run-locally)
  * [Acknowledgements](#acknowledgements)

## Tech Stack

- Uses `Next.js` with `TypeScript`,
- Styling is done with `TailwindCSS`, `daisyUI` and daisy's `themechange` helper,
- `next-pwa` to set up PWA,
- `dexie.js` as a wrapper for IndexedDB,
- `react-beautiful-dnd` to drag tasks around,
- `Jest` and `testing-library` for tests. 


## Demo

Accessible at: https://devdoro.raissak.com/

![Demo gif](https://i.imgur.com/VTIaHb9.gif)

## Lessons Learned

This project, although not completely finished, was great to practice TypeScript and React Hooks!

- **useRef** was used for the static overlay behind modals,
- **useState** shows up when setting up task filters, swapping timers, changing the theme, and to activate stretch challenges,
- **useCallback** was used to handle the change between a pomodoro cycle and a break cycle, for instance, to dispatch appropriate actions,
- **useReducer** kept the change of maximum duration, current duration, and cycle mode simpler, 
- **useMemo** is involved in the calculation of the wave height in the background as a cycle progresses,
- **useEffect** handles modal clicks, focus trapping, initial retrieval of theme, starting a new challenge, and timer ticks,
- **useContext** wraps things whenever a modal is involved, handles task filters and database actions, and pairs up with **useReducer** to handle all things timer-related. 

## Roadmap

- [ ]  Add option to select sounds/alarms and shut them off 
- [ ]  Add counter of cycles
- [ ]  Move user settings to indexedDB so they're not reset 

<details><summary>
  
  ## Screenshots
  
</summary>

### App Landing Screen
![App Landing Screen](https://i.imgur.com/YQybYr4l.png)

### App Settings 
![App Settings](https://i.imgur.com/64kYEXFl.png)

### Adding a task
![Adding a task](https://i.imgur.com/M14Hx5Kl.png)

### Filtering tasks
![Filtering tasks](https://i.imgur.com/u5u09Cil.png)

### Waves rise as timer progresses
![Waves rising](https://i.imgur.com/m9AWDP6l.png)

### Finishing a cycle prompts a stretch!
![Exercise modal](https://i.imgur.com/syTSfBNl.png)

</details>

## Run Locally

Clone the project

```bash
  git clone https://github.com/raissa-k/devdoro.git
```

Go to the project directory

```bash
  cd devdoro
```

Install dependencies

```bash
  npm install
```

Start the app in development mode

```bash
  npm run dev
```


## Acknowledgements

 - The iconic, one-and-only [Pomofocus](https://pomofocus.io/) for the inspiration.
 - "Pomopond" [Figma file](https://www.figma.com/file/Mcss1pk0YR7spZOaJtj2IU/Pomopond?t=shGod3GwunBGcOXC-0)

