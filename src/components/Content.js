import pic from "../circlepic.JPG";
import pic1 from "../email.png";
import pic2 from "../date-of-birth.png";
import pic3 from "../phone.png";

function Content() {
    return (
        <div class="position-absolute top-50 start-50 translate-middle">
            <div class="card" style={{height:"70vh", width:"80vw"}}>
            <div class="card-body">
                    <div class="row justify-content-start">
                        <div class="col-7">
                            <img src={pic} style={{height:"65vh"}}/>
                        </div>
                        <div class="col-5">
                            <div class="hello">
                            Hello Everybody, I'm
                            </div>
                            <div class="name">
                            Benjamin Lee 
                            </div>
                            <div class="details">
                                <span> An self-motivated engineer with a passion for software development, who is currently seeking an opportunity to change my field of career in web development.</span><br/>
                                <br/>
                                <img src={pic2} style={{height:"4vh"}}/>
                                <span> 18-12-1997</span><br/>
                                <br/>
                                <img src={pic3} style={{height:"4vh"}}/>
                                <span> +852 92823577</span><br/>
                                <br/>
                                <img src={pic1} style={{height:"4vh"}}/>
                                <span> benjiman0125@hotmail.com</span> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}
export default Content;


