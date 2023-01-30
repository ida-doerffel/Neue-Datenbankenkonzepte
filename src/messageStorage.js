class MessageStorage {
    saveMessage(message){}
        findMessagesForUser(userId){}
}

export class InMemoryMessageStore extends MessageStorage{
    constructor(){
        super();
        this.messages = [];
    }

    saveMessage(message){
        this.messages.push(message)
    }

    findMessagesForUser(userId){
        return this.messages.filter(
            ({from, to}) => from === userId || to === userId
        );
    }
}
