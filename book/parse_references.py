import os
import re

# Regex: capture the display text and the target inside {doc}`Display <target>`
REFERENCE_REGEX = re.compile(r"\{doc\}`([^<]+)<([^>]+)>`")

print("Starting reference parsing.")

def find_references(folder_path, output_file):
    all_refs = []

    for root, dirs, files in os.walk(folder_path):
        for fname in files:
            if fname.endswith(".md"):
                path = os.path.join(root, fname)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                except Exception as e:
                    print(f"Failed to read {path}: {e}")
                    continue

                # Debug info
                print(f"Checking: {path}")
                matches = REFERENCE_REGEX.findall(content)
                print(f"Matches found: {matches}")

                # Store unique references per file
                unique_refs = set()

                for display_text, target in matches:
                    ref = (display_text.strip(), target.strip())
                    if ref not in unique_refs:
                        unique_refs.add(ref)
                        all_refs.append((fname, *ref))  # Append only if unique

    # Write references to a text file
    with open(output_file, "w", encoding="utf-8") as out:
        for md_file, text, target in all_refs:
            out.write(f"{md_file} -> [text: '{text}'] [target: '{target}']\n")

if __name__ == "__main__":
    print("Looking for article files...")
    for root, dirs, files in os.walk("book/pages"):
        for fname in files:
            print(fname)

    find_references("book/pages", "references.txt")
