#!/usr/bin/python2.7
import urllib2
import json
elective_posts = [
    'Kenya_Elections_Presidential',
    'Kenya_Elections_Senator',
    'Kenya_Elections_Governor'
]

# arrays to hold the query parameters for the query
county = ['030']
constituency = ['159']
ward = []
polling_center = []
polling_station = []

presidential_init = '1'
#main iebc url
main_url = 'https://public.rts.iebc.or.ke/enr/index.html#/Kenya_Elections_Presidential/'+presidential_init

#string to build the query
query_string = []

# a function to build a query to send to the url
def build_Query():
     string = '/'+presidential_init+county[0]+'/'+presidential_init+county[0]+constituency[0]
     query_string.append(string)
   
def main():
    build_Query()
    req = urllib2.Request(main_url+query_string[0])
    response = urllib2.urlopen(req)
    jsonData = json.load(response)
        #filedata.append(jsonData);
    with open('data.json', 'w') as outfile:
        json.dump(jsonData,outfile);        
 

main();            
   

            
            
    

  

