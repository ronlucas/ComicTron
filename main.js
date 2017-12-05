'use strict';

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win;
//Creo la pantalla principal
function createWindow() {
    win = new BrowserWindow({
        height:600,
        width:800
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, '/app/index.html'),
        protocol: 'file:',
        slashes: true
      }))
}
// al levantar la aplicacion, le mando por parametro la pantalla
app.on('ready',createWindow);


exports.openWindow = () =>{
    let win = new BrowserWindow({
        height:200,
        width:400
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/app/secondary.html'),
        protocol: 'file:',
        slashes: true
      }))
}