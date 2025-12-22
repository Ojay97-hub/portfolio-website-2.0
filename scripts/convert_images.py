
import os
from PIL import Image

def convert_to_webp(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith(".png"):
            filepath = os.path.join(directory, filename)
            output_path = os.path.splitext(filepath)[0] + ".webp"
            
            print(f"Processing {filename}...")
            try:
                with Image.open(filepath) as im:
                    # Strategy: Limit width to 2560px (good for high-DPI desktop).
                    # Allow height to scale naturally. 
                    # WebP height limit is 16383px.
                    
                    target_width = 2560
                    if im.width > target_width:
                        # Calculate new height to maintain aspect ratio
                        ratio = target_width / im.width
                        new_height = int(im.height * ratio)
                        
                        # Ensure we don't exceed WebP height limit
                        if new_height > 16383:
                            new_height = 16383
                            # Recalculate width to match capped height
                            ratio = new_height / im.height
                            target_width = int(im.width * ratio)
                        
                        im = im.resize((target_width, new_height), Image.Resampling.LANCZOS)
                        print(f"Resized to {im.size}")
                    
                    # Use higher quality (90) to avoid artifacts
                    im.save(output_path, "WEBP", quality=90)
                
                # Check file size savings
                original_size = os.path.getsize(filepath)
                new_size = os.path.getsize(output_path)
                print(f"Saved to {output_path}")
                print(f"Original: {original_size/1024/1024:.2f}MB, New: {new_size/1024/1024:.2f}MB")
                
            except Exception as e:
                print(f"Failed to convert {filename}: {e}")

if __name__ == "__main__":
    target_dir = "/Users/owencotter/portfolio-website-2.0/portfolio-website-2.0/public/project-pics/figma-exports"
    convert_to_webp(target_dir)
