import { LightningElement, track } from 'lwc';

export default class RecommendationsMapModal extends LightningElement {
    @track showModal;

    closeModal(){
        this.showModal = false;
    }
}