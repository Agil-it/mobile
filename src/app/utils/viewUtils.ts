import { LoadingController, ToastController } from '@ionic/angular';

export class ViewUtils {
  public progressBar: any;
    
  constructor(private loadingController: LoadingController, private toastController: ToastController){

  }

  public async showProgressBar(AMessage : string = "Aguarde..."){
    this.progressBar = await this.loadingController.create({
      message: AMessage,
      duration: 0
    });
    
    this.progressBar.present();    
  }

  public hideProgressBar(){
    this.progressBar.dismiss();
  }

  async showToast(message : string, duration : number = 2000) {
    let options = {
        message: message,
        duration : duration,
        color : 'primary',
        icon: 'information-circle-outline'
    }

    let toast = await this.toastController.create(options);
    
    toast.present();
  }

  public removeAccents(word: string) {
    let newWord = word.toLowerCase();

    newWord = newWord.replace(new RegExp(/\s/g),       '');
    newWord = newWord.replace(new RegExp(/[àáâãäå]/g), 'a');
    newWord = newWord.replace(new RegExp(/æ/g),        'ae');
    newWord = newWord.replace(new RegExp(/ç/g),        'c');
    newWord = newWord.replace(new RegExp(/[èéêë]/g),   'e');
    newWord = newWord.replace(new RegExp(/[ìíîï]/g),   'i');
    newWord = newWord.replace(new RegExp(/ñ/g),        'n');
    newWord = newWord.replace(new RegExp(/[òóôõö]/g),  'o');
    newWord = newWord.replace(new RegExp(/œ/g),        'oe');
    newWord = newWord.replace(new RegExp(/[ùúûü]/g),   'u');
    newWord = newWord.replace(new RegExp(/[ýÿ]/g),     'y');
    newWord = newWord.replace(new RegExp(/\W/g),       '');

    return newWord;
  }

  public filterArray(array : Array<any>, propertyName : string, filterTerm : string) : Array<any>{
    let arrayFiltred : any = [];

    filterTerm = this.removeAccents(filterTerm.trim());

    array.forEach(element => {
      let text   = this.removeAccents(element[propertyName].trim());
      
      if (text.indexOf(filterTerm) >= 0){
        arrayFiltred.push(element);
      }
    });
    
    return arrayFiltred;
  }
}