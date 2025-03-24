import os
import re

# Regex for extracting `{doc}` references
REFERENCE_REGEX = re.compile(r"\{doc\}`([^<]+)<([^>]+)>`")

# Regex for extracting hidden tags from HTML comments
HIDDEN_TAG_REGEX = re.compile(r'<!--\s*hidden-tag:\s*(.+?)\s*-->')

print("Starting reference and tag parsing.")

def find_references_and_tags(folder_path, references_output, tags_output):
    all_refs = []
    all_tags = []

    for root, dirs, files in os.walk(folder_path):
        for fname in files:
            if fname.endswith(".md"):
                path = os.path.join(root, fname)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        content = f.read()
                except Exception as e:
                    print(f"❌ Failed to read {path}: {e}")
                    continue

                # Debugging
                print(f"🔍 Checking: {path}")

                unique_refs = set()
                
                # New functionality: Extract references only within tags-box div blocks.
                # A tags-box block starts with ":::{div}" and ends with ":::"
                # and should contain ":class: tags-box" somewhere in the block.
                tags_box_blocks = re.findall(r":::{div}(.*?):::", content, re.DOTALL)
                for block in tags_box_blocks:
                    if ":class: tags-box" in block:
                        block_refs = REFERENCE_REGEX.findall(block)
                        print(f"📌 Tags-box references found: {block_refs}")
                        for display_text, target in block_refs:
                            ref = (display_text.strip(), target.strip())
                            if ref not in unique_refs:
                                unique_refs.add(ref)
                                all_refs.append((fname, *ref))

                # Old functionality: Extract references from entire file content
                # matches = REFERENCE_REGEX.findall(content)
                # print(f"📌 References found: {matches}")
                # for display_text, target in matches:
                #     ref = (display_text.strip(), target.strip())
                #     if ref not in unique_refs:
                #         unique_refs.add(ref)
                #         all_refs.append((fname, *ref))

                # Extract hidden tags
                tag_matches = HIDDEN_TAG_REGEX.findall(content)
                print(f"🏷 Hidden tags found: {tag_matches}")
                unique_tags = set()
                for tag in tag_matches:
                    tag_entry = (fname, tag.strip())
                    if tag_entry not in unique_tags:
                        unique_tags.add(tag_entry)
                        all_tags.append(tag_entry)

    # Write references to a text file
    with open(references_output, "w", encoding="utf-8") as out:
        for md_file, text, target in all_refs:
            out.write(f"{md_file} -> [text: '{text}'] [target: '{target}']\n")

    # Write tags to a separate text file
    with open(tags_output, "w", encoding="utf-8") as out:
        for md_file, tag in all_tags:
            out.write(f"{md_file} -> [tag: '{tag}']\n")

if __name__ == "__main__":
    print("Looking for Markdown files...")

    # Define folder and output filenames
    folder_path = "book"
    references_output = "references.txt"
    tags_output = "tags.txt"

    find_references_and_tags(folder_path, references_output, tags_output)
