import matplotlib.pyplot as plt 
import numpy as np
import random

test = 1

# pitchStart = 0
# pitchEnd = 10
# x = np.arange(pitchStart,pitchEnd,1) # start stop step
# y = np.cos(x)
# plt.plot(x,y)
# plt.show()
# create 1000 equally spaced points between -10 and 10
x = [110,116.65,123.48,130.60,146.84,155.56,164.82,174.62,185.00,196.00,207.66]
# calculate the y value for each element of the x vector
y = [x[i]*float(2**(i+10/13)) for i in range(len(x))]  
plt.subplots()
plt.plot(x, y)
plt.show()

gd = 0