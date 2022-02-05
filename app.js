//wix functions

// custom go backbutton
//use of session
import { session } from 'wix-storage'; 
import wixLocation from 'wix-location';
$w('#button').onClick(() => {
    wixLocation.to(session.getItem("p")) //this get the previous page url
})
// _____________________________________


// masterPage.js code 
import { session } from 'wix-storage';
import wixLocation from 'wix-location';
$w.onReady(function () { session.setItem('p', session.getItem('c'));
session.setItem('c', wixLocation.url) });