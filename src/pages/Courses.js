export default function Courses() {
    return (
        <>
        <br></br>
        <div class="tile is-vertical is-ancestor">
            <article class="tile is-child notification is-info is-4">
                <p class="title">Courses at UCP</p>
            </article>
        </div>

        <div class="tile is-parent">
        <div class="tile is-child is-6">
            <div class="column">
                <br></br>
                <a href="/Computing">Computing and Information Systems</a>
                <br></br>
                <a href="/Business">Business Management</a>
                <br></br>
                <a href="/EnglishLit">English Literature</a>
            </div>
        </div>

        <div class="tile is-child is-vertical is-6">
            <p>Any degree demonstrates your ability to think and work independently and you will develop important skills in communication, numeracy and information technology. These are the qualities that many employers look for when recruiting.</p>

            <p>Whatever your reason for going on to Higher Education, we are sure to have a course that meets your needs. Maybe you want a university education qualification to build a new career, or to move to that next step on an existing career path? Studying for a formal higher education qualification can increase your employability, your lifetime earnings and could help you find a fulfilling job.</p>
        </div>
        </div>

        <div class="tile is-parent">
            <div class="tile is-child">
                <div id="wheelOfFortune">
                    <canvas id="wheel" width="700" height="700"></canvas>
                    <div id="spin">SPIN</div>
                    <script src="./SpinWheel.js"></script>
                </div>
            </div>
        </div>
        </>
    
    );
};