# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import os
import sys
import PIL

favcon_folder = "./public/images/favicon"

files = [f for f in os.listdir(favcon_folder) if os.path.isfile(os.path.join(favcon_folder, f))]

new_favcon = "Ray.png"
favcon = PIL.Image.open(favcon_folder + "/" + new_favcon)

permissible_file_extension = ["png", "ico"]

files = [f for f in files if any(e in f for e in permissible_file_extension)]

for f in files:
    path = favcon_folder + "/" + f

    old_image = PIL.Image.open(path)

    resized_image = favcon.resize((old_image.size))
    resized_image.save(path)