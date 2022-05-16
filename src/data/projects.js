import html5 from '../images/html5.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import react from '../images/react.svg';
import bootstrap from '../images/bootstrap.svg';
import semanticui from '../images/semantic.svg';
import api from '../images/api.svg';

import climbTaiwan from '../images/climbTaiwan.png';
import portfolio from '../images/portfolio.png';
import fremontPokerRoom from '../images/fremontPokerRoom.png';

export const projectList = [
    {
        title: "Fremont Poker Room Data Tracker",
        description: "An application created for a bi-annual poker tournament. This application uses the google-spreadsheet API to enter, store, and retrieve the results of the tournaments, while also displaying the overall results of all tournaments together.",
        image: fremontPokerRoom,
        github: 'https://github.com/lukegronert/poker-app',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: react,
                alt: 'React Logo'
            },
            {
                image: semanticui,
                alt: 'Semantic UI Logo'
            },
            {
                image: api,
                alt: 'google-spreadsheet API'
            }
        ],
        website: 'https://epic-goldstine-8b8c95.netlify.app/'
    },
    {
        title: 'Climb Taiwan',
        description: 'A website that provides information about various rock climbing areas and their respective routes around Taiwan. Created as a freelance project with vanilla Javascript, as well as the Bootstrap framework for quick and easy design.',
        image: climbTaiwan,
        github: 'https://github.com/ClimbTaiwan/ClimbTaiwanWebsite',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: javascript,
                alt: 'JavaScript Logo'
            },
            {
                image: bootstrap,
                alt: 'Bootstrap logo'
            }
        ],
        website: 'https://climbtaiwan.com'
    },
    {
        title: 'Portfolio Website',
        description: 'The website you are currently on. It is used to display my skills and projects, while also giving a little more information about who I am. Created with a focus on mobile-first design. Check out the github repository to see how it was made!',
        image: portfolio,
        github: 'https://github.com/lukegronert/lukegronert.github.io',
        technologies: [
            {
                image: html5,
                alt: 'HTML5 Logo'
            },
            {
                image: css,
                alt: 'CSS Logo'
            },
            {
                image: react,
                alt: 'React Logo'
            },
            {
                image: semanticui,
                alt: 'Semantic UI Logo'
            }
        ],
        website: '/'
    },
]