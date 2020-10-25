import {browser, protractor} from 'protractor'; 

var EC = protractor.ExpectedConditions;

export function titleType(textReference, expectedText)
{
    textReference.then(function(name)
    {
        if (name == expectedText)
        {
            expect(textReference).toContain(expectedText);
            expect(name).toEqual(expectedText);
        }
        else
        {
            throw new TypeError("Wrong name is:=====>" + expectedText + "<====== Correct name is:=====>" + name + '<======');
        }
    });
}


export function messageText(expectedElm, expectedTitle)
{
    browser.wait(EC.visibilityOf(expectedElm), 5000).then(() =>
    {
        expect(expectedElm.isDisplayed()).toBeTruthy();
        expect(EC.visibilityOf(expectedElm)).toBeTruthy();
       
        titleType(expectedElm.getText(), expectedTitle);
    });
}

export function clickOnButton(expectedElm, expectedText)
{
    browser.wait(EC.elementToBeClickable(expectedElm), 15000).then(() =>
    {
        expect(expectedElm.isDisplayed()).toBeTruthy();
        expect(EC.elementToBeClickable(expectedElm)).toBeTruthy();
        titleType(expectedElm.getText(), expectedText);
        expectedElm.click();   
    });
}

export function sendKeysToTextBox(expectedElm, expectedText)
{
    browser.wait(EC.elementToBeClickable(expectedElm), 15000).then(() =>
    {
        expect(expectedElm.isDisplayed()).toBeTruthy();
        expect(EC.elementToBeClickable(expectedElm)).toBeTruthy();
        expectedElm.click(); 
        expectedElm.clear();  
        expectedElm.sendKeys(expectedText); 
    });
}


