export default function Home() {
    return (
        <>
        <br></br>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
                <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-primary">
                    <figure class="image is-4by2">
                        <img src="./Virtual.jpg" alt=""></img>
                    </figure>
                    </article>
                </div>
                </div>
                <div class="tile is-parent">
                <article class="tile is-child notification">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                    <p></p>
                    </div>
                </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-primary">
                <div class="content">
                    <p class="title">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                    <figure class="image">
                        <img src="./Students.png" alt=""></img>
                    </figure>
                    </div>
                </div>
                </article>
            </div>
        </div>
        <br></br>
        </>
    );
};