import { LandingPage } from "../page-objects/landingpage";

class Pages {
    constructor(){
        this.landingPage = new LandingPage()
    
    }

}


const pages = new Pages();

export { pages }