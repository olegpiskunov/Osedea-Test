import {$, $$} from 'protractor';

export class HomePageLocators 
{
  
  //******************************** PAGE ELEMENTS **********************************//

  static get getExploreOurCultureBtn() 
  {
    return $$('[class="styles__LinkText-f5qq3r-1 iUtMUW"]').get(0);
  }

  static get getContactUsBtn()
  {
    return $('[class="styles__Button-sc-2hgbho-0 bhCAri"]');
  }
  
  static get getContactPageContainer()
  {
    return $('[class="styles__ContactPageContainer-sc-9cx9gr-0 bjYBxL"]');
  }

  static get getFirstNameTxtBox()
  {
    return $('[id="firstName"]');
  }

  static get getLastNameTxtBox()
  {
    return $('[id="lastName"]');
  }
  
  static get getSubjectTxtBox()
  {
    return $('[id="subject"]');
  }

  static get getEmailTxtBox()
  {
    return $('[id="email"]');
  }

  static get getNoteTxtBox()
  {
    return $('[id="note"]');
  }

  static get getFirstNameErrorMessage()
  {
    return $$('[data-errormessage]').get(0);
  }

  static get getLastNameErrorMessage()
  {
    return $$('[data-errormessage]').get(1);
  }

  static get getSubjectErrorMessage()
  {
    return $$('[data-errormessage]').get(2);
  }

  static get getEmailErrorMessage()
  {
    return $$('[data-errormessage]').get(3);
  }

  static get getYourNoteErrorMessage()
  {
    return $$('[data-errormessage]').get(4);
  }

  static get getSubmitBtn()
  {
    return $('[class="styles__Button-sc-2hgbho-0 bhCAri styles__FormSubmitButton-sc-9cx9gr-4 cKcJnX"]');
  }

  static get getConfirmationTxt()
  {
    return $('[class="common__HeadingThree-sc-1bugy2q-8 jsZjAV"]');
  }
};