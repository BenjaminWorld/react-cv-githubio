import pic from "../circlepic.JPG";

function WorkExperience() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style={{height:"70vh", width:"80vw"}}>
              <div class="card-body">
                    <div class="row justify-content-start">
                        <div class="col-7">
                            <img src={pic} style={{height:"65vh"}}/>
                        </div>
                        <div class="col-5">
                            <div class="name">
                            Work Experience
                            </div>
                            <div class="job">
                            <br/>
                                <span>Otis Elevator Hong Kong Limited</span><br/>
                            </div>
                            <div class="role">
                                <span>Assistant Service Sales Engineer<br/> July/2020 - Present
                                </span>
                                <br/>
                                <br/>
                            </div>
                            <div class="job">
                                <span>Business Environment Council</span><br/>
                            </div>
                            <div class="role">
                                <span>Sustainability Consultant, Internship<br/>Apr/2020 - Jul/2020
                                </span>
                                <br/>
                                <br/>
                            </div>
                            <div class="job">
                                <span>CLP Power Hong Kong Limited </span><br/>
                            </div>
                            <div class="role">
                                <span>Assistant Engineer, Internship<br/>Sep/2019 - Apr/2020
                                </span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div> 
        
    )
}
export default WorkExperience;