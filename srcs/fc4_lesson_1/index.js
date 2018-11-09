const apiKey = `24ad2a89476a467e8241042807458fd9`;

const createArticleElement = (tag, className, content) => {
    const element = document.createElement(tag);

    Array.isArray(className) ?
        className.map(name => element.classList.add(`${name}`))
    :
        element.classList.add(`article_${className}`);

    element.innerHTML = content ? content : ``;

    return element;
};

class App {
    constructor() {
        this.findByQuery = this.findByQuery.bind(this);
        this.findByCategoy = this.findByCategoy.bind(this);
        this.fetchTopHeadlinesNews = this.fetchTopHeadlinesNews.bind(this);

        this.activeCategory = document.getElementById(`categories-ul`).children[0];
        this.loader = document.getElementById(`loader`);
    }

    init() {
        document.getElementById(`search-btn`).addEventListener(`click`, this.findByQuery);
        document.getElementById(`home`).addEventListener(`click`, this.fetchTopHeadlingsNews);
        document.getElementById(`categories-ul`).addEventListener(`click`, this.findByCategoy);

        this.fetchTopHeadlinesNews();
    }

    findByQuery(e) {
        e.preventDefault();

        const query = document.getElementById(`search-input`).value;

        if (query.length === 0) {
            return;
        }

        this.loader.classList.remove(`hide`);

        document.getElementById(`articles-ul`).innerHTML = ``;

        fetch(`https://newsapi.org/v2/everything?language=en&q=${query}&sortBy=publishedAt&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(res => this.setArticles(res.articles))
            .then(() => this.loader.classList.add(`hide`));
    }

    findByCategoy(e) {
        if (e.path[0].tagName === `LI`) {
            this.activeCategory.classList.remove(`active`);
            this.fetchTopHeadlinesNews(e.path[0].outerText);
            this.activeCategory = e.path[0];
            this.activeCategory.classList.add(`active`);
        }
    }

    fetchTopHeadlinesNews(category = `business`) {
        this.loader.classList.remove(`hide`);
        
        document.getElementById(`articles-ul`).innerHTML = ``;

        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
            .then(res => res.json())
            .then(res => this.setArticles(res.articles))
            .then(() => this.loader.classList.add(`hide`));
    }

    setArticles(articles) {
        articles.length > 0 ?
            this.createArticles(articles)
        :
            document.getElementById(`articles-ul`).innerHTML = `Nothing found on your request :(`;
    }
    
    createArticles(articles) {
        let fragment = document.createDocumentFragment();

        articles.map(article => {
            const {
                title,
                author,
                content,
                urlToImage,
                url
            } = article;

            let articleUI = document.createElement(`li`),
                header = createArticleElement(`h3`, `header`),
                body = createArticleElement(`article`, `body`),
                footer = createArticleElement(`div`, `footer`),
                articleImg = createArticleElement(`img`, `img`),
                imgWrapper = createArticleElement(`div`, `img-wrapper`),
                articleSourceContent = createArticleElement(`i`, [`fa`, `fa-external-link`]),
                articleSource = createArticleElement(`a`, `source`),
                articleTitle = createArticleElement(`p`, `title`, title),
                articleContent = createArticleElement(`p`, `content`, content ? this.sliceContent(content) : `We don't have any information about this news. Try to open source <i class="fa fa-external-link"></i> of this news.`),
                articleAuthor = createArticleElement(`p`, `author`, author ? author : `Unknown author`);

            articleImg.src = urlToImage ? urlToImage : `./images/no_image.png`;

            imgWrapper.appendChild(articleImg);

            articleSource.href = url;
            articleSource.target = `blank`;
            articleSource.appendChild(articleSourceContent);

            header.appendChild(articleTitle);
            header.appendChild(articleSource);

            body.appendChild(imgWrapper);
            body.appendChild(articleContent);

            footer.appendChild(articleAuthor);

            articleUI.appendChild(header);
            articleUI.appendChild(body);
            articleUI.appendChild(footer);

            fragment.appendChild(articleUI);
        });

        document.getElementById(`articles-ul`).appendChild(fragment);
    }

    sliceContent(string) {
        return string.slice(0, string.indexOf(`[+`))
    }
}

const onLoad = () => {
    const app = new App();

    app.init();
};

document.addEventListener("DOMContentLoaded", onLoad);
