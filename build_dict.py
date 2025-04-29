import os

def build_dict(assets_dir="assets"):
    people = []
    for subdir in os.listdir(assets_dir):
        path = os.path.join(assets_dir, subdir)
        if os.path.isdir(path):
            emotes = [
                {"src": f"{assets_dir}/{subdir}/{fname}"}
                for fname in os.listdir(path)
            ]
            people.append({
                "name": subdir.title(),
                "twitch": subdir.title(),
                "emotes": emotes
            })
    return people

def build_art_dict(assets_dir="art"):
    art_pieces = []
    for fname in os.listdir(assets_dir):
        if os.path.isfile(os.path.join(assets_dir, fname)):
            extension = os.path.splitext(fname)[1].lower()
            note = ""
            if extension in [".png", ".jpg", ".jpeg"]:
                note = "Digital painting"
            elif extension == ".gif":
                note = "Animated pixel art"
            elif extension == ".mp4":
                note = "Timelapse process"
            entry = {"src": f"{assets_dir}/{fname}", "note": note}
            if extension == ".mp4":
                entry["video"] = True
            art_pieces.append(entry)
    return art_pieces

if __name__ == "__main__":
    data = build_dict()
    print(data)
    art_data = build_art_dict()
    print(art_data)