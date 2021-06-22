import { NavigationTest } from "../test-objects/navigationtest";
import { pages } from "./pages";

class Test {
    constructor(pages){
        this.navigationTest = new NavigationTest(pages)
    }
}
const test = new Test(pages)

export{test}
