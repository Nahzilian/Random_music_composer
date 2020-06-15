import matplotlib.pyplot as plt 
import numpy as np
import random

class Pitch:
    def __init__(self,pitchType):
        self.pitchStart = 0
        self.pitchPivot = 0
        self.pitchEnd = 0
        self.pitchType = pitchType
    
    def setPitchType(self):
        self.pitchEnd = 10 
        if self.pitchType == "low":
            #self.pitchEnd = self.pitchEnd*np.pi
            x = np.arange(self.pitchStart,self.pitchEnd,0.1) # start stop step
            y = np.sin(x)
            self.makeGraphPitch(x,y)
        elif self.pitchType == "high":
            self.pitchEnd = self.pitchEnd*np.pi
            x = np.arange(self.pitchStart,self.pitchEnd,0.1) # start stop step
            y = np.sin(x)
            self.makeGraphPitch(x,y)



    def makeGraphPitch(self,x,y):
        plt.plot(x,y)
        plt.show()

    def showGraph(self):
        self.setPitchType()


test = Pitch("low")
test.showGraph()