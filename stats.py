import requests
from bs4 import BeautifulSoup

# ESPN team stats URL
url = "https://www.espn.com/mens-college-basketball/team/stats/_/id/2752"

# Fetch the page
response = requests.get(url)
if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    print(soup.prettify())  # Visualize the page structure
else:
    print(f"Failed to fetch page: {response.status_code}")



# Parse stats table
table = soup.find('table', class_='Table')  # Adjust the class name to match ESPN's table
rows = table.find('tbody').find_all('tr')  # Get all rows from the table body

# Extract stats for each player
player_stats = []
for row in rows:
    cols = row.find_all('td')
    player_stats.append({
        "name": cols[0].text.strip(),
        "gp": cols[1].text.strip(),
        "pts": cols[2].text.strip(),
        "reb": cols[3].text.strip(),
        "ast": cols[4].text.strip(),
        "fg_pct": cols[5].text.strip(),
    })

# Print extracted stats
for player in player_stats:
    print(player)
