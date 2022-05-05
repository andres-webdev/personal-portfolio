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
        with its actual market price. Every crypto has to be higher than 1 USDT. Updating every 5 seconds.`,
        linkGithub: 'https://github.com/andres-webdev/wikipedia-search-api',
        goal1: `I created an axios instance willing me to use the corresponding endpoint, then I used the
        get method to request data and get a response, using promises, async and await inside a useEffect Hook.`,
        goal2: `I created a state Hook to store data from the api and another Hook for handle conection errors.`,
        goal3: `After that, I sorted data from highest to lowest price, with a sort method. Then I called each
        element of the array, with a map method, mounting a component with its props`,
        goal4: `These components evaluate each element with pair UDST and higher than 1 USDT 
        to represent a row in the list and show the result.`
    },
    {
        id: 2,
        title: 'Form',
        img: 'img/form.jpg',
        alt: 'form',
        link: 'https://andres-webdev.github.io/simple-form/',
        category: 'movil',
        description: `This app shows a form with 4 input fields.It evaluates each input field, if all are correct 
        it shows a green border in other cases are red with a corresponding issue message. Finally, it shows an 
        alert message with all you data submitted.`,
        linkGithub: 'https://github.com/andres-webdev/simple-form',
        goal1: `I created 5 class components(form, username, email, password y confirm password) and a functional 
        component(showmsg). The form component validates and shows the result because inside of it are the 
        other components and share their props.`,
        goal2: `Each component has 3 states(input, msgError y color). When you input the corresponding value, 
        500ms later it validates and evaluates that input value.`,
        goal3: `If there an error the state msgError and color change, and the showmsg component shows that 
        message below the input field but if there is not message of error showmsg doesn't show anything`,
        goal4: `I used arrow functions, ternary operators, regular expresions, validations and render props to 
        share value props between components.` 
    },
    {
        id: 3,
        title: 'Wikipedia Api',
        img: 'img/wikipedia.jpg',
        alt: 'wikipedia',
        link: 'https://andres-webdev.github.io/wikipedia-search-api/',
        category: 'web',
        description: 'This app shows a definition, from Wikipedia website, of every word get into searchbar.',
        linkGithub: 'https://github.com/andres-webdev/wikipedia-search-api',
        goal1: `To handle requests and responses I used Axios, that is a http client library, 
        I created an instance with an endpoint from  api of wikipedia. For each time that you input 
        a letter it callback a function where It use get method to request data by a promise 
        with async and await`,
        goal2: `Then the response of the request is storing in a state Hook`,
        goal3: `After that, I called each element of the array, with a map method, mounting a component with its props`,
        goal4: `These components show a title that contains a link to the article in wikipedia. Besides, It shows a snippet about the content requested` 
    },
    {
        id: 4,
        title: 'Counter Words',
        img: 'img/clock.jpg',
        alt: 'words',
        link: 'https://andres-webdev.github.io/words-counter/',
        category: 'movil',
        description: `This app counts every character and word input by user. And It shows the result in the section below`,
        linkGithub: 'https://github.com/andres-webdev/words-counter',
        goal1: `You input data into the textarea and these data are store in a state Hook.`,
        goal2: `These data are passed to his parent component through his render props`,
        goal3: `Then these data are passed to show component and evaluate every line break throught regular expressions 
        to show the words of the string and every character below textarea`,
        goal4: `I used render props, state Hooks, ternary operators and regular expresions.` 
    },
    {
        id: 5,
        title: 'Tasks',
        img: 'img/tasks.jpg',
        alt: 'tasks',
        link: 'https://andres-webdev.github.io/tasks/',
        category: 'movil',
        description: `This app allows you add, mark as completed and delete tasks inside a list.`,
        linkGithub: `https://github.com/andres-webdev/tasks`,
        goal1: `There are 3 components. In form component you input the task adding in the list. I used a state Hook 
        for store it. Also I used uuidv4 library for each task have an unique id.`,
        goal2: `With main component(list) you add, deleted and mark as completed each task. To add a task, through form component, 
        I stored the object task with the rest parameter into an array. Then I used map method to mount task component with his render props.`,
        goal3: `To delete a task I used filter method to filter all elements that does not match with id, throught task component 
        when is clicked the deleted icon. `,
        goal4: `To mark a task as completed I evaluated each task with map method and change the props called "completada", 
        through task component using render props.` 
    },
];

export default projects;