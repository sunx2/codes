from a import verify,Create_post
from text import b,c,d , st
from time import sleep
import json
from multiprocessing import Process


p = json.load(open("data.json",'r'))

while True:
    if p["strings"]["status"]!="active":
        print("You are locked out from using it.")
        exit()
    a = input("password >>  ")
    if a == p["strings"]["code"]:
        e = False
        for x in range(int(p["counters"]["min"]),int(p["counters"]["max"])):
            a = Create_post(p["login"]["id"],x)    
            if verify(a):
                print(f"found >> {x} \r")
                if p["login"]["id"] not in p["passwords"].keys():
                        p['passwords'][p["login"]["id"]]=x
                        json.dump(p , open("data.json" , "w"))
                print(f"Attempted {x} times",end="\r",flush=True)
                e = True
                exit()
            else:
                print(f"Attempted {x} times",end="\r",flush=True)
                e = False
                continue
        if e==False:
            print("no return")
            exit()
    else:
        print("No Permission granted. locking system")
        p["strings"]["status"]="locked"
        json.dump(p , open("data.json" , "w"))
        print("locked .. existing")
        exit()
        
