import requests

def callApi(data):
    url = "localhost:5000"
    print("Call to API :", url, "with data :", data, "\n")
    try:
        requests.post(url, data)
    except:
        pass