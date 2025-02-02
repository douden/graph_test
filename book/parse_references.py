import os
import re

# Regex: capture the display text and the target inside {doc}`Display <target>`
REFERENCE_REGEX = re.compile(r"\{doc\}`([^<]+)<([^>]+)>`")

def find_references(folder_path, output_file):
    all_refs = []

    for root, dirs, files in os.walk(folder_path):
        for fname in files:
            if fname.endswith(".md"):
                path = os.path.join(root, fname)
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                # Debug info
                print(f"Checking: {path}")
                matches = REFERENCE_REGEX.findall(content)
                print(f"Matches found: {matches}")

                # Each match is (display_text, target)
                for display_text, target in matches:
                    all_refs.append((fname, display_text.strip(), target.strip()))

    # Write references to a text file
    with open(output_file, "w", encoding="utf-8") as out:
        for md_file, text, target in all_refs:
            out.write(f"{md_file} -> [text: '{text}'] [target: '{target}']\n")

if __name__ == "__main__":
    # Adjust as needed if your .md files are in "pages"
    find_references("pages", "references.txt")
