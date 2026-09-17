import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

matches = re.findall(r'Satpur MIDC[^\n<,\"]*', text, re.IGNORECASE)
print(set(matches))
