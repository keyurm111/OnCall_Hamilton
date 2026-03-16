import os, re
pages_dir = "/Users/keyurmoradiya/Downloads/capsule/frontend/src/pages"
for root, _, files in os.walk(pages_dir):
    if "Home" in root: continue
    for file in files:
        if file.endswith(".jsx"):
            p = os.path.join(root, file)
            with open(p, "r") as f: c = f.read()
            def repl(m):
                s = m.group(0)
                s = re.sub(r"\bgroup-hover:italic\b", "", s)
                s = re.sub(r"\bhover:italic\b", "", s)
                s = re.sub(r"\bitalic\b", "", s)
                s = re.sub(r" +", " ", s)
                # Cleanup potential trailing/leading spaces inside quotes from replacement
                s = s.replace(' "', '"').replace('" ', '"')
                return s
            new_c = re.sub(r"className=[\"'](.*?)[\"']", repl, c)
            new_c = re.sub(r"className=\{`(.*?)`\}", repl, new_c)
            if new_c != c:
                with open(p, "w") as f: f.write(new_c)
                print(f"Updated {p}")
