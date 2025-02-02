import os
import re

# Regex to match {doc}`Link Text <filename#optional-anchor>`
REFERENCE_REGEX = re.compile(r"\{doc\}`[^<]*<([^>]+)>`")

def find_references(folder_path, output_file):
    all_refs = []  # store tuples like (md_file, target)

    for root, dirs, files in os.walk(folder_path):
        for fname in files:
            if fname.endswith(".md"):
                path = os.path.join(root, fname)
                with open(path, "r", encoding="utf-8") as f:
                    content = f.read()
                # Find matches of the form {doc}`some text <some_target>`
                matches = REFERENCE_REGEX.findall(content)
                for m in matches:
                    # m will be something like "linear_algebra#summary"
                    all_refs.append((fname, m))

    # Write references to a text file (or CSV, JSON, etc.)
    with open(output_file, "w", encoding="utf-8") as out:
        for ref in all_refs:
            md_file, target = ref
            out.write(f"{md_file} -> {target}\n")

if __name__ == "__main__":
    find_references("pages", "references.txt")
