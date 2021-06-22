import faker from 'faker';

class AutoUsers{
    constructor(nickname,word){
        this.nickName = nickname
        this.word = word
    }
}

const autousers = new AutoUsers(faker.name.firstName(),faker.name.lastName());
export{autousers}