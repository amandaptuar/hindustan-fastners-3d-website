import re

filepath = r'c:\Users\amand\OneDrive\Desktop\3d-website\src\App.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace uppercase in classNames with capitalize
# Match className="..." or className={`...`}
def replace_uppercase_class(match):
    full_str = match.group(0)
    # replace ' uppercase ' or ' uppercase"' or ' uppercase`' or '"uppercase ' or '`uppercase '
    new_str = re.sub(r'\buppercase\b', 'capitalize', full_str)
    return new_str

# Replace in classNames
content_updated = re.sub(r'className=(?:"[^"]*"|`[^`]*`|\{[^}]*\})', replace_uppercase_class, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content_updated)

print("Replaced all uppercase class instances with capitalize in App.tsx!")
