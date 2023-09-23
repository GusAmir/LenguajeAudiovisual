class EmailNotifier {
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

class MusicStore {
    notifier: EmailNotifier;

    constructor() {
        this.notifier = new EmailNotifier();
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}//----------------------
interface Notifier {
    sendNotification(receiver: string, message: string): void;
}

class EmailNotifier implements Notifier {
    sendNotification(receiver: string, message: string) {
        console.log(`Email sent to ${receiver}: ${message}`);
    }
}

class SMSNotifier implements Notifier {
    sendNotification(receiver: string, message: string) {
        console.log(`SMS sent to ${receiver}: ${message}`);
    }
}

class MusicStore {
    notifier: Notifier;

    constructor(notifier: Notifier) {
        this.notifier = notifier;
    }

    newAlbumRelease(receiver: string, artist: string, album: string) {
        const message = `The new album ${album} by ${artist} is now available!`;
        this.notifier.sendNotification(receiver, message);
    }
}

const emailNotifier = new EmailNotifier();
const musicStoreWithEmail = new MusicStore(emailNotifier);
musicStoreWithEmail.newAlbumRelease("example@example.com", "Artist Name", "Album Title");

const smsNotifier = new SMSNotifier();
const musicStoreWithSMS = new MusicStore(smsNotifier);
musicStoreWithSMS.newAlbumRelease("1234567890", "Artist Name", "Album Title");
