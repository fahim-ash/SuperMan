import requests
try:
    url = 'http://localhost:3002/api/check'
    response = requests.get(url)
    print(response)
except Exception as e:
    print(e)


