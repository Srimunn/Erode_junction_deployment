import os
from PIL import Image

ASSETS_DIRS = [
    "src/assets",
    "src/assets/celebration"
]

def get_category_config(filename, is_celebration):
    fn = filename.lower()
    
    # Mascots, Logos, Staff, and f.jpg
    if fn.startswith("staff_") or fn.startswith("tom") or fn.startswith("logo") or fn == "f.jpg":
        return {
            "max_width": 400,
            "target_size_kb": 30,
            "category": "Staff/Mascots/Logos"
        }
    
    # Hero images
    if fn.startswith("hero-") or fn in ["one.jpg", "two.jpg", "three.jpg", "one.jpeg", "two.jpeg", "three.jpeg", "one.png", "two.png", "three.png"]:
        return {
            "max_width": 1920,
            "target_size_kb": 200,
            "category": "Hero Images"
        }
    
    # Default category: Gallery / Sections / Celebration
    return {
        "max_width": 1200,
        "target_size_kb": 100,
        "category": "Section/Gallery Images"
    }

def optimize_image(filepath):
    filename = os.path.basename(filepath)
    ext = os.path.splitext(filename)[1].lower()
    
    if ext not in [".jpg", ".jpeg", ".png", ".jpg"]:
        return None
        
    is_celebration = "celebration" in filepath.replace('\\', '/').split('/')
    config = get_category_config(filename, is_celebration)
    
    # Target path
    target_filepath = os.path.splitext(filepath)[0] + ".webp"
    
    try:
        with Image.open(filepath) as img:
            # Keep track of original format
            orig_width, orig_height = img.size
            orig_size = os.path.getsize(filepath)
            
            # 1. Resize if needed
            new_width = orig_width
            new_height = orig_height
            if orig_width > config["max_width"]:
                new_width = config["max_width"]
                new_height = int((config["max_width"] / orig_width) * orig_height)
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Ensure RGBA images are converted appropriately if needed
            # (WebP supports alpha, so we keep RGBA unless converting to RGB)
            if img.mode in ("RGBA", "LA") and ext in [".jpg", ".jpeg"]:
                img = img.convert("RGB")
            
            # 2. Iterate quality to reach target size
            quality = 85
            min_quality = 50
            temp_path = target_filepath + ".tmp"
            
            while quality >= min_quality:
                # Save with current quality
                img.save(temp_path, "WEBP", quality=quality)
                size_kb = os.path.getsize(temp_path) / 1024.0
                
                if size_kb <= config["target_size_kb"] or quality == min_quality:
                    break
                # Reduce quality
                quality -= 5
                
            # Rename temp to target
            if os.path.exists(target_filepath):
                os.remove(target_filepath)
            os.rename(temp_path, target_filepath)
            
            final_size = os.path.getsize(target_filepath)
            print(f"Optimized [{config['category']}]: {filename} -> {os.path.basename(target_filepath)}")
            print(f"  Dims: {orig_width}x{orig_height} -> {new_width}x{new_height}")
            print(f"  Size: {orig_size / 1024.0:.1f} KB -> {final_size / 1024.0:.1f} KB (Quality: {quality})")
            return target_filepath
            
    except Exception as e:
        print(f"Error optimizing {filename}: {e}")
        return None

def main():
    print("Starting image optimization...")
    optimized_count = 0
    
    for folder in ASSETS_DIRS:
        if not os.path.exists(folder):
            print(f"Directory {folder} does not exist. Skipping.")
            continue
            
        print(f"Processing folder: {folder}")
        for filename in os.listdir(folder):
            filepath = os.path.join(folder, filename)
            if os.path.isfile(filepath):
                # Skip already compressed/webp files as inputs, look for raw images
                ext = os.path.splitext(filename)[1].lower()
                if ext in [".jpg", ".jpeg", ".png"]:
                    res = optimize_image(filepath)
                    if res:
                        optimized_count += 1
                        
    print(f"\nDone! Optimized {optimized_count} images.")

if __name__ == "__main__":
    main()
