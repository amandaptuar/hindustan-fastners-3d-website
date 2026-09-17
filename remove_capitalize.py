import re

with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove ' capitalize' and 'capitalize ' from class names
new_content = re.sub(r'\bcapitalize\b\s*', '', content)

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Removed all capitalize classes from src/App.tsx")
