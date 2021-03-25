import requests, pickle, sys, traceback

USERNAME = "lilseed"
PASSWORD = "password"
token = ""
id_pot = -1

def linkPotToUser(data):
    global USERNAME
    global PASSWORD
    global token
    global id_pot

    connUrl = "https://lilseed-back.serveurspaul.duckdns.org/users/login"
    connData = {"username": USERNAME, "password": PASSWORD}
    
    try:
        if len(token.strip()) <= 0:
            connReq = requests.post(connUrl, json = connData)
            if len(connReq.json()["token"].strip()) > 0:
                token = connReq.json()["token"]

        linkPotUrl = "https://lilseed-back.serveurspaul.duckdns.org/users/" + connData["username"] + "/pots"
        linkPotData = {
            "macAddress": "00:00:00:00"
        }
        addPotReq = requests.post(linkPotUrl, json = linkPotData, headers = {"Authorization" : "Bearer " + token})
        print(addPotReq.status_code)
        id_pot = addPotReq.json()['id']
        print(id_pot)
    except:
        print(sys.exc_info()[0])
        pass

def sendData(data):
    global USERNAME
    global PASSWORD
    global token
    global id_pot
    
    try:
        if len(token.strip()) <= 0:
            
            connUrl = "https://lilseed-back.serveurspaul.duckdns.org/users/login"
            connData = {"username": USERNAME, "password": PASSWORD}
            connReq = requests.post(connUrl, json = connData)
            if len(connReq.json()["token"].strip()) > 0:
                token = connReq.json()["token"]

        addPotUrl = "https://lilseed-back.serveurspaul.duckdns.org/pots/" + str(id_pot) + "/data"
        addPotReq = requests.post(addPotUrl, json = data, headers = {"Authorization" : "Bearer " + token})
        print(addPotReq.status_code)
        print(addPotReq.json())
    except:
        print(traceback.format_exc())
        pass

# def loadData():
#     file = open('data.txt', 'rb')
#     data = pickle.load(file)
#     file.close()
#     return data
        

# def storeData(data):
#     file = open('data.txt', 'wb')
#     pickle.dump(data, file)
#     file.close()

# linkPotToUser({})