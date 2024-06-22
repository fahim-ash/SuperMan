import requests
url = 'http://localhost:3000/api/users'
response = requests.get(url)
print(response)