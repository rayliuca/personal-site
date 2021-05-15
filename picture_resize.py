# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

import os
import sys
import PIL
from pathlib import Path


    
img_list = [str(path) for path in Path('').rglob('*.jpg')]

for path in img_list:
    ori_img = str(path).replace(".jpg", "_ori.jpg")
    if os.path.getsize(path) > 1024*100 and "_ori" not in path:
        if ori_img in img_list:
            print(f'{path} is already resized')
        else:
            img = PIL.Image.open(path)
            ori_file_name = str(path).replace(".jpg", "_ori.jpg")
            img.save(ori_file_name) 
            img.save(path,optimize=True,quality=50) 

img_list = [str(path) for path in Path('').rglob('*.png')]

for path in img_list:
    ori_img = str(path).replace(".png", "_ori.png")
    if os.path.getsize(path) > 1024*100 and "_ori" not in path:
        if ori_img in img_list:
            print(f'{path} is already resized')
        else:
            img = PIL.Image.open(path)
            ori_file_name = str(path).replace(".png", "_ori.png")
            img.save(ori_file_name) 
            rgb_img = img.convert('RGB')
            rgb_img.save(path.replace(".png", ".jpg"),optimize=True,quality=50) 
            os.remove(path)
            os.rename(path.replace(".png", ".jpg"),path) 