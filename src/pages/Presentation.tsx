/*
function Presentation {
    return <h1>Présentation</h1>
}

const Presentation = function () {
    return <h1>Présentation</h1>
}
*/
import '../styles/Presentation.css';
const Presentation = () => {
    const age = 200;
    const name = 'Jean Michel';
    const is_logged = false;
    const jsx = <span>Je suis un span.</span>;
    const string_reloue = `{C'est un texte} avec des -> <crochet> ""`;
    const li_classe = 'blue';
    const image = {
        url : 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif',
        description: 'Un chat à lunette',
        titre: 'Un super titre'
    }
    const color = 'rebeccapurple'
    const style = {
        color,
        fontFamily: 'script'
    }

    const attributes = {
        style,
        className: 'ma_classe',
        id: 'my_paragraphe',
        title: 'titre du paragraphe'
    }

    return (
        <main className='Presentation'>
            <h1>Présentation</h1>

            <section>
                <h2>Les Singles Pages Applications</h2>

                <p>Les <b>SPA</b> sont des applications web composées d'un unique
                fichier HTML ( index.html ), et de scripts.
                </p>
                <p>Tous le contenu du site est rendu par le Javascript, le HTML de base
                est vide.
                </p>
                <p>Le navigateur ne fait donc qu'une requête vers le serveur pour récupérer
                un <b>bundle</b> qui contient l'ensemble de l'application dans un format de site
                static ( HTML, JS, CSS, assets ), via la page index.html.
                </p>
                <p>Toute la gestion des "pages", du contenu à afficher est gérer en JS.</p>

                <h3>Outils</h3>

                <p>On peut faire des SPA avec différents outils : </p>
                <ul>
                    <li>Angular 2+, framework créé par Google en 2016</li>
                    <li>Angular JS ( dead ), créé par Google en 2014</li>
                    <li>React, librairie, créé par Facebook / Instagram ( Meta ) en 2013</li>
                    <li>Svelte, framework créé par Rich Harris en 2016</li>
                    <li>Vue JS, framework, créé par Evan You ( un ancien dev de Angular.JS ), en 2014.</li>
                </ul>

                <h2>Autres architectures de développement</h2>

                <p>Pour le développement web, on retrouve d'autres architectures courantes : </p>
                <div>
                    <p>Le <b>MVC</b> <i>( Model, Vue, Controller )</i> : Symfony, Spring MVC, Node...</p>
                    <p>Le <b>SSR</b> <i>(Server Side Rendering )</i> : dérivé des SPA,
                    les scripts sont éxécutés côté serveur, pour n'envoyer "que" du HTML au navigateur :
                    Next.js ( Framework pour React ), Nuxt ( Vue ), Angular avec ng-universal, Svelte Kit.
                    </p>
                </div>

            </section>
            <section>
                <h2>Présentation de React</h2>

                <p>React permet de créer des composants.</p>
                <p>Un composant React, c'est une fonction qui retourne du JSX.</p>
                <p><i>Avant, c'était des classes.</i></p>

            </section>
            <section>
                <h2>Le JSX</h2>
                <p>JSX : Javascript XML.</p>
                <p>Ça ressemble à du HTML, en respectant les normes XML : exemple les balises
                sans contenu doivent être orpheline.
                </p>
                <p>Les noms de balises HTML doivent être en minuscule, les noms de composants
                se mettent en PascalCase.
                </p>
                <p>Le JSX est plus proche du JS que du HTML. Les mots réservés en JS ne peuvent pas être utilisés en JSX.</p>
                <ul>
                    <li>class : className</li>
                    <li>for: htmlFor</li>
                </ul>
                <p>Les attributs html en 2 mots ou + doivent être écrit en camelCase
                ( et pas en kebab-case, ni tout en minuscule ) : tabindex : tabIndex.</p>
            </section>
            <section>
                <h2>L'interpolation</h2>

                <p>L'interprétation d'expression JS dans les balises.</p>
                <p>En React, on utilise les simples accolades.</p>

                <ul>
                    <li>1 + 1 = {1 + 1}</li>
                    <li>Age : {200}</li>
                    <li>Nom : {name}</li>
                    <li>Pas les booleans : {is_logged}</li>
                    <li>JSX : {jsx}</li>
                    <li>Accolades: {'{}'}  </li>
                    <li>Crochets : {"<>"}</li>
                    <li>{string_reloue}</li>
                </ul>

                <p>On peut interpoler toute expression JS, tant qu'elle retourne une valeur.</p>

            </section>
            <section>
                <h2>Le Data Binding / Attribute Binding</h2>
                <p>L'interprétation d'expression JS pour les attributs HTML</p>
                <p>C'est valable pour tous les attributs HTML.</p>

                <h3>Attributs "classiques"</h3>
                <p className={li_classe}>J'ai la classe "blue"</p>

                <figure>
                    <img className={'classeA ' + li_classe} src={image.url} alt={image.description}/>
                    <figcaption>{image.titre}</figcaption>
                </figure>

                <h3>Le style</h3>
                <p style={ {color: 'blue', fontSize: '1.2em', fontFamily: 'sans-serif'} }>
                    Look at my style
                </p>
                <p style={style}>Magnifique paragraphe</p>

                <h3>Décomposition</h3>

                <p>DOM : Document Object Model.</p>
                <p {...attributes}>React transforme le JSX en objets "node".</p>

                <p>On peut rassembler les attributs d'une balise dans un objet, et le décomposer.</p>

            </section>

            <section>
                <h2>Gestions des images locales</h2>

                <p>Les médias passés dans le HTML doivent se situer dans le dossier "public" et
                    le lien dans "src" se fait depuis le fichier index.html et pas depuis le fichier du composant.
                </p>
                <p>En CSS par contre, les images, fonts se mettent dans le dossier "src", et sont transformées et renommées à la compilation.</p>

                <img src='./images/logo192.png' alt='logo de React'/>
                <p className='bg_img'>Background</p>
            </section>

            <section>
                <h2>Styles</h2>

                <p>Tous les fichiers CSS sont globaux, il faut les baliser avec des id ou des classes.</p>
                <p>Pour que les fichiers CSS soient pris en compte, il faut les importer dans le composant.</p>
            </section>
        </main>
    )

}

export default Presentation;
