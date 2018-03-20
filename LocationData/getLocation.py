from os import listdir
from os.path import isfile, join

#Program purpose: Extracts IP information from AWS Logs, writes it out to a file

#Returns a string representing the IP address for a given line,
#Or an empty string if there is none
def parse_data(line):
   lis = line.split()
   upNext = False
   for text in lis:
      if upNext == True and text[0].isdigit():
         return text + '\n'

      #date always predates ip, starts with [
      if text[0] == '[':
         upNext = True

   return ''

#writes the visiting ip address for a given file
def parse_file(filename, outputfile):
   #AWS log data contained in folder root
   inputfile = open('root/' + filename)

   for line in inputfile:
      outputfile.writelines(parse_data(line))

   inputfile.close()


def main():
   outputfile = open('ips.txt', 'w')
   files = [f for f in listdir('root') if isfile(join('root', f))]
   for file in files:
      parse_file(file, outputfile)
   outputfile.close()

if __name__ == "__main__":
   main()
