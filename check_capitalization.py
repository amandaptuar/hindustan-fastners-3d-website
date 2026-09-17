import re

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to find plain text inside JSX elements
pattern = re.compile(r'>\s*([a-z][^<{}]+)\s*<')

matches = pattern.findall(content)

print(f"Found {len(matches)} JSX text segments starting with lowercase letter:")
for m in matches[:30]:
    print(" -", repr(m[:60]))

# Let's capitalize them automatically if they are text content
def capitalize_match(match):
    text = match.group(1)
    # Check if text is a JS expression or CSS class or similar
    if text.strip().startswith(('http', '//', 'e.g.')):
        return match.group(0)
    capitalized = text[0].upper() + text[1:]
    return f">{capitalized}<"

# Replace matches where text starts with a lowercase letter
new_content = pattern.sub(capitalize_match, content)

with open(r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Capitalization sweep completed!")
