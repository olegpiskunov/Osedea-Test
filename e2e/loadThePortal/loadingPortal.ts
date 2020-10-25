import {} from 'jasmine';
import {browser} from 'protractor';
import {titleType} from '../serviceClass/titleTypeFunc';

describe('Should load the homepage', () => 
{
        it('should load the portal', () => 
        {
               browser.get('www.osedea.com/');

               titleType(browser.getCurrentUrl(), 'https://www.osedea.com/');
        });


        it('should check the Osedea Title', () => 
        {
               titleType(browser.getTitle(), 'Custom software development company');
        });
});