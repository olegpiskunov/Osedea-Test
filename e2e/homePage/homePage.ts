import {browser, protractor} from 'protractor';
import {titleType, messageText, clickOnButton, sendKeysToTextBox} from '../serviceClass/titleTypeFunc';
import {HomePageLocators} from '../locators/pageObject';
require('../loadThePortal/loadingPortal.ts');

var EC = protractor.ExpectedConditions;

describe('should log in to configuration', () => 
{
    it('should check and click on the Explore Our Culture button', () => 
    {
        browser.executeScript('window.scrollTo(2670,607);').then(function () 
        {
            clickOnButton(HomePageLocators.getExploreOurCultureBtn, 'Explore our culture');
        });
    });


    it('should check if the Culture window is opened', () => 
    {
        titleType(browser.getTitle(), 'Team culture');
    });



    it('should check and click on the Contact Us button', () => 
    {
        browser.executeScript('window.scrollTo(0,0);').then(function () 
        {
            clickOnButton(HomePageLocators.getContactUsBtn, 'Contact us');
        });
    });
    

    it('should check if the Contact Page Container is dispalyed', () => 
    {
        browser.wait(EC.visibilityOf(HomePageLocators.getContactPageContainer), 15000).then(() =>
        {
            expect(HomePageLocators.getContactPageContainer.isDisplayed()).toBeTruthy();
            expect(EC.visibilityOf(HomePageLocators.getContactPageContainer)).toBeTruthy();  
        });
    });


    it('should check all titles of Contact Page Container', () => 
    {
         titleType(HomePageLocators.getFirstNameErrorMessage.getText(), 'First name'); 
         titleType(HomePageLocators.getLastNameErrorMessage.getText(), 'Last name'); 
         titleType(HomePageLocators.getSubjectErrorMessage.getText(), 'Subject'); 
         titleType(HomePageLocators.getEmailErrorMessage.getText(), 'Email'); 
         titleType(HomePageLocators.getYourNoteErrorMessage.getText(), 'Your note');  
    });


    it('should insert the First Name into the First Name text box', () => 
    {
         sendKeysToTextBox(HomePageLocators.getFirstNameTxtBox, 'Test');
    });


    it('should insert the Last Name into the Last Name text box', () => 
    {
         sendKeysToTextBox(HomePageLocators.getLastNameTxtBox, 'Test');
    });
    

    it('should insert the Subject into the Subject text box', () => 
    {
         sendKeysToTextBox(HomePageLocators.getSubjectTxtBox, 'Test');
    });


    // Negative test case
    // it inserts the wrong email into the Email text box and then checks the error message to confirm that it works correct
    it('should insert the Wrong 10 emails into the Email text box', () => 
    {
       let emailList  = ['hdf@@', 'email@-example.com', 'didj@#', '@', '@example.com', 'email.example.com', 
                         'Joe Smith <email@example.com>','#@%^%#$@#$@#.com', 'あいうえお@example.com', 'plainaddress'];

        expect(HomePageLocators.getEmailTxtBox.isDisplayed()).toBeTruthy();
        expect(EC.elementToBeClickable(HomePageLocators.getEmailTxtBox)).toBeTruthy();

       for(let i = 0; i < emailList.length; i++)
       {
          HomePageLocators.getEmailTxtBox.click(); 
          HomePageLocators.getEmailTxtBox.clear(); 
          HomePageLocators.getEmailTxtBox.sendKeys(emailList[i].toString()); 
          browser.sleep(100);

          HomePageLocators.getNoteTxtBox.click(); 

          messageText(HomePageLocators.getEmailErrorMessage, 'Email');
       }
    });


    // Positive test case
    it('should insert the Correct Email into the Email text box', () => 
    {
        sendKeysToTextBox(HomePageLocators.getEmailTxtBox, 'Test@test');
        //you should fix the email validation bug
        
        //  function validateEmail(email) 
        //  {
        //     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(String(email).toLowerCase());
        //  }
    });


    it('should insert the Note into the Note text box', () => 
    {
         sendKeysToTextBox(HomePageLocators.getNoteTxtBox, 'Test Automation');
    });


    it('should check and click on the Submit button', () => 
    {
         clickOnButton(HomePageLocators.getSubmitBtn, 'Send');
    });


    it('should check if the Contact window is opened', () => 
    {
        titleType(browser.getTitle(), 'Contact us');
    });


    it('should check if the Confirmation message is displayed', () => 
    {
        messageText(HomePageLocators.getConfirmationTxt, 'Your message is on its way!');
    });
});