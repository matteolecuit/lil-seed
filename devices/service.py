import requests
import pickle

def callApi(data):
    url = "localhost:5000"
    print("Call to API :", url, "with data :", data, "\n")
    
    try:
        requests.post(url, data)
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