const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')


let mainWindow = null
const createWindow = () => {
        mainWindow = new BrowserWindow({
                width:800, 
                height:600,
                webPreferences: {
                        nodeIntegration:true
                }
        })
        mainWindow.loadURL(require('url').format({
                pathname:path.join(__dirname, 'index.html'),
                protocol: 'file:',
                slashes: true
        }))
        mainWindow.webContents.openDevTools() //not sure what this is
        mainWindow.on('closed', () => {
                mainWIndow = null
        })
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
        if (process.platform !=='darwin') {
                console.log('quitt??')
                app.quit()
        }
})

app.on('activate', () => {
        if (mainWindow === null) {
                createWindow()
        }
})

