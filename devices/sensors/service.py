import requests
import pickle

def callApi(data):
    connUrl = "https://lilseed-back.serveurspaul.duckdns.org/users/login"
    connData = {"username": "lilseed", "password": "password"}
    
    try:
        connReq = requests.post(connUrl, json = connData)
        if len(connReq.json()["token"].strip()) > 0:
            addPotUrl = "https://lilseed-back.serveurspaul.duckdns.org//users/" + connReq.json()["token"] + "pots"
            addPotData = {
                "name": "Pot de la kouisine",
                "macAddress": "00:00:00:00"
            }
            print(addPotUrl)
            addPotReq = requests.post(addPotUrl, json = addPotData)
            print(addPotReq.json())
    except:
        pass

def loadData():
    file = open('data.txt', 'rb')
    data = pickle.load(file)
    file.close()
    return data
        

def storeData(data):
    file = open('data.txt', 'wb')
    pickle.dump(data, file)
    file.close()

callApi({})