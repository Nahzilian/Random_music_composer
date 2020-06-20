import random
#import json
#import numpy as np
"""
Song components:

Resoruces

Algorithm to refine the resources

Algorithm to rearrange the resources

For this part:

Algorithm to rearrange the resources:
"""


class Rearrange:

    def __init__(self):
        #2d array
        self.soundPattern = []
        self.songPattern = []
        #self.resourceRange = resourceRange
        self.highPitchPatterns = []
        self.lowPitchPatterns = []
        self.commonPatterns = []
    def generateSoundPattern(self):
        i = 0
        #generate 100 notes
        while i < 100:
            self.soundPattern.append(random.randint(0,19))
            i+=1
        
        noteCounters = {
            "count0":0,
            "count1":0,
            "count2":0,
            "count3":0,
            "count4":0,
            "count5":0,
            "count6":0,
            "count7":0,
            "count8":0,
            "count9":0,
            "count10":0,
            "count11":0,
            "count12":0,
            "count13":0,
            "count14":0,
            "count15":0,
            "count16":0,
            "count17":0,
            "count18":0,
            "count19":0,
        }
        for i in self.soundPattern:
            noteCounters["count"+str(i)] = noteCounters["count"+str(i)] + 1

        return noteCounters
        
    def highPitchPattern(self,counters):
        highPitch = []
        frequentCallNotes = []
        commonCallNotes = []
        lowCallNotes = []
        for i in range(len(counters)):
            if counters["count"+str(i)] < 5:
                lowCallNotes.append(i)
            elif counters["count"+str(i)] < 10:
                commonCallNotes.append(i)
            else:
                frequentCallNotes.append(i)
        if len(lowCallNotes) < len(frequentCallNotes):
            tempPattern = []
            for i in range(len(lowCallNotes)):
                a = 1
        else:
            a = 2

        return highPitch

    def lowPitchPattern(self,counters):
        return stuff

    def commonPattern(self):
        return stuff
    
    def songPatternGenerator(self):
        return stf