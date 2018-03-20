from __future__ import division
from urllib2 import urlopen
import time

#Purpose: take the data written by getLocation, write it out to
#a JavaScript file in the form of an array that can be used by leaflet-heat
#Note this program is not concerned with efficiency due to the necessary waiting

def getIPData(inputfile):
   # At each index is a list [latitude, longitude, occurence count]
   ipData = []
   #ip addresses total count
   total = 0
   for line in inputfile:
      response = urlopen('http://api.ipinfodb.com/v3/ip-city/?key=<API-KEY-NOT-GIVEN-FOR-PROTECTION>&ip=' + line).read()
      lis = response.split(';')
      #To avoid a 503 error, wait for a short period of time in between requests
      time.sleep(1)
      added = False
      for data in ipData:
         if data[0] == lis[8] and data[1] == lis[9]:
            added = True
            data[2] += 1

      if added == False:
         ipData.append([lis[8], lis[9], 1])

      total += 1

   return (ipData, total)

def writeIPData(outputfile, ipData, total):
   # change each index to [lat, long, percentage of occurence], then write it out in format
   for item in ipData:
      item[2] = item[2] / total
      to_write = '[' + item[0] + ', ' + item[1] + ', ' + str(item[2]) + '],\n'
      outputfile.writelines(to_write)

def main():
   inputfile = open('ips.txt', 'r')
   outputfile = open('../LocationData/locations.js', 'w')

   #write opening of addressPoints
   outputfile.writelines('var addressPoints = [\n')

   (ipData, total) = getIPData(inputfile)
   print(total)
   print(ipData)
   writeIPData(outputfile, ipData, total)
   
   #write conclusion of addressPoints
   outputfile.writelines('];')
   outputfile.close()
   inputfile.close()

if __name__ == '__main__':
   main()
