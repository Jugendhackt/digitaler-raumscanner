# import the pygame module
import pygame
import math

# import pygame.locals for easier
# access to key coordinates
from pygame.locals import *

data = [100,100,100,110,120,130,100,90,80,70,100,100,200,200,300,300,340,400,100,90,80,70,230,400,300,200]

# initialize pygame
pygame.init()

# Define the dimensions of screen object
screen = pygame.display.set_mode((800, 800))

def setCircle(colorr,colorg,colorb,x,y,radius,border_width):
    
    pygame.draw.circle(screen, (colorr, colorg, colorb), (x, y), radius, border_width)

bg = pygame.image.load("images/paper.png")

# Variable to keep our game loop running
gameOn = True
screen.blit(bg, (0, 0))
for i, distance in enumerate(data):
    x = 400 - math.cos(math.radians(180/30*i)) * distance
    y = 400 - math.sin(math.radians (180/30*i)) * distance
    setCircle(255, 0, 40, x, y, 2, 0)

# mark middle
setCircle(0, 255, 49, 400, 400, 5 ,0 )

# mark 4 meter
setCircle(0, 255, 49, 400, 400, 400 ,2 )

# Our game loop
while gameOn:
    # for loop through the event queue
    for event in pygame.event.get():
        
        # Check for KEYDOWN event
        if event.type == KEYDOWN:
            
            # If the Backspace key has been pressed set
            # running to false to exit the main loop
            if event.key == K_BACKSPACE:
                gameOn = False
                
        # Check for QUIT event
        elif event.type == QUIT:
            gameOn = False
    
    
    
    # Update the display using flip
    pygame.display.flip()
