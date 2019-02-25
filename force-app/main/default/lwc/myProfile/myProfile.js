import { LightningElement, track } from 'lwc';

export default class MyProfile extends LightningElement {
    fname='Ken Bryce';
    lname='Tagimacruz';
    age='25';
    email='kbyce.tag@gmail.com';
    intro-subtitle1='Developer';
    intro-subtitle2='Engineer';
    picUrl='https://scontent.fmnl3-2.fna.fbcdn.net/v/t1.0-9/44744830_1911848522229573_1487235926361899008_n.jpg?_nc_cat=110&_nc_ht=scontent.fmnl3-2.fna&oh=3b982795db7d827af3ac01dbcadbe5f6&oe=5D2064C1';

    @track
    ready = false;

    connectedCallback(){
        setTimeout(()=>{
            this.ready=true;
        },3000);
    }
}