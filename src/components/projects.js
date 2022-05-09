/**
 * All projects I have done. I just add an image and a url per project.
 */

const projects = [
    {
        id: 1,
        title: 'Binance Api',
        img: 'img/apiBinance.jpg',
        alt: 'binance-api',
        link: 'https://andres-webdev.github.io/binance-api/',
        category: 'web',
        description: `This app shows a list of cryptocurrencies pairs(USDT) from Binance platform 
        with its actual market price. When It does the request to the Binance API, updating every 5 seconds, it sorts 
        data from highest to lowest price, with a sort method. Besides, It calls each element of the array, with
        a map method, mounting every component with its props. Then, It evaluates, with RegExp, every component with
        pair USDT and higher than 1 USDT, to represent a row in the list and show the result.`,
        linkGithub: 'https://github.com/andres-webdev/binance-api',
        goals: [
            `Node.js and NPM for JavaScript runtime environment and package management.`,
            `React.js as a Front-End library to build interactive user interfaces. I used state Hooks to store data
            from the api and handle conection errors.`,
            `Axios library to handle asynchronous RESTAPI requests using useEffect Hook.`,
            `CSS3 for styling and HTML5 for the layout.`
        ]
    },
    {
        id: 2,
        title: 'Form',
        img: 'img/form.jpg',
        alt: 'form',
        link: 'https://andres-webdev.github.io/simple-form/',
        category: 'movil',
        description: `This app shows a form with 4 input fields. It evaluates each input field, if all are correct 
        it shows a green border in other cases are red with a corresponding issue message. Finally, it shows an 
        alert message with all you data submitted. I used arrow functions, ternary operators, RegExp, validations
        and render props to share and validate value props between components.`,
        linkGithub: 'https://github.com/andres-webdev/simple-form',
        goals: [
            `Node.js and NPM for JavaScript runtime environment and package management.`,
            `React.js as a Front-End library to build interactive user interfaces. I created state Hooks to store every
            input typed by the user.`,
            `CSS3 for styling and HTML5 for the layout.`
        ]
    },
    {
        id: 3,
        title: 'Wikipedia Api',
        img: 'img/wikipedia.jpg',
        alt: 'wikipedia',
        link: 'https://andres-webdev.github.io/wikipedia-search-api/',
        category: 'web',
        description: `This app shows a definition, from Wikipedia website of every word get into searchbar. 
        When It does the request to Wikipedia API, and gets an array of objects. It calls each element of the 
        array, with a map method, for mounting a component to show the list. I used render props that allow me
        share props between components. I used arrow functions and RegExp to evaluate and sort every element 
        of the list, showing a row in the list with a link and a snippet of the article.`,
        linkGithub: 'https://github.com/andres-webdev/wikipedia-search-api',
        goals: [
            `Node.js and NPM for JavaScript runtime environment and package management.`,
            `React.js as a Front-End library to build interactive user interfaces. I used state Hooks to store data
            from the api and handle conection errors.`,
            `Axios library to handle asynchronous RESTAPI requests using useEffect Hook.`,
            `CSS3 for styling and HTML5 for the layout.`
        ]
    },
    {
        id: 4,
        title: 'Words Counter',
        img: 'img/clock.jpg',
        alt: 'words',
        link: 'https://andres-webdev.github.io/words-counter/',
        category: 'movil',
        description: `This app counts every character and word input by user. And It shows the number of characters and 
        words in the section below. I used render props that allow me share props between components. Also, I used 
        arrow functions, ternary operators and RexExp.`,
        linkGithub: 'https://github.com/andres-webdev/words-counter',
        goals: [
            `Node.js and NPM for JavaScript runtime environment and package management.`,
            `React.js as a Front-End library to build interactive user interfaces. I created state Hooks to store every
            input typed by the user.`,
            `CSS3 for styling and HTML5 for the layout.`
        ]
    },
    {
        id: 5,
        title: 'Tasks',
        img: 'img/tasks.jpg',
        alt: 'tasks',
        link: 'https://andres-webdev.github.io/tasks/',
        category: 'movil',
        description: `This app allows you add, mark as completed and delete tasks inside a list. It calls each 
        element of the array, with a map method, for mounting a component to show the list. I used render props 
        that allow me share props between components. Also, I used arrow functions, ternary operators and rest 
        parameters syntax that allows a function to accept an indefinite number of arguments as an array.`,
        linkGithub: `https://github.com/andres-webdev/tasks`,
        goals: [
            `Node.js and NPM for JavaScript runtime environment and package management.`,
            `React.js as a Front-End library to build interactive user interfaces. I created state Hooks to store every
            input typed by the user.`,
            `Uuid library to generate unique ids for every element of the list.`,
            `CSS3 for styling and HTML5 for the layout.`
        ]
    },
];

export default projects;