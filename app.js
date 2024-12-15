const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const recentWorkContainer = document.querySelector('.recentWork__container');
// recent btn
const everything_btn = document.querySelector('.recentWork__title--everything');
const web_btn = document.querySelector('.recentWork__title--web');
const app_btn = document.querySelector('.recentWork__title--app');
const landingPage_btn = document.querySelector(
    '.recentWork__title--landing-page'
);
const design_btn = document.querySelector('.recentWork__title--design');

// skill
const skillContainer = document.querySelector('.technologies__container');

// animated
const ElementsAnimated = $$('.onScroll');
const listElementCount = $$('.counter');

const app = {
    projects: [
        {
            name: 'Shop phone',
            src: '',
            type: 'Website',
            link: 'https://github.com/Toanf2103/laravel.777_zone',
        },
        {
            name: 'Exam online',
            src: '',
            type: 'Website',
            link: 'https://github.com/DATN-exam',
        },
        {
            name: 'MP3',
            src: '',
            type: 'Website',
            link: 'https://github.com/Toanf2103/laravel-zingmp3',
        },
        {
            name: 'Rent moto',
            src: './img/image_project/music.png',
            type: 'Website',
            link: 'https://github.com/Toanf2103/rent-moto',
        },
        {
            name: 'WC2022DataCrawler',
            src: '',
            type: 'Landing page',
            link: 'https://github.com/Toanf2103/api-wc-wiki',
        },
    ],

    skills: [
        {
            name: 'nodejs',
            src: '/img/image_language/nodejs.png',
        },
        {
            name: 'laravel',
            src: '/img/image_language/laravel-logo.png',
        },
        {
            name: 'nestjs',
            src: '/img/image_language/nestjs.png',
        },
        {
            name: 'html',
            src: '/img/image_language/html.png',
        },
        {
            name: 'js',
            src: '/img/image_language/js.png',
        },
        {
            name: 'ts',
            src: '/img/image_language/ts.png',
        },
        {
            name: 'react',
            src: '/img/image_language/react.png',
        },
        
        {
            name: 'sqlserver',
            src: '/img/image_language/sqlserver.png',
        },
        {
            name: 'mongodb',
            src: '/img/image_language/mongodb.png',
        },
        {
            name: 'github',
            src: '/img/image_language/github.png',
        },
    ],

    // render recent works
    renderRecentWork: function (projects) {
        const htmls = projects.map((project, index) => {
            return `
                <div class="recentWork__container--item" data-index="${index}">
                    <div class="item">
                        <div class="item__thumb">
                            <div class="item__title">
                                <p>${project.type}</p>
                                <h3>${project.name}</h3>
                            </div>
                            <div class="item__link">
                                <a href="${project.link}" target="_blank">
                                    <button class="button">Link</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        recentWorkContainer.innerHTML = htmls.join('');
    },

    everythingFilter: function () {
        everything_btn.onclick = () => {
            this.renderRecentWork(this.projects);
        };
    },

    webFilter: function () {
        web_btn.onclick = () => {
            const web = this.projects.filter((project) => {
                return project.type === 'Website';
            });
            this.renderRecentWork(web);
        };
    },

    appFilter: function () {
        app_btn.onclick = () => {
            const app = this.projects.filter((project) => {
                return project.type === 'App';
            });
            this.renderRecentWork(app);
        };
    },

    landingPageFilter: function () {
        landingPage_btn.onclick = () => {
            const landingPage = this.projects.filter((project) => {
                return project.type === 'Landing page';
            });
            this.renderRecentWork(landingPage);
        };
    },

    designFilter: function () {
        design_btn.onclick = () => {
            const design = this.projects.filter((project) => {
                return project.type === 'Design';
            });
            this.renderRecentWork(design);
        };
    },

    // render skills
    renderSkills: function (skills) {
        const htmls = skills.map((skill, index) => {
            return `
                <div class="skill__container--item" data-index="${index}">
                    <img src="${skill.src}" alt="${skill.name}" class="skill__item-image"/>
                </div>
            
            `;
        });
        skillContainer.innerHTML = htmls.join('');
    },

    start: function () {
        this.renderRecentWork(this.projects);
        this.renderSkills(this.skills);
        this.everythingFilter();
        this.webFilter();
        this.appFilter();
        this.landingPageFilter();
        this.designFilter();
    },
};

// ANIMATED
function handleElement(element) {
    var rect = element.getClientRects()[0];
    // Lay ra do dai cua man` hinh `
    var heightScreen = window.innerHeight;
    // check xem element co ben trong man hinh` hay k
    if (!(rect.bottom < 0 || rect.top > heightScreen)) {
        // ben trong man` hinh thi` code o day
        element.classList.add('default');
    } else {
        // ben ngoai man` hinh thi code o day
        element.classList.remove('default');
    }
}

function checkAnimated() {
    ElementsAnimated.forEach((element) => {
        handleElement(element);
    });
}

window.onscroll = checkAnimated;

// COUNT ANIMATED
function count(element) {
    var number = element.querySelector('.number');
    var finish = parseInt(number.innerText);
    var count = 1000;
    var step = finish * 2;
    let counting = setInterval(() => {
        count -= step;
        if (count < finish) {
            clearInterval(counting);
            number.innerText = finish;
        } else {
            number.innerText = count;
        }
    }, 10);
}

listElementCount.forEach((item) => {
    count(item);
});

app.start();
