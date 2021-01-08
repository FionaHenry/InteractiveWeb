import  MapContainer  from "../components/Map";

export default function Contact() {
    return (  
        <>
        <br></br>
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-6">
                <br></br>
                <article class="tile is-child notification is-success">
                    <p class="title">Find our campus here</p>
                    <p>University Centre Peterborough</p>
                    <p>Park Crescent Campus</p>
                    <p>Peterborough, Cambridgeshire</p>
                    <p>PE1 4DZ</p>
                    <p>01733 214466</p>
                    <MapContainer />
                    
                    <br></br>

                </article>

            </div>

            <div class="tile is-vertical is-6">
                <br></br>
                <article class="tile is-success">
                    <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Name"/>
                    </div>
                    </div>
                </article>

                    
                <article class="tile is-success">
                    <div class="field">
                        <br></br>
                    <label class="label">Email</label>
                    <div class="control has-icons-left">
                        <input class="input" type="email" placeholder="Email"/>
                        <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                        </span>
                    </div>
                    </div>
                </article>

                <article class="tile is-success">
                    <div class="field">
                        <br></br>
                    <label class="label">Subject</label>
                    <div class="control">
                        <div class="select">
                        <select>
                            <option>Select</option>
                            <option>With options</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </article>

                <article class="tile is-success">
                    <div class="field">
                        <br></br>
                    <label class="label">Message</label>
                    <div class="control">
                        <textarea class="textarea" placeholder="Textarea"></textarea>
                    </div>
                    </div>
                </article>
                    
                <article class="tile is-success">
                    <div class="field">
                        <br></br>
                    <div class="control">
                        <button class="button is-link is-info">Submit</button>
                    </div>
                    </div>
                </article>
            </div>
        </div>
        <br></br>
        </>
    );
};