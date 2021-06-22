import { autousers } from "../autousers";
import { pages } from "../support/pages";

export class NavigationTest {
    //FUNKCIJA
    openPageAndSeeTheMessage(){

        pages.landingPage.openLandingPage() 
        expect(pages.landingPage.getConnectedToServerText()).toBe('Connected to the MQTT.Cool server')

    }

    //FUKNCIJA
    clickConnectButton(){
     pages.landingPage.getConnectButton()
    expect(pages.landingPage.getConnectedToBrokerText()).toBe('Connected to the MQTT broker at tcp://broker.mqtt.cool:1883')
 
    }  

    bothUsersEnterNickname(){
        pages.landingPage.getNickName(autousers.nickName)
    }
 
    checkUsers(){
        expect(pages.landingPage.getCountUsers()).toBeGreaterThan(0)
    }

    bothUsersEnterWord(){
        pages.landingPage.getWords(autousers.word)
        pages.landingPage.clickReplayButton();
        browser.pause(5000)
    }

    checkForMessage(){
        expect(pages.landingPage.recivedMessage()).toBeGreaterThan(0)
    }

    disconnect(){
        pages.landingPage.clickDisconnectButton()
    }



































}
