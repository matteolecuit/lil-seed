import requests
import pickle

def callApi(data):
    url = "https://lilseed-back.serveurspaul.duckdns.org/users/login"
    data = {"username": "lilseed", "password": "password"}

    # url = "https://lilseed-back.serveurspaul.duckdns.org/"
    # lilseed
    # password
    # print("Call to API :", url, "with data :", data, "\n")
    
    try:
        res = requests.post(url, json = data)
        print(res.json()["token"])
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