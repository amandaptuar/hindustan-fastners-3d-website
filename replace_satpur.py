with open('src/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace "Satpur MIDC Plant" with "Satpur MIDC, India"
count = content.count('Satpur MIDC Plant')
print(f"Found {count} occurrences of 'Satpur MIDC Plant'")

new_content = content.replace('Satpur MIDC Plant', 'Satpur MIDC, India')

with open('src/App.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replacement complete.")
