from selenium import webdriver
from bs4 import BeautifulSoup

# Set up Selenium WebDriver
driver = webdriver.Chrome(executable_path='/path/to/chromedriver')  # Replace with the path to your driver
driver.get("https://www.espn.com/mens-college-basketball/team/stats/_/id/2752")

# Extract page source after JavaScript loads
soup = BeautifulSoup(driver.page_source, 'html.parser')
driver.quit()

# Use the same parsing logic as above
table = soup.find('table', class_='Table')  # Adjust the class name to match ESPN's table
rows = table.find('tbody').find_all('tr')

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

print(player_stats)


import json

with open('player_stats.json', 'w') as f:
    json.dump(player_stats, f, indent=4)


import csv

with open('player_stats.csv', 'w', newline='') as f:
    writer = csv.DictWriter(f, fieldnames=["name", "gp", "pts", "reb", "ast", "fg_pct"])
    writer.writeheader()
    writer.writerows(player_stats)
