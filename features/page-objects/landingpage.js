import { Site } from "./site";

export class LandingPage extends Site{

    openLandingPage(){
        this.browser.url('https://demos.mqtt.cool/chat/')
    
    }

    getConnectionStatus(){
        return this.browser.$("div.text-success")

    }
    
    getConnectedToServerText(){
        this.getConnectionStatus().waitForExist({timeout: 5000})
        const textarray = this.getConnectionStatus().getText();
        let getFirstElement = textarray[0]
        return getFirstElement
    }

    getInputField(){
        return this.browser.$("#user")
    }

    getNickName(nickname){

        this.getInputField().click()
        this.getInputField().setValue(nickname)

    }

    getClickButton(){
        return this.browser.$('#connectBtn')
  
        
    }
getConnectButton(){
    this.getClickButton().click()

}
getConnectionMessage(){
    return this.browser.$$('div.text-success')

    
}
    
getConnectedToBrokerText(){
    this.getConnectionMessage();
    browser.pause(5000)
    const arrtext = this.getConnectionMessage().map(message => message.getText())
    let getSecondElement = arrtext[1][0]
    return getSecondElement

}
getUserList(){
    return this.browser.$$('#usersList > li')
}

getCountUsers(){
    return this.getUserList().length
}

getWordInput(){
    return this.browser.$('#sendMessage')
}

getWords(word){
    this.getWordInput().click()
    this.getWordInput().setValue(word)
}

getReplayButton(){
    return this.browser.$('#replyBtn')
}

clickReplayButton(){
    this.getReplayButton().click()
}

checkForRecivedMessage(){
    return this.browser.$('div.text-primary')
}


recivedMessage(){
    this.checkForRecivedMessage()   
    browser.pause(3000)
    const arrMessage = [this.checkForRecivedMessage()]
    return arrMessage.length
}

getDisconnectButton(){
    return this.browser.$('#disconnectBtn')
}

clickDisconnectButton(){ 
      this.browser.execute(() => {
        const img = document.querySelector('img[alt="Fork me on GitHub"]');
        img.remove();
    });
    this.getDisconnectButton().click()
}

}
    
    
